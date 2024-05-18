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

