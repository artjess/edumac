console.log("hola mundo");

var nombre = "Jessica";
let apellido = "Vazquez";
const edad = 27;

console.log(nombre);
console.log (apellido);
console.log (edad);

//se puede redefinir variables
// edad = 28; // pero no a una que se definió como constante//
apellido = "villegas";
console.log(apellido);

//objetos

var objeto = {
	nombre: "jessica",
	apellido:"vazquez",
	edad: 28,
	estudiante: true
};

console.log(objeto);

//arreglos
var numeros = [2,4,6,78,456];
var nombres = ["lisa,montse,diego"];

//funciones
var suma = function(x,y){
	console.log(x+y);
};

suma(5,10)

console.log(x);
var x = 10;

console.log ("hola"+" "+nombre);

console.log (`hola soy ${nombre} ${apellido}, tengo ${edad} años`);

console.log("jessica"*2);

console.log(typeof(nombre));
console.log(typeof(numeros));
console.log(typeof(suma));
console.log(typeof(true));
console.log(typeof(20));
console.log(typeof(NaN));

var seis =6;

var casteoAString = function(x){
	console.log(String(x));
}

console.log(String(undefined));

seis++; //incrementas una unidad
console.log(seis);
seis++;
console.log(seis);
seis--
seis--
console.log(seis);

var a = 5;
var b = 10;
var c = 15;

console.log((3+b)*c/a*2);
console.log(((a+b*c)/5)*2);
console.log(b/a+2*c);
console.log((a + b + c / c) * a);
console.log(((3*a)/c)+a+b+c);
console.log(a-(b+c)*a/1);
