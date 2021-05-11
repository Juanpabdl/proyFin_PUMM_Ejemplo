var a = '';//Primer numero
var b = '';//Segundo numero
var num = [];//Arreglo con los numeros introducidos
var ans;//Resultado de la operación

// Los numeros y operadores se guardan en el arreglo "num" con la función "intNum()"
function intNum(digit){
  num.push(digit) //Introduce el valor en el arreglo
  if(num.length != 1){
    a = '';
		document.getElementById('pantalla').innerHTML = a;
    // Limpia la pantalla.
  }
  for(i=0; i<num.length; i++){
    a = a + num[i]; //Concatena el numero
  }
  document.getElementById('pantalla').innerHTML = a;
  // Imprimir en pantalla
}

//Cuando se introduzca la tecla '=', llama a equalTo()
function equalTo(){
  document.getElementById('pantalla').innerHTML = '';
  //pasa el valor a b
  for(i=0; i<num.length ; i++)
		b += num[i]; //Concatena el num para b
  ans = eval(b);
  document.getElementById('pantalla').innerHTML = ans;
  while(num.length>0){
    num.pop(); //Vacia num
  }
  //Pasa ans al arreglo num
  num.push(ans.toString());
}

//Al presionar AC, debe de borrar el contenido de 'pantalla'
function clearScr(){
  document.getElementById('pantalla').innerHTML = ' ';
  while(num.length > 0){
  	num.pop();				// vacia el arreglo "num"
	}
	a ='';	
	b ='';
}