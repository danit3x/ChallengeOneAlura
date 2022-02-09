function copy() {
    var copyText = document.querySelector("#msg");
    copyText.select();
    document.execCommand("copy");
  }
  
document.querySelector("#btn-copy").addEventListener("click", copy);
document.querySelector("#btn-encriptar").addEventListener("click", Encriptar);
document.querySelector("#btn-desencriptar").addEventListener("click", Desencriptar);
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

const validar = {
  numero : /\d+/,
  mayus : /\s{1,2}|[a-z]/,

};
    function isNumeric(e) {
    
      let isNumber = validar.numero.test(e);
      let isMayus = validar.mayus.test(e);
      
      if(isNumber || !isMayus){
        alert("No se aceptan Numeros ni mayusculas")
        return true;
      } else {
         return false; 
        }
     }
function Encriptar(){
    event.preventDefault()
    let data = document.getElementById("input-texto").value;
      if (!isNumeric(data)) {
      let msg = data
                  .replace(/e/g, "enter")
                  .replace(/i/g, "imes")
                  .replace(/a/g, "ai")
                  .replace(/o/g, "ober")
                  .replace(/u/g, "ufat");
      document.getElementById("msg").value = msg;
      } else {
         window.location.reload(); 
        }

}

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
function Desencriptar(){
    event.preventDefault()
    let data = document.getElementById("input-texto").value;
    let msg = data.replace(/ai/g, "a")
                .replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
    document.getElementById("msg").value = msg;
    
}