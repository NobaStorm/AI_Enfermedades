window.onload = init;
var sint1 = [0.4, 0.2, 0.2, 0.45, 1, 0.6, 0.6, 1, 0, 0, 0.9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var sint2 = [];
var gender;
var prueba;
var result = []

function init() {
    localStorage.clear();

    document.querySelector('.btn-primary').addEventListener('click', respuestas);

}


function respuestas() {

    sinto1 = document.querySelectorAll('.valores');
    gender = document.querySelectorAll('.genero');

    console.log(gender);

    sinto1.forEach(element => {
        if (element.checked == true) {
            sint2.push(element.value);


        }

    });

    gender.forEach(element => {
        if (element.checked == true) {
            prueba = element.value;
            console.log(prueba);
            console.log(element.value);


        }

    });

    console.log(prueba);



    localStorage.setItem("sintoUSR", JSON.stringify(sint2));
    localStorage.setItem("gender", prueba);

    var t = localStorage.getItem("sintoUSR");
    var p = localStorage.getItem("gender");

    t = JSON.parse(t)

    console.log(typeof t);
    console.log(p);

    window.location.href = "resGeneral.html";

}

function genderM() {

    if (document.getElementById('generoM').checked) {
        document.getElementById('p23_op1').disabled = true;
        document.getElementById('p23_op2').disabled = true;
        document.getElementById('p23_op3').disabled = true;
        document.getElementById('p23_op4').disabled = true;
        document.getElementById('p8_op1').disabled = false;
        document.getElementById('p8_op2').disabled = false;
        document.getElementById('p16_op1').disabled = false;
        document.getElementById('p16_op2').disabled = false;
        document.getElementById('p16_op3').disabled = false;
        document.getElementById('p16_op4').disabled = false;
        document.getElementById('p17_op1').disabled = false;
        document.getElementById('p17_op2').disabled = false;
        document.getElementById('p17_op3').disabled = false;
        document.getElementById('p18_op1').disabled = false;
        document.getElementById('p18_op2').disabled = false;
        document.getElementById('p18_op3').disabled = false;
        document.getElementById('p18_op4').disabled = false;
    }


}

function genderF() {
    if (document.getElementById('generoF').checked) {
        document.getElementById('p8_op1').disabled = true;
        document.getElementById('p8_op2').disabled = true;
        document.getElementById('p16_op1').disabled = true;
        document.getElementById('p16_op2').disabled = true;
        document.getElementById('p16_op3').disabled = true;
        document.getElementById('p16_op4').disabled = true;
        document.getElementById('p17_op1').disabled = true;
        document.getElementById('p17_op2').disabled = true;
        document.getElementById('p17_op3').disabled = true;
        document.getElementById('p18_op1').disabled = true;
        document.getElementById('p18_op2').disabled = true;
        document.getElementById('p18_op3').disabled = true;
        document.getElementById('p18_op4').disabled = true;
        document.getElementById('p23_op1').disabled = false;
        document.getElementById('p23_op2').disabled = false;
        document.getElementById('p23_op3').disabled = false;
        document.getElementById('p23_op4').disabled = false;

    }

}