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
                    const txtUserName = document.getElementById('txtUserName');
                    const txtPassword = document.getElementById('txtPassword');
                    txtUserName.classList.remove('error');
                    txtPassword.classList.remove('error');

                    var userName = txtUserName.value.trim();
                    var password = txtPassword.value.trim();

                    if (userName && password) {
                        alert('Thông báo: Đăng nhập thành công!');
                        offSignIn();
                    } else {
                        if (!userName) {
                            txtUserName.classList.add('error');
                        }
                        if (!password) {
                            txtPassword.classList.add('error');
                        }
                        alert('Cảnh báo: Vui lòng nhập đầy đủ thông tin.');
                    }
                });

                btnCancel.addEventListener('click', () => {
                    offSignIn();
                });
            }
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



document.addEventListener('DOMContentLoaded', () => {
    fetch('../data/products.json')
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
                // Đặt nội dung từ `products.json` vào các phần tử tương ứng
                img.src = product.URLimg;
                img.alt = product.Band;
                cost.textContent = `${product.CostSale}.000đ`; // Giả sử `Cost` lưu giá bán
                name.textContent = product.Name;
                monoCost.textContent= `${product.Cost}.000đ`
                FSProduct.addEventListener('click', () => {
                    // Điều hướng đến trang chi tiết sản phẩm với id
                    window.location.href = `chitiet.html?id=${product.ID}`;
                });
            }
        })
        .catch(error => console.error('Error fetching the products:', error));
});
