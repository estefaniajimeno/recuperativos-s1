// Problema fácil 11
//hice una función llamada average y el parametro es un array llamado numbers
function average(numbers) {
// aca declaré una variable para que se sumen las notas y se guardan el resultado de todas las sumas
	var sumGrades=0;
// aca declaré una variable para que se cuenten la cantidad de numeros
	var storageGrades=numbers.length;
//hice un for para que recorra todas las notas ingresadas y luego con la variable sumGrades se sumen
	for (var i = 0; i <storageGrades; i++) {
	    sumGrades+=numbers[i];
	}
//hice una variable para que me divida todas  las notas sumadas 	
	var medium=sumGrades/storageGrades; 
	
//hice un if para indicar si reprueba o no y muestre el promedio
	if(medium<4) {
		return alert("reprobo "+ medium)
	} else{
		return alert("aprobado "+ medium)
	}

}
// hice un consolelog para que me promediara estos numeros
console.log(average([5,6.5,7,4,2.5,6,5.4,5.7,4,5]))


//Problema fácil 14 
//hice una función llamada pair y el parametro es un array llamado arr
function pair(arr){	
//declaré una variable para un nuevo array 	
	var newArr=[];
//hice un for para que recorra todos los numeros ingresados  	
 	for (var i=0; i<arr.length;i++){
//hice un if para que compruebe si son par o no  		
 		if (arr[i]%2==0) {
//a la variable newArr le estoy agregando el elemento de la posición i
			newArr.push(arr[i]);
	
 		}	
 	
 	}
	return newArr;

 }
console.log(pair([1,2,3,4,5,6,7,8,9,10]))

//problema fácil 15 
//hice una función llamada plusmultiply  y el parametro es un array
function plusMultiply(arr){
//hice un nuevo array para guardar los numeros multiplicados		
	var newArr=[];
//hice un for para que recorriera el array 	
	for (var i=0; i<arr.length; i++){
//a esta variable le estoy agregando el elemento de la posición i, para que los numeros de esa posicion 
//sean multiplicados por 12 
		newArr.push(arr[i]*12)

	}
	return newArr;
}
console.log(plusMultiply([1,2,3,4]));

//problema medio 10 
// hice una función llamada position y el parametro es name
function position (name){
	// cree un array con los nombres 
	var list=["Allison","Belén","Nadia","Marcia","Ale","Fabian"]
	//despues hice un for para recorrer las posiciones
	for(var i=0;i<list.length; i++){
		//hice un if para indicar que los nombres de la lista sean  igual a la de la posiciones 
		if (name==list[i]) {
		//hice un return para que me indique uno por uno los nombres y que comiencen del 1 , por eso sume +1	
			return(i+1);
		}
	}
	return 0;
}
console.log(position("Marcia"));

//problema medio 8 
//hice una funcion llamada recurIndex donde coloqué un parametro llamado number
function recurIndex(number){
//hice un array con numeros 	
 	var arr =[1,5,8,19]
//luego hice un for para que los recorriera
 	for(var i=0; i<arr.length; i++){
//luego hice un if para igualar la posicion de los numeros de  mi array con los numeros 
 		if (number==arr[i]) {
// y ahora para que me indique la posicion del numero	
 			return(i)
 		}
 	}

}
console.log(recurIndex(8));

// problema dificil 5
//hice una función llamada found donde el parametro es arr
function found(arr){
//cree una variable llamada min que sirve para comparar con el numero más pequeño 	
 	var min=9999999;
//cree esta variable llamada first es para guardar el primer elemento del arreglo(antes de ser modificado)
 	var first = arr[0];
// cree for para recorrer el arreglo 
 	for(var i=0; i<arr.length; i++){
// el if me sirve para comparar que el elemento de esa posicion sea menor que la variable min
 		if (arr[i]<min) {
// 	la variable min es reemplazada por el numero más pequeño.		
			min=arr[i];
 	}
 }
 //fuera de esta funcion cree la variable position para guardar el index del numero más pequeño
 var position= arr.indexOf(min);
 //acá reemplazo el primer elemento de la posicion del más pequeño 
 arr[position]=first
 // y acá es para que el pequeño se vaya a la posicion del primero
 arr[0]=min
 return arr;
 			
}
console.log(found([4,3,1,2]));


