document.getElementById('submit-btn').addEventListener('click', function(){
    const email = document.getElementById('email-feild').value;
    const password = document.getElementById('password-feild').value;

    if(email == 'rocket@vai.com' && password == '12345'){
        window.location.href = 'banking.html' 
    }else{
        alert('wrong password')
    }
    
})