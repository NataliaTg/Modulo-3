
// Un producto sin IVA tiene un precio.
// El precio total se saca multiplicando precio * iva (el iva puede ser: 0.1, 0.04, 0.21).
// Dependiendo del campo "type" calculamos el precio total:
// Si es "alimentacion": precio * 0.1
// Si es "libro": precio * 0.04
// Si es de cualquier otro tipo: precio * 0.21


//Calcular precio total
const product = { count: 3, price: 12.55, type: "ropa" };

let total;
function getTotal () {
    if(product.count < 0) {
        total = 0;
        console.log(total);
    } else {
        total = product.count * product.price;
        console.log('Precio total: ' + total);
    }
}
getTotal();



//Calcular el IVA
let tipoIva;

switch(product.type){
	case "alimentacion":
		tipoIva = 0.1;
		break;
	case "libro":
		tipoIva = 0.04;
		break;					
	default:
		tipoIva = 0.21;				
}

console.log('Tipo de IVA: ' + tipoIva);
let IVA = total * tipoIva;
console.log('IVA: ' + IVA);
console.log(total + IVA);



//Calcular sueldo neto en nómina
const empleado = {
    bruto: 14500,
    hijos: 2,
    pagas: 14
}

let salario = empleado.bruto;
let salarioNetoAnual;
let salarioNetoConHijos;
let salarioNetoMensual;

let hijos = true;

if(salario <= 12000) {
	salarioNetoAnual = salario;
    salarioNetoConHijos = salario;
} else if(salario <= 24000) {
	salarioNetoAnual = salario - (salario * 0.08);
	salarioNetoConHijos =  salario - (salario * 0.08 - 0.02);

} else if (salario <= 34000) {
	salarioNetoAnual = salario - (salario * 0.16);
	salarioNetoConHijos =  salario - (salario * 0.14);
} else {
	salarioNetoAnual = salario - (salario * 0.30);
	salarioNetoConHijos =  salario - (salario * 0.28);
};

console.log('Salario neto anual: ' + salarioNetoAnual + ' euros');
console.log('Salario neto anual con hijos: ' + salarioNetoConHijos + ' euros');
console.log('Salario neto mensual en 14 pagas: ' + salarioNetoAnual / 14);
console.log('Salario neto mensual con hijos en 14 pagas: ' + salarioNetoConHijos / 14);
console.log('Salario neto mensual en 12 pagas: ' + salarioNetoAnual / 12);
console.log('Salario neto mensual con hijos en 12 pagas: ' + salarioNetoConHijos / 12);
