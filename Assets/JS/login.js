document.addEventListener('DOMContentLoaded',(event)=>{
    const btnOK = document.getElementById('btnOK')
    const btnCancel = document.getElementById('btnCancel')
    const signIn = document.getElementById('signIn')

    const txtUserName = document.getElementById('txtUserName')
    const txtPassword = document.getElementById('txtPassword')
    
    const offSignIn = () => signIn.style.display = 'none'

    // btnOK.addEventListener('click',()=>{
    //     alert('Success');
    //     offSignIn()
    // })
    document.getElementById('btnOK').addEventListener('click', function() {
        var userNameInput = document.getElementById('txtUserName');
        var passwordInput = document.getElementById('txtPassword');
    
        var userName = userNameInput.value.trim();
        var password = passwordInput.value.trim();
    
        // Reset the input borders
        userNameInput.classList.remove('error');
        passwordInput.classList.remove('error');
    
        if (userName && password) {
            
            alert('Thông báo: Thành công!');
        } else {
            
            if (!userName) {
                userNameInput.classList.add('error');
            }
            if (!password) {
                passwordInput.classList.add('error');
            }
            alert('Vui lòng nhập đầy đủ thông tin.');
        }
    });
    
    btnCancel.addEventListener('click',()=>{
        // Xu ly su kien click button Cancel
        offSignIn()
    })
    
})



