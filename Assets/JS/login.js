document.addEventListener('DOMContentLoaded', (event) => {
    const btnOK = document.getElementById('btnOK');
    const btnCancel = document.getElementById('btnCancel');
    const signIn = document.getElementById('signIn');

    const offSignIn = () => signIn.style.display = 'none';

    btnOK.addEventListener('click', () => {
        const txtUserName = document.getElementById('txtUserName');
        const txtPassword = document.getElementById('txtPassword');
        txtUserName.classList.remove('error');
        txtPassword.classList.remove('error');

        var userName = txtUserName.value.trim();
        var password = txtPassword.value.trim();

        if (userName && password) {
            alert('Thông báo: Đăng nhập thành công!');
            offSignIn();
        } else {
            if (!userName) {
                txtUserName.classList.add('error');
            }
            if (!password) {
                txtPassword.classList.add('error');
            }
            alert('Cảnh báo: Vui lòng nhập đầy đủ thông tin.');
        }
    });

    btnCancel.addEventListener('click', () => {
        // Xu ly su kien click button Cancel
        offSignIn()
    });
});



