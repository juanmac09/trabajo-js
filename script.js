var btnob = document.getElementById('ob'),
    btnma = document.getElementById('ma'),
    btnme = document.getElementById('me'),
    btnpa = document.getElementById('pa'),
    btncu = document.getElementById('cu'),
    btnar = document.getElementById('ar'),
    btnce = document.getElementById('ce'),
    btned = document.getElementById('ed'),
    btnca = document.getElementById('ca'),
    btnno = document.getElementById('no'),
    btnfr = document.getElementById('fr');


var op = function operacioneBasicas() {
    var 
    n1 =  parseInt(prompt('Digite primer número')),
    n2 = parseInt(prompt('Digite el Segundo número')),
    re = n1 + n2;

    alert('La suma es igual a: ' + re);

    re = n1 - n2;

    alert('La resta es igual a:' + re);

    re = n1 * n2;

    alert('La multiplicación es:' + re);

    re = n1/n2;

    alert('La división es:' + re);  
}

var ma = function mayor() {
    var 
    n1 =  parseInt(prompt('Digite primer número')),
    n2 = parseInt(prompt('Digite el Segundo número'));

    if (n1 > n2) {
        alert('El numero ' + n1 + ' es mayor');
    }
    else{
        alert('El numero ' + n2 + ' es mayor');
    }
}

 var me = function menor() {
   var 
    n1 =  parseInt(prompt('Digite primer número')),
    n2 = parseInt(prompt('Digite el Segundo número')),
    n3 = parseInt(prompt('Digite el tercer número'));

    if(n1<n2&&n2<n3){
        alert('el menor es ' + n1);
    }
    else if(n2<n1&&n1<n3){
        alert('el menor es ' + n2);
    }
    else{
        alert('el menor es ' + n3);
    }
}

var pa = function parOImpar() {
   var n1 =  parseInt(prompt('Número par o impar')),
   re = n1%2;

   if (re == 0) {
     alert('El número ' + n1+ 'es par');
   }
   else{
    alert('El número ' + n1+ ' es impar');
   }
    
}

var cu = function cuadrado() {
    var 
    n1 =  parseInt(prompt('Digite número'));

    alert('El numero al cuadrado es ' + (n1*n1));

}

var ar = function area() {
    var 
    n1 =  parseInt(prompt('Altura')),
    n2 = parseInt(prompt('Base'));

    alert ('el area es ' + ((n1*n2)/2));
}

var ce = function centimetros(){
    var 
    n1 =  parseInt(prompt('El valor en centimetros'));

    alert('El valor en metros es ' + ( n1/100));
}

var ed = function edad() {
    
    var 
    n1 =  parseInt(prompt('Edad'));

    alert('Su año de nacimiento es ' + (2022-n1));
}

var ca = function capital () {
    
    var 
    ca  =  parseInt(prompt('capital invertido')),
    tiem   =  parseInt(prompt('Años')),
    int = ((ca*2)/100)*12;
    ga = (int * tiem) + ca;

    alert('Se tiene un interes anual de ' + int);
    alert ('Su ganancia total fue de ' + ga);
}

var no = function notas() {
    var 

    n1 =  parseInt(prompt('Digite nota 1')),
    n2 = parseInt(prompt('Digite nota 2')),
    n3 = parseInt(prompt('Digite nota 3')),
    n4 = parseInt(prompt('Digite nota 4')),
    n5 = parseInt(prompt('Digite nota 5')),

    pro = (n1+n2+n3+n4+n5)/5;

    if(pro <= 2.9){
        alert ('reprobo');
    }
    else {
        alert ('aprobo');
    }
}



var fr = function fruteria() {
    
    var   
     n1 =  parseInt(prompt('Digite los kilos')),
    des,
    total;

     if (n1 <=2) {
        alert('Debe pagar ' + (n1*4500));
     }
     else if (n1 <= 5 ){
         des = (((n1*4500))*10)/100;
        total = (n1*4500)-des;
        alert('Debe pagar ' + total);
    }
    else if (n1 <= 10){
         des = (((n1*4500))*15)/100;
         total = (n1*4500)-des;

        alert('Debe pagar ' + total);
    }

    else {
         des = (((n1*4500))*20)/100;
         total = (n1*4500)-des;

        alert('Debe pagar ' + total);
    }

}

btnob.addEventListener('click',op);
btnma.addEventListener('click',ma);
btnme.addEventListener('click',me);
btnpa.addEventListener('click',pa);
btncu.addEventListener('click',cu);
btnar.addEventListener('click',ar);
btnce.addEventListener('click',ce);
btned.addEventListener('click',ed);
btnca.addEventListener('click',ca);
btnno.addEventListener('click',no);
btnfr.addEventListener('click',fr);