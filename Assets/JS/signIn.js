function checkSignIn() {
    let ketQuaCheck = true;
    const myInps = document.querySelectorAll('.myInp');
    for (let inp of myInps) {
        switch (inp.type) {
            case "text":
                ketQuaCheck &&= inp.value !== '';
                break;
            case "email":
                const chinhQuyEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                ketQuaCheck &&= chinhQuyEmail.test(inp.value);
                break;
            case "tel":
                const chinhQuySDT = /^[0-9]{10}$/;
                ketQuaCheck &&= chinhQuySDT.test(inp.value);
                break;
            case "password":
                ketQuaCheck &&= inp.value !== '';
                break;
            default:
                ketQuaCheck &&= inp.value !== '';
                break;
        }
        if (!ketQuaCheck) {
            alert('Vui lòng kiểm tra lại ' + (inp.type == 'text' ? 'User Name' : inp.type));
            return;
        }
    }
    const borRadio = document.querySelectorAll('.borRadio');
    ketQuaCheck &&= (borRadio[0].checked || borRadio[1].checked);
    if (!ketQuaCheck) {
        alert('Vui lòng kiểm tra lại giới tính');
        return;
    }
    const checkDieuKhoan = document.getElementById('check');
    ketQuaCheck &&= checkDieuKhoan.checked;
    if (!ketQuaCheck) {
        alert('Vui lòng kiểm tra lại điều khoản và chính sách bảo mật.');
        return;
    }
    if (ketQuaCheck) {
        alert("Thông báo: Đăng ký thành công.");
        window.location.href = 'Home.html';
    }
}