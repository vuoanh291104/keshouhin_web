function loadHTML(url) {
    return fetch(url).then(response => response.text());
}

// Hàm để tải dữ liệu JSON từ file
function loadJSON(url) {
    return fetch(url).then(response => response.json());
}
    Promise.all([loadHTML('../html/Product.html'), loadJSON('../data/products.json')])
        .then(([htmlTemplate, products]) => {
            // Tạo một div tạm thời để chứa nội dung HTML mẫu
            var tempDiv = document.createElement('div');
            tempDiv.innerHTML = htmlTemplate.trim();

            // Lấy phần tử mẫu productItem
            var productTemplate = tempDiv.querySelector('.productItem');

            // Lấy phần tử container
            var allProductsContainer = document.querySelector('.allProductsContainer');
           
          

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
               allProductsContainer.appendChild(productItem);
            });
        })
        .catch(error => console.error('Error loading content:', error));
