
var enfermedades = ["Cáncer de Prostáta", "Cáncer de Vejiga", "Cistitis", "Calculos Renales", "Agrandamiento de Prostáta", "Orquitis", "Infección Renal", "Prostatitis", "Uretritis", "Cervisitis"];
var porcentajes = localStorage.getItem("coincidencias");
var enferm = localStorage.getItem("enfermVal");
var recomendaciones = ["Si se diagnostica temprano, muchos cánceres de próstata crecen lentamente y no causan ningún problema de salud a los hombres que los tienen. Le recomendamos acudir con su Médico para realizarse una prueba y tener un diagnóstico certero.",
    "El cáncer de vejiga es una enfermedad fuerte, le recomendamos acudir lo más pronto posible con su médico para realizar los exámenes pertinentes para un diagnóstico confiable y de ser necesario comience con un tratamiento.",
    "El tratamiento de la cistitis depende de si es complicada o no complicada, y se deben tener en cuenta los factores de riesgo. El tratamiento con antibióticos contribuye a la eliminación de los microorganismos, al alivio de la sintomatología y previene la aparición de complicaciones, recurrencias o la cronificación del proceso. Favor de acudir a su médico para recibir un diagnóstico y tratamiento completos.",
    "Expulsar los cálculos renales puede ser bastante doloroso, aunque, normalmente, los cálculos no producen daños permanentes si se detectan oportunamente. Según sea el caso, es posible que solo tengas que tomar analgésicos y mucha agua para expulsar un cálculo renal. Si los síntomas son muy fuertes debe acudir a su médico para una valoración completa.",
    "Si los síntomas son leves se recomiendan ciertas medidas sencillas que pueden mejorar su calidad de vida, como son: No beber gran cantidad de líquido de una sola vez, Realizar ejercicio de forma habitual y evitar el sedentarismo, pues puede empeorar los síntomas, No consumir alcohol ni cafeína, especialmente por la noche. Si los síntomas son fuertes debe acudir a su médico para una valoración y atención profesional.",
    "Para la Orquitis o Inflamación testicular, se recomienda acudir lo antes posible con su médico, para poder diagnosticar la causa del problema y brindar un tratamiento adecuado.",
    "Si está presentando una infección renal, lo más recomendable es tomar mucha agua, además de poder acudir con su médico para que realice los análisis necesarios y pueda brindarle el antibiótico correcto en su tratamiento.",
    "Esta es una infección que con tratamiento de antibiótico puede desaparecer, de igual forma es necesario que acuda a su médico para una correcta valoración y tratamiento.",
    "Esta es una infección de las más comunes, se recomienda tomar agua y acudir a su médico por el tratamiento adecuado de antibióticos.",
    "Esta es una infección de las más comunes, se recomienda tomar agua y acudir a su médico por el tratamiento adecuado de antibióticos."];
porcentajes = JSON.parse(porcentajes);
enferm = JSON.parse(enferm);

var validar = [];
var porcentaje = [];
window.onload = init;




function init() {


    var gender = localStorage.getItem("gender")
    gender = JSON.parse(gender);
    selectGender(gender);
    document.getElementById('selectAll').addEventListener('click', selectAll);
    document.getElementById('dismissAll').addEventListener('click', dismissAll);
    document.getElementById('boton').addEventListener('click', calcPorcentaje);
    document.getElementById('limpiar').addEventListener('click', limpiarResultados);



}

function selectAll(validar) {
    validar = document.querySelectorAll('.valores');
    validar.forEach(v => {
        v.checked = true;
    });

}

function dismissAll() {
    validar = document.querySelectorAll('.valores');
    validar.forEach(e => {
        validar.forEach(v => {
            v.checked = false;
        });

    });

    var targetDiv = document.getElementById('result');
    targetDiv.innerHTML = '';

}

function selectGender(gender) {

    console.log("Estamos a la función");

    if (gender === 1) {
        const female = document.getElementById("checkboxEnf");
        var item1 = document.getElementById("op1");
        var item2 = document.getElementById("op5");
        var item3 = document.getElementById("op6");
        var item4 = document.getElementById("op8");
        var item5 = document.getElementById("op9");
        female.removeChild(item1);
        female.removeChild(item2);
        female.removeChild(item3);
        female.removeChild(item4);
        female.removeChild(item5);
    }

    if (gender === 0) {
        const male = document.getElementById("checkboxEnf");
        var item = document.getElementById("op10")
        male.removeChild(item);
    }

}

function calcPorcentaje() {

    limpiarResultados();
    validar = document.querySelectorAll('.valores');
    validar.forEach(e => {
        if (e.checked == true) {
            var a = parseInt((porcentajes[e.value] * 100) / enferm[e.value]);
            mostrarResultados(enfermedades[e.value], a);
            porcentaje[e.value] = a;
        }
    });

    porcentaje = porcentaje.filter(x => x > 0);

    if (porcentaje.length === 0) {
        alertNodata();
        console.log(porcentaje)
    }
}

function limpiarResultados() {

    const respuesta = document.querySelector('.res')
    while (respuesta.firstChild) {
        respuesta.removeChild(respuesta.firstChild)
    }
}


function alertNodata() {
    var targetDiv = document.getElementById('alerta');
    targetDiv.insertAdjacentHTML('afterend', `
    <div class="alert alert-warning alert-dismissible fade show shadow" >
    
    <!--Espacio para la alerta si no se selecciona ninguna opción-->
    <i class="bi bi-exclamation-octagon"></i> Por favor selecciona al menos una Opción
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </div>`);
}

function mostrarResultados(enferm, data) {
    var targetDiv = document.getElementById('result');
    targetDiv.insertAdjacentHTML('beforeend', `
        <h3>Coincidencia con ${enferm}</h3>
        <div class="progress">
         <div class="progress-bar" role="progressbar" style="width: ${data}%;" aria-valuenow="${data}" aria-valuemin="0" aria-valuemax="100">${data}%</div>
        </div>`);


}


function modalInfo() {

    var targetDiv = document.getElementById('result');
    targetDiv.insertAdjacentHTML('beforeend', `
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Para Saber más!!
        </button>

        <!-- Modal -->
        <div class="modal fade " id="exampleModal"  tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog ">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">${enferm}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            ${recomendacion}
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>`);

}

