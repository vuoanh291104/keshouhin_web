// Hàm để lấy tham số URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Hàm để tải dữ liệu JSON từ file
function loadJSON(url) {
    return fetch(url).then(response => response.json());
}

// Hàm để cập nhật chi tiết sản phẩm
function loadProductDetails() {
    const productId = getQueryParam('id');
    if (!productId) {
        console.error('Product ID is missing in URL');
        return;
    }

    loadJSON('../data/products.json')
        .then(products => {
            const product = products.find(p => p.ID == productId);
            if (!product) {
                console.error('Product not found');
                return;
            }

            // Cập nhật hình ảnh sản phẩm
            const productImg = document.querySelector('.anhProduct img');
            productImg.src = product.URLimg;

            // Cập nhật tên sản phẩm
            const productName = document.querySelector('.nameProd p');
            productName.textContent = product.Name;

            // Cập nhật giá sản phẩm
            const productCost = document.querySelector('.cost p');
            productCost.textContent = product.CostSale +'.000';

            const productBandImg =document.querySelector('.anhband');
            productBandImg.src=product.BandImg;

            const bandName = document.querySelector('.bandProducttName');
            bandName.textContent = product.Band;
            const productMota = document.querySelector('.txtMoTa p');
            productMota.textContent = product.About;
            productMota.innerHTML = product.About.replace(/\n/g, '<br>');

        })
        .catch(error => console.error('Error loading product details:', error));
}

// Gọi hàm loadProductDetails khi trang được tải
document.addEventListener('DOMContentLoaded', loadProductDetails);
