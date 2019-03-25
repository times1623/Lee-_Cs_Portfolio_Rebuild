var contBut = document.querySelector("#contBut");
var alertBox = document.querySelector("#alertSec");
var form = document.querySelector('.form');
var again = document.querySelector('#again');

function popUp() {
    console.log(document.querySelector("#contact-name").value == "" || 
    document.querySelector("#contact-email").value == "" || 
    document.querySelector("#contact-email").value == "" );


    if (document.querySelector("#contact-name").value == "" || 
    document.querySelector("#contact-email").value == "" || 
    document.querySelector("#contact-message").value == ""){
        alert("you missing some required field");
    }else{
        form.classList.add('alertSec');
        alertBox.classList.add('showAlert');
        alertBox.classList.remove('alertSec');
        contBut.classList.add('alertSec');
    }

};

function reLoad() {
    form.classList.remove('alertSec');
    alertBox.classList.remove('showAlert');
    alertBox.classList.add('alertSec');
    contBut.classList.remove('alertSec');
}

contBut.addEventListener('click',popUp,false);
again.addEventListener('click',reLoad,false);
