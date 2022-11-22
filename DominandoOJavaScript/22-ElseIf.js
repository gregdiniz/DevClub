/* Controle de Fluxo - Condicionais IF ELSE

if = se
else = senão
else if = mais se...
*/

const tempCorporal = 36

if(tempCorporal >= 36 && tempCorporal <=39){
    console.log('A pessoa está saudável')
} else if( tempCorporal > 39 ){
    console.log('A pessoa está com febre')
} else {
    console.log('A pessoa está com hipotermina')
}
