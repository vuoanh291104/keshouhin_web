
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
                productItem.setAttribute('id', product.ID);
                // Cập nhật phần tử productImg
                var productImg = productItem.querySelector('.productImg');
                productImg.style.backgroundImage = `url(${product.URLimg})`;

                // Cập nhật phần tử productCost
                var productCost = productItem.querySelector('.productCost');
                productCost.textContent = product.CostSale + '.000đ';

                // Cập nhật phần tử productName
                var productName = productItem.querySelector('.productName');
                productName.textContent = product.Name;
                
                var productCostmono = productItem.querySelector('.productCostMono');
                productCostmono.textContent=product.Cost + '.000đ';

                var productItemB = productItem.querySelector('.productItemBox');
                productItemB.addEventListener('click', () => {
                    // Điều hướng đến trang chi tiết sản phẩm với id
                    window.location.href = `chitiet.html?id=${product.ID}`;
                });
                // Kiểm tra và thêm sản phẩm vào container tương ứng
                if (product.Tag === "hot" && hotProductContainer) {
                    hotProductContainer.appendChild(productItem);
                } else if (product.Tag === "fs" && productContainer) {
                    var saleFS = document.createElement("div");

                    // Thêm nội dung vào <div> (tùy chọn)
                    saleFS.innerHTML = Math.round( ((product.Cost - product.CostSale)/product.Cost)*100) +'%';

                    // Gán các thuộc tính CSS cho <div>
                    saleFS.style.position = "absolute";
                    saleFS.style.backgroundColor = "var(--color-lightpink)";
                    saleFS.style.width = "50px";
                    saleFS.style.height = "50px";
                    saleFS.style.borderRadius = "50%";
                    saleFS.style.textAlign = "center";
                    saleFS.style.right = "16px";
                    saleFS.style.top = "16px";
                    saleFS.style.lineHeight = "50px";
                    saleFS.style.fontSize = "20px";
                    saleFS.style.fontWeight ="bold";
                    productItem.appendChild(saleFS);
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


