var formGroupInputs = document.querySelectorAll('.form-group input');
var radioInputs = document.querySelectorAll('input[name="rdSex"]');
var checkBoxInput = document.getElementById('check');
var submitBtn = document.querySelector('.btnDangKy');

// Cờ để theo dõi trạng thái radio button
var isRadioInteracted = false;

// Duyệt qua tất cả các input và thêm sự kiện 'blur' và 'input'
formGroupInputs.forEach(function(input) {
    input.addEventListener('blur', function() {
        validateInput(input); // Chỉ kiểm tra input hiện tại khi blur
        toggleSubmitButton(); // Kiểm tra để hiển thị/ẩn nút đăng ký
    });

    input.addEventListener('input', function() {
        validateInput(input); // Kiểm tra lại mỗi khi có thay đổi
        toggleSubmitButton(); // Kiểm tra để hiển thị/ẩn nút đăng ký
    });
});

// Thêm sự kiện cho các radio button (Giới tính)
radioInputs.forEach(function(radio) {
    radio.addEventListener('change', function() {
        validateRadio();
        isRadioInteracted = true; // Đánh dấu rằng radio button đã được tương tác
        toggleSubmitButton(); // Kiểm tra để hiển thị/ẩn nút đăng ký
    });
});

// Thêm sự kiện cho checkbox (Điều khoản)
checkBoxInput.addEventListener('change', function() {
    validateCheckbox();
    toggleSubmitButton(); // Kiểm tra để hiển thị/ẩn nút đăng ký
});

// Hàm kiểm tra các input thông thường (Name, Email, Phone, Password)
function validateInput(input) {
    const errorElement = document.getElementById(`${input.id}-error`); // Lấy phần tử error tương ứng
    const value = input.value.trim();

    // Kiểm tra trường hợp input bị bỏ trống
    if (!value) {
        errorElement.textContent = `* Vui lòng nhập ${input.id}`;
        errorElement.style.display = 'block';
        input.classList.add('invalid');
        return;
    }

    // Kiểm tra định dạng email
    if (input.type === 'email') {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
            errorElement.textContent = 'Sai định dạng email';
            errorElement.style.display = 'block';
            input.classList.add('invalid');
            return;
        }
    }

    // Kiểm tra định dạng số điện thoại (ví dụ: ít nhất 10 chữ số)
    if (input.type === 'tel') {
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(value)) {
            errorElement.textContent = 'Sai định dạng số điện thoại';
            errorElement.style.display = 'block';
            input.classList.add('invalid');
            return;
        }
    }

    // Kiểm tra trường password (ví dụ: tối thiểu 6 ký tự)
    if (input.type === 'password' && value.length < 6) {
        errorElement.textContent = 'Mật khẩu phải có ít nhất 6 ký tự';
        errorElement.style.display = 'block';
        input.classList.add('invalid');
        return;
    }

    // Xóa class 'invalid' nếu không có lỗi
   
    errorElement.style.display = 'none';
    input.classList.remove('invalid');
}

// Hàm kiểm tra radio button (Giới tính)
function validateRadio() {
    const errorElement = document.getElementById('sex-error');
    const isSelected = Array.from(radioInputs).some(radio => radio.checked);

    if (!isSelected && isRadioInteracted) { // Chỉ hiển thị lỗi nếu radio đã được tương tác
        errorElement.textContent = '* Vui lòng chọn giới tính';
        errorElement.style.display = 'block';
        return false;
    } else {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
        return true;
    }
}

// Hàm kiểm tra checkbox (Điều khoản)
function validateCheckbox() {
    const errorElement = document.getElementById('check-error');

    if (!checkBoxInput.checked) {
        return false;
    } else {
        return true;
    }
}

// Hàm kiểm tra toàn bộ form trước khi submit
function validateForm() {
    let isValid = true;

    formGroupInputs.forEach(function(input) {
        if (input.classList.contains('invalid')) {
            isValid = false;
        }
    });

    if (!validateRadio()) {
        isValid = false;
    }

    if (!validateCheckbox()) {
        isValid = false;
    }

    return isValid;
}

// Hàm kiểm tra tính hợp lệ của form và hiển thị/ẩn nút đăng ký
function toggleSubmitButton() {
    if (validateForm()) {
        submitBtn.style.display = 'block';  // Hiển thị nút đăng ký nếu form hợp lệ
    } else {
        submitBtn.style.display = 'none';   // Ẩn nút đăng ký nếu form không hợp lệ
    }
}


//Call Api
var userApi = 'http://localhost:3000/user';

// Hàm kiểm tra xem email hoặc phone đã tồn tại hay chưa
function checkUserExists(email, phone) {
    return fetch(userApi)
        .then(response => response.json())
        .then(users => {
            // Kiểm tra nếu có người dùng nào với email hoặc phone đã tồn tại
            return users.some(user => user.email === email || user.phone === phone);
        });
}

function createUser(data) {
    fetch(userApi, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('User created:', data);
        alert("Đăng ký thành công!");
        
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Có lỗi xảy ra trong quá trình đăng ký.");
    });
}

// Kiểm tra khi nhấn nút đăng ký
function checkSignIn() {
    if (validateForm()) {
        var name = document.getElementById('name').value;
        var email = document.getElementById('mail').value;
        var phone = document.getElementById('phone').value;
        var sex = document.querySelector('input[name="rdSex"]:checked').value;
        var pass = document.getElementById('pass').value;

        // Kiểm tra xem email hoặc tên đã tồn tại
        checkUserExists(email, phone).then(exists => {
            if (exists) {
                alert("Số điện thoại  hoặc email đã tồn tại. Vui lòng chọn số điện thoại hoặc email khác.");
            } else {
                let user = {
                    name: name,
                    email: email,
                    phone: phone,
                    sex: sex,
                    password: pass,
                };

                createUser(user);
                window.location.href = 'Home.html';
            }
        });
        
    } else {
        alert("Vui lòng điền đầy đủ thông tin.");
    }
}

