// $(document).ready(function() {
//     function loadContent(url,callback) {
//       var mainElement = $('.home_page');
//       mainElement.empty(); // Xóa nội dung hiện tại của phần <main>

//       $.ajax({
//         url: url,
//         dataType: 'html',
//         success: function(data) {
//           mainElement.html(data); // Hiển thị nội dung của trang trong phần <main>
//           if (callback) callback();
//         }
//       });
//     }

//     $('.about').click(function(event) {
//       event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
//       loadContent('../html/About.html');
//     });

//     $('.flashSale').click(function(event) {
//       event.preventDefault();
//       loadContent('../html/FlashSales.html',function(){
//         $.getScript('../JS/FS.js'); 
//       });
//     });

//     $('.hot').click(function(event) {
//       event.preventDefault();
//       loadContent('../html/Hot.html');
//     });
//   });

//   $(document).ready(function(){
//     $(window).scroll(function(){
//         var mainHeadElement= $('.bodyhead');
//         var BodyScrollElement = $('.addBodyScroll')
//         var navElement= $('.nav');
//         if($(this).scrollTop()){   
//             navElement.addClass('navScroll'); 
//             BodyScrollElement.addClass('add'); 
//             mainHeadElement.addClass('cut');
//         }else{
//             navElement.removeClass('navScroll');
//             BodyScrollElement.removeClass('add');
//             mainHeadElement.removeClass('cut');


//         }
//     });

// });

document.addEventListener('DOMContentLoaded', (event) => {
    const btnSignIn = document.getElementById('modaljs')
    const signIn = document.getElementById('signIn')
    btnSignIn.addEventListener('click', () => {
        signIn.style.display = 'block'
    })
})

// document.addEventListener("DOMContentLoaded", function() {
//     var slideIndex = 0;
//     showSlides();

//     function showSlides() {
//         var slides = document.querySelectorAll('.img_slider');
//         // Ẩn tất cả các ảnh
//         for (var i = 0; i < slides.length; i++) {
//             slides[i].style.display = 'none';
//         }
//         // Tăng chỉ số slideIndex
//         slideIndex++;
//         if (slideIndex > slides.length) {
//             slideIndex = 1;
//         }
//         // Hiển thị ảnh hiện tại
//         slides[slideIndex - 1].style.display = 'block';
//         // Gọi lại hàm sau một khoảng thời gian (ví dụ: sau mỗi 2 giây)
//         setTimeout(showSlides, 2000);
//     }
// });
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



// $(document).ready(function () {
//     function loadContent(url) {
//         var mainElement = $('.home_page');
//         mainElement.empty(); // Xóa nội dung hiện tại của phần <main>

//         $.ajax({
//             url: url,
//             dataType: 'html',
//             success: function (data) {
//                 mainElement.html(data); // Hiển thị nội dung của trang trong phần <main>

//             },
//             error: function (xhr, status, error) {
//                 console.error('Error loading content:', error);
//             }
//         });
//     }

//     $('.about').click(function (event) {
//         event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
//         loadContent('About.html');
//     });

//     $('.flashSale').click(function (event) {
//         event.preventDefault();
//         loadContent('FlashSales.html');

//     });

//     $('.hot').click(function (event) {
//         event.preventDefault();
//         loadContent('hot.html');
//     });
    
//     $('.isClick').click(function(event){
//         event.preventDefault();
//         signIn.style.display='none';
//         loadContent('signIn.html');
        
//     });
//     $('.SeeMoreBox').click(function(event){
//         loadContent('AllProducts.html')
//     });

//     $('.icon_cart').click(function(event){
        
//         loadContent('Cart.html')
//     })
    
// });

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
