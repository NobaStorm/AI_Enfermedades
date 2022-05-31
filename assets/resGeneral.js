window.onload = init;
var canProstata = [0.4, 0.2, 0.2, 0.45, 1, 0.6, 0.6, 1, 0, 0, 0.9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var canVejiga = [0.3, 0.4, 0.5, 0.6, 1, 0.8, 0.2, 0, 0.7, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var cistitis = [0, 0.4, 0.6, 0.8, 0.3, 0.7, 0, 0, 0, 0, 0, 0.8, 0.7, 0.9, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var calcRenal = [0, 0, 0.4, 0.6, 0.4, 1, 0, 0, 0.4, 0, 0, 0.5, 0.6, 0.7, 0.2, 0, 0, 0, 0, 0, 0, 0, 0];
var agrandProstata = [0.5, 0.2, 0.45, 0.4, 0.35, 0, 0, 0, 0.6, 0, 0.35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var orquitis = [0, 0, 0, 0.75, 0.6, 0.5, 1, 0, 0, 0, 0, 0, 0.75, 0, 0, 1, 1, 1, 0.55, 0.45, 0.7, 0, 0];
var infRenal = [0, 0, 0.45, 0.8, 0.35, 0.65, 0, 0, 0, 0, 0.75, 0.25, 1, 0.55, 0, 0, 0, 0, 1, 0.75, 0, 0, 0];
var prostatitis = [0.6, 0.5, 0, 0.5, 0.45, 0.2, 0.6, 0.75, 0, 0, 0, 0.45, 0.65, 0, 0, 0, 0, 0, 0, 0.45, 0.65, 1, 0];
var uretritis = [0, 0, 0.6, 0.55, 0.7, 0, 0.7, 0, 0, 0, 0, 0, 0.3, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0];
var cervisitis = [0, 0, 0.7, 0.65, 0, 1, 1, 0, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0, 0, 0.2, 0, 0, 1];

var enfermVal = [5.35, 5.5, 5.2, 4.8, 2.85, 8.3, 6.55, 6.8, 3.85, 5.05];
localStorage.setItem("enfermVal", JSON.stringify(enfermVal));

var umbral85 = [4.5475, 4.675, 4.42, 4.08, 2.4225, 7.055, 5.5675, 5.78, 3.2725, 4.2925];

var enfermedades = ["Cáncer de Prostáta", "Cáncer de Vejiga", "Cistitis", "Calculos Renales", "Agrandamiento de Prostáta", "Orquitis", "Infección Renal", "Prostatitis", "Uretritis", "Cervisitis"];

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

var sintUSR = localStorage.getItem("sintoUSR");
sintUSR = JSON.parse(sintUSR)

var gender = localStorage.getItem("gender");
gender = JSON.parse(gender)

var result = [];
var positivo = [];

var op1, op2, op3, op4, op5, op6, op7, op8, op9, op10;

function init() {
    console.log(typeof sintUSR)
    console.log(typeof gender)
    interseccionVal();

    document.getElementById('boton').addEventListener("click", move);


}

function resOk() {
    var targetDiv = document.getElementById('result');
    targetDiv.insertAdjacentHTML('afterend', `
        <div class="col-10 col-sm-8 col-lg-6">
            <img src="./imag/smile.jpg" width="300" height="200" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
        </div>
        <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">Sin Coincidencias</h1>
            <p class="lead">Los sintomas que presentas no cuentan con un grado de correspondencia lo suficientemente alto con ninguna enfermedad de las Vias Urinarias</p>
        </div>`);

}

function resBad(enfermedad) {
    var targetDiv = document.getElementById('result');
    targetDiv.insertAdjacentHTML('afterend', `
        <div class="col-10 col-sm-8 col-lg-6">
            <img src="./imag/sad.png" width="200" height="200" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
        </div>
        <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">${enfermedades[enfermedad]}</h1>
            <p class="lead">${recomendaciones[enfermedad]}</p>
        </div>`);

}


function resNeutral() {
    var targetDiv = document.getElementById('result');
    targetDiv.insertAdjacentHTML('afterend', `
        <div class="col-10 col-sm-8 col-lg-6">
            <img src="./imag/confuso.png" width="300" height="300" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
        </div>
        <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">Resultado Confuso</h1>
            <p class="lead">Los sintomás que elegiste coinciden con más de 3 enfermedades Urinarias, te recomendamos acudir con tú médico para una revisión profesional</p>
        </div>`);

}

function interseccionVal() {
    var op1 = 0; var op2 = 0; var op3 = 0; var op4 = 0; var op5 = 0;
    var op6 = 0; var op7 = 0; var op8 = 0; var op9 = 0; var op10 = 0;
    var c = 0;
    sintUSR.forEach(e => {

        //Cancer de Prostata
        if (sintUSR[c] <= canProstata[c]) {
            op1 = op1 + parseFloat(sintUSR[c]);
        }
        else {
            op1 = op1 + parseFloat(canProstata[c]);
        }

        //Cancer de Vejiga
        if (sintUSR[c] <= canVejiga[c]) {
            op2 += parseFloat(sintUSR[c]);
        } else {
            op2 = op2 + parseFloat(canVejiga[c]);
        }

        //Cistitis
        if (sintUSR[c] <= cistitis[c]) {
            op3 += parseFloat(sintUSR[c]);
        } else {
            op3 = op3 + parseFloat(cistitis[c]);
        }

        //Calculso Renales
        if (sintUSR[c] <= calcRenal[c]) {
            op4 += parseFloat(sintUSR[c]);
        } else {
            op4 = op4 + parseFloat(calcRenal[c]);
        }

        //Agrandamiento de prostata
        if (sintUSR[c] <= agrandProstata[c]) {
            op5 += parseFloat(sintUSR[c]);
        } else {
            op5 = op5 + parseFloat(agrandProstata[c]);
        }

        //Orquitis
        if (sintUSR[c] <= orquitis[c]) {
            op6 += parseFloat(sintUSR[c]);
        } else {
            op6 = op6 + parseFloat(orquitis[c]);
        }

        //Infección Renal
        if (sintUSR[c] <= infRenal[c]) {
            op7 += parseFloat(sintUSR[c]);
        } else {
            op7 = op7 + parseFloat(infRenal[c]);
        }

        //Prostatitis
        if (sintUSR[c] <= prostatitis[c]) {
            op8 += parseFloat(sintUSR[c]);
        } else {
            op8 = op8 + parseFloat(prostatitis[c]);
        }

        //Uretritis
        if (sintUSR[c] <= uretritis[c]) {
            op9 += parseFloat(sintUSR[c]);
        } else {
            op9 = op9 + parseFloat(uretritis[c]);
        }

        //Cervisitis
        if (sintUSR[c] <= cervisitis[c]) {
            op10 += parseFloat(sintUSR[c]);
        } else {
            op10 = op10 + parseFloat(cervisitis[c]);
        }

        c += 1;

    });

    result = [op1, op2, op3, op4, op5, op6, op7, op8, op9, op10]
    localStorage.setItem("coincidencias", JSON.stringify(result));
    var co = 0;
    umbral85.forEach(e => {

        console.log(result[co], "---", umbral85[co])
        if (result[co] > umbral85[co]) {
            positivo[co] = co;
        }
        co += 1;
    });

    //Filtrado del arreglo para sacar espacios vacios o nulos
    positivo = positivo.filter(x => x >= 0);
    console.log("que pedo ", positivo)

    positivo.forEach(e => {
        if (gender === 0) {
            positivo = positivo.filter(x => x != 9);
        }
        else {
            positivo = positivo.filter(x => x != 0);
            positivo = positivo.filter(x => x != 4);
            positivo = positivo.filter(x => x != 5);
            positivo = positivo.filter(x => x != 7);
            positivo = positivo.filter(x => x != 8);
        }
    });

    if (positivo.length >= 3) {
        resNeutral();
        console.log(typeof positivo)

    }
    else if (positivo.length > 0 && positivo.length < 3) {
        var c = 0;
        positivo.forEach(e => {
            resBad(e);

        });
    }
    else {
        resOk();

    }

}

function move() {
    window.location.href = "resDetallado.html";
}
