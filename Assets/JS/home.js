var userApi = 'http://localhost:3000/user';
let isLogin = false;
let loggedUser = null;

function getUser(callback) {
    fetch(userApi)
        .then(response => response.json())
        .then(callback);
}

function handleLogin(users) {
    let email = document.getElementById('txtUserName').value;
    let pass = document.getElementById('txtPassword').value;

    let isSucess = users.some(user => {
        if (user.email == email && user.password == pass) {
            alert('Đăng nhập thành công');
            loggedUser = user;
            isLogin = true;

            // Lưu thông tin người dùng vào localStorage để giữ trạng thái đăng nhập
            sessionStorage.setItem('loggedUser', JSON.stringify(loggedUser));
            sessionStorage.setItem('isLogin', JSON.stringify(isLogin));

            return true; // Ngừng lặp khi tìm thấy
        }
        return false; // Tiếp tục lặp
    });
    
    if (!isSucess) {
        alert('Đăng nhập thất bại. Tài khoản không tồn tại.');
        loggedUser = null;
        isLogin = false;

        // Xóa thông tin đăng nhập khỏi localStorage nếu thất bại
        sessionStorage.removeItem('loggedUser');
        sessionStorage.setItem('isLogin', JSON.stringify(isLogin));
    }
}

function checkLogin() {
    // Kiểm tra trạng thái đăng nhập từ localStorage
    isLogin = JSON.parse(sessionStorage.getItem('isLogin'));
    loggedUser = JSON.parse(sessionStorage.getItem('loggedUser'));

    if (isLogin && loggedUser) {
        var imgLogin = document.getElementById('modaljs');
        var loginTrue = document.getElementById('accLogin');
        imgLogin.style.display = 'none';
        loginTrue.style.display = 'block';
        loginTrue.textContent = loggedUser.name.charAt(0).toUpperCase();
    
    }
}

document.addEventListener('DOMContentLoaded', function () {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
            const btnSignIn = document.getElementById('modaljs');
            const signIn = document.getElementById('signIn');
            if (btnSignIn && signIn) {
                btnSignIn.addEventListener('click', () => {
                    signIn.style.display = 'block';
                });
            }

            // Event for button LogIn
            const btnOK = document.getElementById('btnOK');
            const btnCancel = document.getElementById('btnCancel');

            if (btnOK && btnCancel) {
                const offSignIn = () => signIn.style.display = 'none';

                btnOK.addEventListener('click', () => {
                    getUser(users => {
                        handleLogin(users);
                        checkLogin(); // Di chuyển checkLogin vào đây
                        if (isLogin) {
                            offSignIn(); // Tắt modal nếu đăng nhập thành công
                        }
                    });
                });

                btnCancel.addEventListener('click', () => {
                    offSignIn();
                });
            }

            // Kiểm tra trạng thái đăng nhập khi tải trang
            checkLogin();
        })
        .catch(error => console.error('Error loading header:', error));
});


document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.img_slider');
    const totalSlides = slides.length;
    const slideContainer = document.createElement('div');
    slideContainer.classList.add('slides');

    // Di chuyển tất cả các slide vào trong slideContainer
    slides.forEach(slide => slideContainer.appendChild(slide));

    // Thêm slideContainer vào slider
    const slider = document.querySelector('.slider');
    slider.appendChild(slideContainer);

    function showSlides() {
        // Tăng chỉ số slideIndex
        slideIndex++;
        if (slideIndex >= totalSlides) {
            slideIndex = 0;
        }
        // Dịch chuyển slide
        slideContainer.style.transform = `translateX(${-slideIndex * 100}%)`;
        // Gọi lại hàm sau một khoảng thời gian (ví dụ: sau mỗi 2 giây)
        setTimeout(showSlides, 2000);
    }

    // Hiển thị slide đầu tiên
    slideContainer.style.transform = `translateX(0)`;
    setTimeout(showSlides, 500);
});




document.addEventListener("DOMContentLoaded", function() {
    let containerFS = document.querySelector('.FSadd .flashsale_container');
    let productFSes = document.querySelectorAll('.FSadd .flashsale_container .FSProduct');
    let btn_Left = document.querySelector('.icon_left');
    let btnRight = document.querySelector('.icon_right');

    let active = 0;
    let lengProducts = productFSes.length - 1;

    btnRight.onclick = function() {
        if (active + 4 > lengProducts) {
            active = 0;
        } else {
            active += 4;
        }
        reloadProduct();
        

    }
    let refresProduct = setInterval(()=> {btnRight.click()},5000);

    btn_Left.onclick = function() {
        if (active - 4 < 0) {
            active = lengProducts - (4 - (active + 1));  
        } else {
            active -= 4;
        }
        reloadProduct();
    }

    function reloadProduct() {
        let checkleft = productFSes[active].offsetLeft;
        containerFS.style.left = (-checkleft +32) + 'px';
        clearInterval(refresProduct);
        refresProduct = setInterval(()=> {btnRight.click()},5000);
    }
});

var productApi = "http://localhost:3000/products";

document.addEventListener('DOMContentLoaded', () => {
    fetch(productApi)
        .then(response => response.json())
        .then(products => {
            const flashsaleContainer = document.querySelector('.flashsale_container');
            const PFSes = document.querySelectorAll('.FSProduct');
            
            for(var i=0 ;i <12; i++){
                const product = products[i];

                // Lấy các phần tử con trong `.FSProduct`
                const FSProduct = PFSes[i];
                const img = FSProduct.querySelector('.FSProduct_img');
                const cost = FSProduct.querySelector('.FSProduct_cost');
                const name = FSProduct.querySelector('.FSProduct_name');
                const monoCost = FSProduct.querySelector('.FSProduct_costMono');
                var percent = FSProduct.querySelector('.percent_buy');
                // Đặt nội dung từ `products.json` vào các phần tử tương ứng
                img.src = product.URLimg;
                img.alt = product.Band;
                cost.textContent = `${product.CostSale}.000đ`; // Giả sử `Cost` lưu giá bán
                name.textContent = product.Name;
                monoCost.textContent= `${product.Cost}.000đ`
                var percentValue = (100 - Math.round(((product.Quantity - product.QuantityOrder) / product.Quantity) * 100)) + '%';
                percent.textContent = `${percentValue} `
                console.log(percent.textContent)
                FSProduct.addEventListener('click', () => {
                    // Điều hướng đến trang chi tiết sản phẩm với id
                    window.location.href = `chitiet.html?id=${product.id}`;
                });
            }
        })
        .catch(error => console.error('Error fetching the products:', error));
});
