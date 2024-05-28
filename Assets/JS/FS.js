// $(document).ready(function() {
//     // Tạo 15 productItem và gán ảnh tương ứng
//     const $productContainer = $('.productsContainer');
//     for (let i = 1; i <= 15; i++) {
//       const $productItem = $('<div>').addClass('productItem');
//       $productItem.find('.productImg').css('background', `url('../img/Product/ProductFS/${i}.png')`,`no-repeat`);
//       $productContainer.append($productItem);
//     }
//   });
//     $(document).ready(function() {
//         // Đọc nội dung file HTML
//         $.get('Product.html', function(data) {
//           // Gán nội dung vào các phần tử có class "content"
//           $('.productItem').html(data);
//         })
//         .fail(function(error) {
//           console.error('Lỗi khi đọc file:', error);
//         });
//       });


// $(document).ready(function(){
//   const ProductContainer = $('.productsContainer');
//   for(let i= 1; i<=15; i ++){
//     const productItem = $('<div>').addClass('productItem');
//     ProductContainer.append(productItem);
//     $.get('Product.html', function(data){
//       $(data).find('productImg').css({
//         'background': `url('../img/Product/ProductFS/${i}.png') no-repeat`,
//         'background-size': 'cover',
//         'max-width': '340px',
//         'height': '270px',
//         'margin': '18px',
//         'box-shadow': '3px 2px 4px rgba(0, 0, 0, 0.2)'
//       });
//       $('.productItem').html(data);
//     })
//     .fail(function(error){
//       console.error('Lỗi khi đọc file',error);
//     })
    
    

//   }
// })


$(document).ready(function(){
    const ProductContainer = $('.productsContainer');
    for(let i = 1; i <= 15; i++){
      const productItem = $('<div>').addClass('productItem');
      ProductContainer.append(productItem);
      $.get('Product.html', function(data){
        const productData = $(data);
        const productImg = productData.find('.productImg');  // Tìm .productImg trong productData
        productImg.css({
          'background': `url('../img/Product/ProductFS/${i}.png') no-repeat`,
        
          'background-size': 'cover',
          'max-width': '340px',
          'height': '350px',
          'margin': '20px 46px 8px ',

          'box-shadow': '3px 2px 4px rgba(0, 0, 0, 0.2)'
        });
        productItem.html(productData);  // Chèn toàn bộ productData vào productItem
      })
      .fail(function(error){
        console.error('Lỗi khi đọc file', error);
      });
    }
  });