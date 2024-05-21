document.addEventListener('DOMContentLoaded',(event)=>{
    const iconLogin = document.getElementById('body_right_img');
    iconLogin.addEventListener('click',()=>{
        fetch('logIn.html')
        .then(response => response.text)
        .then(data=>{
            document.getElementById('logInID').innerHTML = data;
        })
        .catch(error=>{
            console.error('Error loading login.html:', error);
        });
    });
});