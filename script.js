function signup(event) {
  event.preventDefault();

  const nameInput = document.querySelector('#username');
  const emailInput = document.querySelector('#email');
  const passInput = document.querySelector('#newpassword');
  const confirmInput = document.querySelector('#confirm');
  const msg = document.getElementById('msg');

  let username = nameInput.value.trim();
  let email = emailInput.value.trim();
  let password = passInput.value;
  let confirm = confirmInput.value;

  let nameregex = /^[a-zA-Z][A-Za-z0-9\s]*$/;
  let passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}$/;
  let emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  console.log('hello');
  console.log(username,email,password,confirm);

  if (!nameregex.test(username)) {
    nameInput.focus();
    msg.classList.add('error');
    msg.textContent = "Name must start with a letter and not contain special symbols.";
    return;
  }

  if (!passwordregex.test(password)) {
    passInput.focus();
    msg.classList.add('error');
    msg.textContent = "Password must include uppercase, lowercase, number, symbol and be at least 6 characters.";
    return;
  }

  if (!emailregex.test(email)) {
    emailInput.focus();
    msg.classList.add('error');
    msg.textContent = "Please enter a valid email.";
    return;
  }

  if(password!==confirm){
    confirmInput.focus();
    msg.classList.add('error');
    msg.textContent='valid password'
    return;
  }
  let user={username,email,password}
  console.log(user)
  localStorage.setItem('user',JSON.stringify(user));
  msg.textcontent='succesfully  signup';
  msg.classList.add('success');
  username='';
  password=''
  confirm='';
  email='';
  msg.classList.remove('error')
  msg.classList.remove('success')
  window.location.assign('sign.html')
}
function signin(e){
    e.preventDefault();
    const nameInput = document.getElementById("name");
  const passInput = document.getElementById("password");
  const msg = document.getElementById("msg-error");

  const enteredName = nameInput.value.trim();
  const enteredPass = passInput.value;
  const savedinput=JSON.parse(localStorage.getItem('user'))
  console.log(savedinput)
msg.textContent=''
if(!savedinput){
    console.log('no user found');
    return;
}
if(savedinput.username===enteredName&&savedinput.password===enteredPass){
    window.location.assign('gallery.html')
}
else{
msg.textContent='invalid username and password'
msg.classList.add('error');
}
return;
}
