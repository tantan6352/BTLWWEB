const container = document.getElementById('container')
const registerBtn = document.getElementById('register')
const loginBtn = document.getElementById('login')

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
})

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
})

// lưu thông tin của local khi đăng kí
document.querySelector('.sign-up form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('.sign-up input[type="text"]').value;
    const email = document.querySelector('.sign-up input[type="email"]').value;
    const password = document.querySelector('.sign-up input[type="password"]').value;
    if (name && email && password){
        localStorage.setItem('userEmail',email);
        localStorage.setItem('userPassword',password)
        alert("đăng kí thành công!! Hãy đăng nhập")
        container.classList.remove("active")
    }
    else {
        alert("Vui lòng nhập đủ thông tin")
    }
})

// nếu mà có email ở trong local thì nó sẽ tự độn nhập cho mình
document.addEventListener('DOMContentLoaded', () => {
    const saveEmail = localStorage.getItem('userEmail');
    if(saveEmail){
        document.querySelector('.sign-in input[type="email"]').value = saveEmail;
    }
})

// kiem tra dang nhap
document.querySelector('.sign-in form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('.sign-up input[type="email"]').value;
    const password = document.querySelector('.sign-up input[type="password"]').value;

    const saveEmail = localStorage.getItem('userEmail');
    const savePassword = localStorage.getItem('userPassword');
    if(email === saveEmail && password === savePassword){
        alert("Đăng nhập thành công!");
    }
    else{
        alert("Email hoặc mật khẩu không đúng!")
    }
})