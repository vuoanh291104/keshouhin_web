document.addEventListener('DOMContentLoaded',(event)=>{
    const btnOK = document.getElementById('btnOK')
    const btnCancel = document.getElementById('btnCancel')
    const signIn = document.getElementById('signIn')

    const txtUserName = document.getElementById('txtUserName')
    const txtPassword = document.getElementById('txtPassword')
    
    const offSignIn = () => signIn.style.display = 'none'

    btnOK.addEventListener('click',()=>{
        alert('Success');
        offSignIn()
    })
    btnCancel.addEventListener('click',()=>{
        // Xu ly su kien click button Cancel
        offSignIn()
    })
    
})



