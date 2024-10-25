// Lấy trạng thái đăng nhập và thông tin người dùng
isLogin = JSON.parse(sessionStorage.getItem('isLogin'));
loggedUser = JSON.parse(sessionStorage.getItem('loggedUser'));
let userCart = null;

var cartBody = document.getElementById('Cart');
var loginFalse = document.querySelector('.notLoginCart');
var listProduct = document.querySelector('.lsSanPham');
cartApi = 'http://localhost:3000/cart';
productApi = 'http://localhost:3000/products';

function getProduct(callback) {
    fetch(productApi)
        .then(response => response.json())
        .then(callback);
}

function getCart(callback) {
    fetch(cartApi)
        .then(response => response.json())
        .then(callback);
}

function renderProductCart(carts, products) {
    userCart = carts.find(cart => cart.userID == loggedUser.id);
    sessionStorage.setItem('userCart', JSON.stringify(userCart));

    if (!userCart || userCart.products.length === 0) {
        listProduct.style.display = 'none';
        cartBody.innerHTML = '<p class="cartEmpty">Giỏ hàng của bạn trống</p>';
        return;
    }

    let cartHTML = userCart.products.map(item => {
        const product = products.find(product => product.id === item.productID);
        return `
            <div class="item">
                <input id="${product.id}" type="checkbox" style="width: 35px; height: 35px;">
                <div class="center">
                    <div class="anh">
                        <img src="${product.URLimg}" alt="" class="anhSanPham">
                    </div>
                    <div class="infoGioHang">
                        <p class="tenSanPham">${product.Name}</p>
                        <p class="giaSanPham">${product.CostSale}.000đ</p>
                    </div>
                    <div class="groupBtnInp">
                        <div class="tru" data-product-id="${item.productID}" style="cursor: pointer;">-</div>
                        <input id="Q${item.productID}" class="value" type="number" value="${item.Quantity}" readonly>
                        <div class="cong" data-product-id="${item.productID}" style="cursor: pointer;">+</div>
                    </div>
                </div>
            </div>
        `;
    }).join("");

    listProduct.innerHTML = cartHTML;

    // Thêm sự kiện lắng nghe cho các div
    document.querySelectorAll('.tru').forEach(div => {
        div.addEventListener('click', function (event) {
            changeQuantity(this.getAttribute('data-product-id'), -1);
        });
    });

    document.querySelectorAll('.cong').forEach(div => {
        div.addEventListener('click', function (event) {
            changeQuantity(this.getAttribute('data-product-id'), 1);
        });
    });
}

function changeQuantity(productID, change) {
    // Lấy userCart từ sessionStorage
    userCart = JSON.parse(sessionStorage.getItem('userCart'));

    if (!userCart) {
        console.error('Giỏ hàng không tồn tại.');
        return;
    }

    // Tìm sản phẩm trong giỏ hàng
    let productItem = userCart.products.find(item => item.productID === productID);

    if (productItem) {
        // Cập nhật số lượng
        productItem.Quantity += change;

        // Đảm bảo số lượng không âm
        if (productItem.Quantity < 0) {
            productItem.Quantity = 0;
        }

        // Cập nhật lại giá trị trong sessionStorage
        sessionStorage.setItem('userCart', JSON.stringify(userCart));

        // Cập nhật giá trị trên giao diện
        var textQuantity = document.getElementById(`Q${productID}`);
        textQuantity.value = productItem.Quantity; // Cập nhật giá trị trong input
        console.log('tới đây r')
        updateCartApi(userCart);
    } else {
        console.error('Sản phẩm không tồn tại trong giỏ hàng.');
    }
}
function updateCartApi(cart) {
    const url = `${cartApi}/${userCart.id}`; // Tạo URL
    console.log('Địa chỉ URL đang gọi:', url); // In địa chỉ URL ra cons
    fetch(url, { // Thay đổi URL nếu cần thiết
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cart)
    })
    .then(response => {
        if (!response.ok) {
            // Log chi tiết phản hồi để biết lý do lỗi
            return response.json().then(errorData => {
                throw new Error('Có lỗi xảy ra: ' + errorData.message);
            });
        }
        return response.json();
    })
    .then(data => {
        console.log('Giỏ hàng đã được cập nhật:', data);
    })
    .catch(error => {
        console.error('Lỗi:', error);
    });
}

function start() {
    if (isLogin && loggedUser) {
        loginFalse.style.display = 'none';
        console.log('User đã đăng nhập:', loggedUser);

        getCart(carts => {
            getProduct(products => {
                renderProductCart(carts, products);
            });
        });
    } else {
        cartBody.style.display = 'none';
        console.log('User chưa đăng nhập.');
    }
}

start();
