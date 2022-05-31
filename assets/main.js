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