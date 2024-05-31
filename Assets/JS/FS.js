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


// $(document).ready(function(){
//     const ProductContainer = $('.productsContainer');
//     for(let i = 1; i <= 15; i++){
//       const productItem = $('<div>').addClass('productItem');
//       ProductContainer.append(productItem);
//       $.get('Product.html', function(data){
//         const productData = $(data);
//         const productImg = productData.find('.productImg');  // Tìm .productImg trong productData
//         productImg.css({
//           'background': `url('../img/Product/ProductFS/merzy1.png') no-repeat`,

//           'background-size': 'cover',
//           'max-width': '340px',
//           'height': '350px',
//           'margin': '20px 40px 8px ',

//           'box-shadow': '3px 2px 4px rgba(0, 0, 0, 0.2)'
//         });
//         productItem.html(productData);  // Chèn toàn bộ productData vào productItem
//       })
//       .fail(function(error){
//         console.error('Lỗi khi đọc file', error);
//       });
//     }
//   });

// document.addEventListener('DOMContentLoaded',function(){
//   fetch('../data/products.json')
//   .then(respone => respone.json())
//   .then(data=> {

//   })
// })




// Hàm để tải nội dung HTML từ file


function loadHTML(url) {
    return fetch(url).then(response => response.text());
}

// Hàm để tải dữ liệu JSON từ file
function loadJSON(url) {
    return fetch(url).then(response => response.json());
}

// Tải HTML mẫu và dữ liệu JSON
Promise.all([loadHTML('../html/Product.html'), loadJSON('../data/products.json')])
    .then(([htmlTemplate, products]) => {
        // Tạo một div tạm thời để chứa nội dung HTML mẫu
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlTemplate.trim();

        // Lấy phần tử mẫu productItem
        var productTemplate = tempDiv.querySelector('.productItem');

        // Lấy phần tử container
        var productContainer = document.querySelector('.productsContainer');

        // Lặp qua mỗi object trong mảng products và tạo ra 15 sản phẩm
        for (let i = 0; i < products.length; i++) {
            // Chọn sản phẩm từ JSON theo chỉ số i
            let product = products[i % products.length];

            // Sao chép phần tử mẫu
            var productItem = productTemplate.cloneNode(true);

            // Cập nhật phần tử productImg
            var productImg = productItem.querySelector('.productImg');
            productImg.style.backgroundImage = `url(${product.URLimg})`;

            // Cập nhật phần tử productCost
            var productCost = productItem.querySelector('.productCost');
            productCost.textContent = product.Cost;

            // Cập nhật phần tử productName
            var productName = productItem.querySelector('.productName');
            productName.textContent = product.Name;

            // Thêm productItem vào productContainer
            productContainer.appendChild(productItem);
        }
    })
    .catch(error => console.error('Error loading content:', error));

var currentTime = new Date();
var hours = currentTime.getHours().toString().padStart(2, '0');
var timeNowSet = document.querySelector('.timeNow_set');
timeNowSet.textContent = hours + ':00';
var timeNextSet = document.querySelector('.timeNext_set');
var timeCount = Number(hours) + 2;
timeNextSet.textContent = timeCount + ':00';