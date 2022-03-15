// 1.1	Quan es cliqui sobre el div #addDiv crea un  DIV  de la clase .addDiv dins #domNodes amb el text indicat en #dades. 
const domNodes = $('#domNodes');
let contador = 0;
$('#addDiv').on('click', function () {
    // creamos el div cuando clice en #addDiv 
    let nouDiv = $("<div></div>");
    nouDiv.attr("class", "addDiv");
    domNodes.append(nouDiv);
    let valorInput = $("#dades").val();
    nouDiv.html(valorInput);
});

//1.2.	Quan es cliqui sobre el div #addSpan crea per cada valor dins un array de nom “spans”  un  SPAN de la clase .addSpan dins #domNodes  amb el text corresponent de l’array.
$('#addSpan').on('click',creaSpan);
function creaSpan () {
    let textSpan = ["ejemplo","jquery","tom"];
    for(let k = 0; k < textSpan.length ; k++){
        let nouSpan = $('<span></span>');
        nouSpan.attr("class", "addSpan");
        nouSpan.html(textSpan[k]);
        domNodes.append(nouSpan);
    }
}
// 1.3.	Quan es cliqui sobre el div #setContentPreves crea un  DIV amb el text 'setContentPrev' de la clase setContentPrev  dins #domNodes. Al clicar a sobre el DIV creat, demana a l’usuari un text i mostra’l dins l’element anterior.
$('#setContentPrev').on('click',creaDiv);
function creaDiv () {
    let div = $('<div>setContentPrev</div>');
    div.attr("class", "setContentPrev");
    domNodes.append(div);
    div.on('click', function(){
        let mensaje = prompt("pon tu mensaje");
        let elementoAnterior = div.prev();
        if(elementoAnterior.prop('tagName') !== 'H3' ){
            elementoAnterior.text(mensaje)
        }
    });
}
//const json = '{ "nombre": "Alisson", "comidas": [1,2] }'console.log(json);console.log(JSON.parse(json)
// 1.4.	Quan es cliqui sobre el div #delPrevNode crea un  DIV amb el text 'Remove Preview' , de la clase delPrevNode dins #domNodes.   Al clicar sobre el DIV creat elimina el node anterior a el node clicat.
$('#delPrevNode').on('click', function(){
    console.log('clic')
    let creaDiv = $('<div> Remove Preview'+(++contador)+' </div>');
    creaDiv.addClass("delPrevNode");
    domNodes.append(creaDiv);
    creaDiv.on('click',function(){
        const elementoAnterior = creaDiv.prev();
        if(elementoAnterior.prop('tagName') !== 'H3'){
            elementoAnterior.remove();
        }
    })
});

// 1.5.	Quan es cliqui sobre el div #delNextNode crea un  DIV amb el text 'Remove Next' , de la clase delNextNode dins #domNodes.  Al clicar sobre el DIV creat elimina el node posterior a el node clicat. Només es pot clicar una única vegada sobre #delNextNode

$('#delNextNode').one('click', function(){
    let div = $('<div>Remove Next</div>');
    div.addClass('delNextNode');
    domNodes.append(div);
    div.on('click', function(){
        // animate
        const elementoPosterior = div.next();
        elementoPosterior.remove();
    })
});

// 1.6.	Quan es cliqui sobre el div #replaceMeForFirst crea un  DIV amb el text 'replaceMeForFirst' , de la clase replaceMeForFirst dins #domNodes.   Al clicar sobre el DIV creat substitueix a el primer fill de #domNodes .
$('#replaceMeForFirst').on('click', function(){
    let div = $('<div>replaceMeForFirst'+(++contador)+'</div>');
    div.addClass('replaceMeForFirst');
    domNodes.append(div);
    div.on('click', function(){
        const elementoClonado = div.clone();
        div.remove();
        domNodes.children().first().remove();
        domNodes.prepend(elementoClonado);
    })
});

// 1.7.	Quan es cliqui sobre el div # addAttr crea un  DIV amb el text 'Add one Attribute' , de la clase addAttr dins #domNodes.  Al clicar sobre el DIV creat es demana a l’usuari un nom d’atribut, un valor d’atribut i estableixi al germans de l’element clicat ,l’atribut de nom i valor indicat.
$('#addAttr').on('click', function(){
    let div = $('<div>Add one Attribute</div>');
    div.addClass('addAttr');
    domNodes.append(div);
    div.on('click', function(){
        let nomAtributo = prompt("Introduce el nombre de atributo:");
        let valorAtributo = prompt("Introduce el valor del atributo:");
        div.siblings().css(nomAtributo,valorAtributo);

    })
})


