function verifyPassword() {  
    let pw = document.getElementById("pass").value;  
    let pw2 = document.getElementById("confirmPass").value; 

    if(pw!==pw2) {
        document.getElementById("message").innerHTML = "**Passwords must match!";  
       return false; 
    }

    if(pw == "") {  
       document.getElementById("message").innerHTML = "**Fill the password please!";  
       return false;  
    }  
     

    if(pw.length < 8) {  
       document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";  
       return false;  
    }  
    

    if(pw.length > 15) {  
       document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";  
       return false;  
    } else {  
       alert("Password is correct");  
    }  

    
  }  