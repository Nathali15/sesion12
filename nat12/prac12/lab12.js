//Parte 1
function sumarNumeros(){
    const entrada = document.getElementById('promedio').value;
    const numeros = entrada.split(',').map(num=> parseFloat(num.trim()));
//let numeros=[10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    if(!isNaN(numeros[i])) {
       suma = suma +numeros[i];
    }
}
const promedio = suma / numeros.length;
document.getElementById('salidaPromedio').innerText=`Suma total: ${suma.toFixed(1)}, Promedio: ${promedio.toFixed(1)}`;
}

//Parte 2
function ingresarNumeros(){
    let numerosIngresados = [];
    let suma = 0;
    let numero = 1;

    while (numero >=0) {
        numero = parseFloat(prompt("ingresa un numero (negativo para terminar):"));
        if (numero >= 0) {
            if (!isNaN(numero)){
                    numerosIngresados.push(numero);
                    suma= suma + numero;
             }
        } 
    }
    document.getElementById('salidaNumeros').innerHTML=`<strong>Números ingresados:</strong> ${numerosIngresados.join(',')}<br><strong>Suma total:</strong>${suma}`;
}

//Parte 3 
function validarContrasena(){
    const contrasenaCorrecta = "123456";
    let intentos = 0;
    let contrasena;
    let contrasenasIngresadas = [];

    do {
        contrasena = prompt("ingresa tu contraseña:");
        contrasenasIngresadas.push(contrasena);
        intentos=intentos+1;
        if (contrasena !== contrasenaCorrecta) {
            alert("contraseña incorrecta");
    }
} while (contrasena !== contrasenaCorrecta);
document.getElementById('salidaContrasena').innerHTML= `<strong>¡Contraseña correcta!</strong><br>
<strong>Intentos fallidos:</strong> ${intentos-1}<br>
<strong>Contrasenas ingresadas:</strong> ${contrasenasIngresadas.join(',')}`;
}


