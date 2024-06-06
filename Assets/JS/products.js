// // Hàm để tải nội dung HTML từ file


// function loadHTML(url) {
//     return fetch(url).then(response => response.text());
// }

// // Hàm để tải dữ liệu JSON từ file
// function loadJSON(url) {
//     return fetch(url).then(response => response.json());
// }

// // Tải HTML mẫu và dữ liệu JSON
// Promise.all([loadHTML('../html/Product.html'), loadJSON('../data/products.json')])
//     .then(([htmlTemplate, products]) => {
//         // Tạo một div tạm thời để chứa nội dung HTML mẫu
//         var tempDiv = document.createElement('div');
//         tempDiv.innerHTML = htmlTemplate.trim();

//         // Lấy phần tử mẫu productItem
//         var productTemplate = tempDiv.querySelector('.productItem');

//         // Lấy phần tử container
//         var productContainer = document.querySelector('.productsContainer');
//         var hotProductContainer = document.querySelector('.hotProductsContainer');
        
//         // Lặp qua mỗi object trong mảng products và tạo ra 15 sản phẩm
//         for (let i = 0; i < products.length; i++) {
//             // Chọn sản phẩm từ JSON theo chỉ số i
//             let product = products[i];
            
//             // Sao chép phần tử mẫu
//             var productItem = productTemplate.cloneNode(true);

//             // Cập nhật phần tử productImg
//             var productImg = productItem.querySelector('.productImg');
//             productImg.style.backgroundImage = `url(${product.URLimg})`;

//             // Cập nhật phần tử productCost
//             var productCost = productItem.querySelector('.productCost');
//             productCost.textContent = product.Cost;

//             // Cập nhật phần tử productName
//             var productName = productItem.querySelector('.productName');
//             productName.textContent = product.Name;
//             if (product.Tag =="hot") {
                
//                 hotProductContainer.appendChild(productItem);
//             }
//             else if (product.Tag =="fs" ) {
                
//                 productContainer.appendChild(productItem);
//             } 
            
            
//         }
        
//     })
//     .catch(error => console.error('Error loading content:', error));



function loadHTML(url) {
    return fetch(url).then(response => response.text());
}

// Hàm để tải dữ liệu JSON từ file
function loadJSON(url) {
    return fetch(url).then(response => response.json());
}

// Hàm để tải và hiển thị sản phẩm
function loadProducts() {
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
          

            // Lặp qua mỗi object trong mảng products và tạo ra các sản phẩm
            products.forEach(product => {
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
                
                
                // Kiểm tra và thêm sản phẩm vào container tương ứng
                if (product.Tag === "hot" && hotProductContainer) {
                    hotProductContainer.appendChild(productItem);
                } else if (product.Tag === "fs" && productContainer) {
                    productContainer.appendChild(productItem);
                }
                
            });
        })
        .catch(error => console.error('Error loading content:', error));
}

// Kiểm tra sự tồn tại của phần tử container và gọi hàm loadProducts
function checkAndLoadProducts() {
    var productContainer = document.querySelector('.productsContainer');
    var hotProductContainer = document.querySelector('.hotProductsContainer');

    if (productContainer || hotProductContainer) {
        loadProducts();
    } else {
        // Nếu container chưa tồn tại, kiểm tra lại sau một khoảng thời gian ngắn
        setTimeout(checkAndLoadProducts, 100); // Kiểm tra lại sau 100ms
    }
}

// Bắt đầu quá trình kiểm tra và tải sản phẩm
checkAndLoadProducts();
