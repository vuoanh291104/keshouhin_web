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



$(document).ready(function () {
    function loadContent(url) {
        var mainElement = $('.home_page');
        mainElement.empty(); // Xóa nội dung hiện tại của phần <main>

        $.ajax({
            url: url,
            dataType: 'html',
            success: function (data) {
                mainElement.html(data); // Hiển thị nội dung của trang trong phần <main>
                
            },
            error: function (xhr, status, error) {
                console.error('Error loading content:', error);
            }
        });
    }

    $('.about').click(function (event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
        loadContent('About.html');
    });

    $('.flashSale').click(function (event) {
        event.preventDefault();
        loadContent('FlashSales.html');
        
    });

    $('.hot').click(function (event) {
        event.preventDefault();
        loadContent('hot.html');
    });
});


