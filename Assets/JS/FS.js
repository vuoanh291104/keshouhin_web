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
        var hotProductContainer = document.querySelector('.hotProductsContainer');
        
        // Lặp qua mỗi object trong mảng products và tạo ra 15 sản phẩm
        for (let i = 0; i < products.length; i++) {
            // Chọn sản phẩm từ JSON theo chỉ số i
            let product = products[i];
            
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
            if (product.Tag =="hot") {
                
                hotProductContainer.appendChild(productItem);
            }
            else if (product.Tag =="fs" ) {
                
                productContainer.appendChild(productItem);
            } 
            
            
        }
        
    })
    .catch(error => console.error('Error loading content:', error));

    
   



setInterval(function() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var curTime= Number(hours);
    var timeCount =0;
    var Nexttime=0;
    if(currentTime.getHours()>=22){
        timeCount=24;
        Nexttime=0;
    }else{
        timeCount= Number(curTime) + 2;
        Nexttime=timeCount;
    }
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var nextSecond = 0;
    var nextMinute = 0;
    var nextHours = 0;
    var SetHour = document.querySelector('.countDownHours');
    var SetMin = document.querySelector('.countDownMin');
    var SetSe = document.querySelector('.countDownSe');
    if(currentTime.getHours() %2==0){
        curTime= hours;
    }else {
        curTime = Number(hours)-1;
        if(timeCount==24){
            Nexttime=0;
        }else {
            Nexttime=timeCount-1;
            timeCount=Nexttime;
        }
        
    }
    if (seconds === 0 && minutes === 0) {
        nextHours = Number(timeCount) - Number(hours);
    } else if (seconds < 60) {
        nextSecond = 60 - Number(seconds)-1;
        nextMinute = 60 - Number(minutes) - 1;
        nextHours = Number(timeCount) - Number(hours) - 1;
    } else {
        nextSecond = 60 - Number(seconds)-1;
        nextMinute = 60 - Number(minutes);
        nextHours = Number(timeCount) - Number(hours) - 1;
    }
    var timeNowSet = document.querySelector('.timeNow_set');
    timeNowSet.textContent = curTime.toString().padStart(2, '0') + ':00';
    var timeNextSet = document.querySelector('.timeNext_set');
    timeNextSet.textContent = Nexttime.toString().padStart(2,'0') + ':00';

    SetHour.textContent = nextHours.toString().padStart(2, '0');
    SetMin.textContent = nextMinute.toString().padStart(2, '0');
    SetSe.textContent = nextSecond.toString().padStart(2, '0');
    
    
}, 300);