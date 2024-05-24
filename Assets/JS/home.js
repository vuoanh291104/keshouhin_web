$(document).ready(function() {
    function loadContent(url) {
      var mainElement = $('.home_page');
      mainElement.empty(); // Xóa nội dung hiện tại của phần <main>
  
      $.ajax({
        url: url,
        dataType: 'html',
        success: function(data) {
          mainElement.html(data); // Hiển thị nội dung của trang trong phần <main>
        }
      });
    }
  
    $('.about').click(function(event) {
      event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
      loadContent('About.html');
    });
  
    $('.flashSale').click(function(event) {
      event.preventDefault();
      loadContent('FlashSales.html');
    });
  
    $('.hot').click(function(event) {
      event.preventDefault();
      loadContent('Hot.html');
    });
  });

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

document.addEventListener('DOMContentLoaded',(event)=>{
  const btnSignIn = document.getElementById('iconID')
  const signIn = document.getElementById('signIn')
  btnSignIn.addEventListener('click',()=>{
    signIn.style.display = 'block'
  })
})

