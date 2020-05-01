// Realice un algoritmo que lea un vector y a partir de él forme un segundo vector,
// de tal forma que el primer elemento pase a ser el segundo,
// el segundo pase a ser el tercero, el último pase a ser el primero, y así
// sucesivamente. Represéntelo mediante un diagrama de flujo.

// debugger;
let vector1=["uno","dos","tres","cuatro","cinco","seis"];
let vector2=[];
let intercambio="";
i=0;


while(i<vector1.length){
    intercambio = vector1[i];
    if(i == vector1.length-1){        
        
        vector2[0]= intercambio;
    }else{

        vector2[i+1]= intercambio;
    }

    i++;
}

console.log(vector2);


