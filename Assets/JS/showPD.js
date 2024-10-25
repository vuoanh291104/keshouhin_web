isLogin = JSON.parse(sessionStorage.getItem('isLogin'));
loggedUser = JSON.parse(sessionStorage.getItem('loggedUser'));

var productApi = "http://localhost:3000/products";
cartApi = 'http://localhost:3000/cart';
function start() {
    getProduct(products => renderProducts(products, '.allProductsContainer'));
    getProduct(products => renderProducts(products.filter(product => product.Tag === 'fs'), '.productsContainer'));
    getProduct(products => renderProducts(products.filter(product => product.Tag === 'hot'), '.hotProductsContainer'));
    getProduct(searchProduct);
}

start();

function checkUserExists(userID) {
    return fetch(cartApi)
        .then(response => response.json())
        .then(carts => {
            return carts.some(cart => cart.userID == userID);
        });
}
function addToCart(data){
    if (!isLogin || !loggedUser) {
        alert('Bạn phải đăng nhập để thêm sản phẩm vào giỏ hàng.');
        return;
    }
    fetch(cartApi, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Sản phẩm đã được thêm vào giỏ hàng:', data);
        alert('Sản phẩm đã được thêm vào giỏ hàng!');
    })
    .catch(error => {
        console.error('Có lỗi xảy ra:', error);
        alert('Có lỗi xảy ra, vui lòng thử lại sau.');
    });
}

function updateCart(productID){
    checkUserExists(loggedUser.id).then(exists => {
        if (exists) {
            // Nếu đã có cart cho user, cần thêm sản phẩm vào mảng products
            fetch(cartApi)
                .then(response => response.json())
                .then(carts => {
                    const userCart = carts.find(cart => cart.userID == loggedUser.id);
                    if (userCart) {
                        
                        const existingProduct = userCart.products.find(product => product.productID === productID);
                        if (existingProduct) {
                            
                            existingProduct.Quantity = (parseInt(existingProduct.Quantity) + 1).toString();
                        } else {
                            
                            userCart.products.push({
                                "productID": productID,
                                "Quantity": "1"
                            });
                        }
                        // Cập nhật cart
                        fetch(cartApi + `/${userCart.id}`, { 
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(userCart)
                        })
                        .then(response => response.json())
                        .then(data => {
                            console.log('Giỏ hàng đã được cập nhật:', data);
                            alert('Sản phẩm đã được thêm vào giỏ hàng!');
                        })
                        .catch(error => {
                            console.error('Có lỗi xảy ra:', error);
                            alert('Có lỗi xảy ra khi cập nhật giỏ hàng, vui lòng thử lại.');
                        });
                    } else {
                        console.error('Giỏ hàng không tồn tại cho người dùng này.');
                    }
                });
        } else {
            let cart = {
                userID: loggedUser.id,
                "products":[
                    {
                        "productID":productID,
                        "Quantity":"1"
                    }
                ]
            }
            addToCart(cart);
        }
    })
}
function getProduct(callback) {
    fetch(productApi)
        .then(response => response.json())
        .then(callback);
}

function renderProducts(products, containerSelector) {
    var listProducts = document.querySelector(containerSelector);
    var productItem = products.map(product => {
        var saleFS = '';
        if (product.Tag === 'fs' && containerSelector == '.productsContainer') {
            var discountPercentage = Math.round(((product.Cost - product.CostSale) / product.Cost) * 100) + '%';
            saleFS = `<div class="saleFS">${discountPercentage}</div>`;
        }

        return `
            <div class="productItem" data-id="${product.id}">
                <div class="productItemBox">
                    <div class="productImg" style="background-image: url('${product.URLimg}');"></div>
                    <div class="PCost">
                        <p class="productCost">${product.CostSale}.000đ</p>
                        <p class="productCostMono">${product.Cost}.000đ</p>
                    </div>
                    <p class="productName">${product.Name}</p>
                    ${saleFS}
                </div>
                <a href="#!">
                    <button class="addToCart" onclick="addToCart('${product.id}">
                        <p class="addToCart_Text">Thêm vào giỏ hàng</p>
                    </button>
                </a>
            </div>
        `;
    }).join('');

    listProducts.innerHTML = productItem;

    // Gán sự kiện click cho từng sản phẩm
    document.querySelectorAll('.productItem').forEach(item => {
        item.addEventListener('click', function() {
            // var productId = this.getAttribute('data-id');
            // window.location.href = `chitiet.html?id=${productId}`;
            var productId = item.getAttribute('data-id');
            var productLink = document.createElement('a');
            productLink.href = `chitiet.html?id=${productId}`;
            document.body.appendChild(productLink);
            
            // Tự động click vào thẻ <a> để điều hướng
            productLink.click();
            
            // Xóa thẻ <a> sau khi điều hướng
            document.body.removeChild(productLink);
        });
        item.querySelector('.addToCart').addEventListener('click', function(event) {
            event.stopPropagation();
            console.log(item.getAttribute('data-id'));
            updateCart(item.getAttribute('data-id'));

        });
    })
}
function handleSearchKeyDown(event) {
    if (event.key === 'Enter') {
        var searchInputValue = document.getElementById("search").value; // Lấy giá trị từ ô tìm kiếm
        console.log(searchInputValue)
        if (searchInputValue) {
            // Điều hướng đến trang allPro.html với từ khóa tìm kiếm
            window.location.href = `AllProducts.html?search=${searchInputValue}`;
        }
        
    }
}
// Hàm lấy từ khóa tìm kiếm từ URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function searchProduct(products) {
    var searchValue = getQueryParam('search'); 
    console.log(searchValue);
    if (searchValue) {
        var productSearch = products.filter(p => {
            return p.Name.toLowerCase().includes(searchValue.toLowerCase());
        });
        renderProducts(productSearch, '.allProductsContainer');
    }
}

// Lấy ID sản phẩm từ URL
const productIdFromUrl = getQueryParam('id');

// Gán sự kiện click cho nút .btnGioHang
document.querySelector('.btnGioHang').addEventListener('click', function() {
    if (productIdFromUrl) {
        updateCart(productIdFromUrl);
    } else {
        alert('Không tìm thấy ID sản phẩm.');
    }
});