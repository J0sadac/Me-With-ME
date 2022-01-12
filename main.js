'use strcit'

var formulario = document.querySelector("#formNotas");

formulario.addEventListener('submit', function(){
    var texto = document.querySelector("#addNotas").value;
    if(texto.length >= 1){
        localStorage.setItem(texto, texto);

    }
});

var div = document.querySelector("#notas")

for(var i in localStorage){
    if(typeof localStorage[i] == 'string'){
        var p = document.createElement("div");
        p.classList="nota-cont"
        p.append(localStorage[i]);
        div.append(p)
    }
}


//eliminar notar (intento de jsjsjsjsjsjsjs)

/*
formulario.addEventListener('submit', function(){
    var texto = document.querySelector("#addNotas").value;
    if(texto.length >= 1){
        localStorage.removeItem(texto, texto);

    }
});
*/
