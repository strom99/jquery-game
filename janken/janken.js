//Programa amb jQuery que al clicar sobre !FIGHT!:
//a) Es creïn tres imatges dins #jugador1 amb les següents característiques:
//  i) Han de mostrar “rock.png”, “paper.png” i “scrissor.png”.
//  i) Amb una altura de 120px, una posició relativa situada a left:0px y top:0px;
//b) El color de fons de PLAYER1 s’ha de modificar (color a escollir)
//c) S’han d’ocultar els missatges de guanyador .
//d) Quan el ratolí es situï sobre alguna de les opcions (pedra, paper, o estisores), aquest s’ha d’animar fins tenir unes mesures de 140x140px , i la resta s’han d’animar fins unes mesures de 100x100px.
// Nota: Utilitza el .stop() per aturar la animació.
$('#fight').on('click', function(){
    $('#jugador1 > h3').css("background-color","red");
    $("#fight ,#player1Win, #player2Win, #draw ").hide();

    cargarImagenes("#jugador1");
    /* 3. Al clicar sobre una opció del 1r jugador:
        a) guarda en una variable la opció seleccionada (el src, id.. el que escullis)
        b) utilitza .off() para desvincular tots los esdeveniments de les opcions del 1er jugador.
        c) Elimina les opcions del 1er jugador, i crea les del segon jugador 
        d) Anima cada opció igual que has fet amb les del 1r jugador.*/
    onHover('#jugador1 > img', function(target) {
        let jugador1Img = target.attr("src");
        let jugador1DataId = target. attr("data-id");

        $('#jugador1 > img').remove();
        $('#jugador1 > h3').css("background-color","transparent");
        $('#jugador2 > h3').css("background-color","red");

     /* 4. Al clicar una opció del jugador 2:
            a) guarda en una variable la opció seleccionada (el src, id.. el que escullis)
            b) Utilitza .off() para desvincular tots els esdeveniments del 2o jugador.
            c) Elimina les opcions del 2on jugador
            d) Comprova les opcions seleccionades por els jugadors
            i) Mostra el missatge corresponent al jugador guanyador
            ii) Crea de nou les imatges corresponents a les escollides per els jugadors
            iii) anima les opcions perquè es situïn al centre (position:absolute , opció del
            jugador1 a left:150px y top:150px, i jugador2 a left:-150px y top150px:
            aproximadament). */
        cargarImagenes('#jugador2');

        onHover('#jugador2 > img', function (target) {
            let jugador2Img = target.attr("src");
            let jugador2DataId = target. attr("data-id");
            $('#jugador2 > h3').css("background-color","transparent");
            $('#jugador2 > img').remove();

            $('#jugador1').append('<img src='+jugador1Img+' data-id='+jugador1DataId+' />');
            $('#jugador2').append('<img src='+jugador2Img+' data-id='+jugador2DataId+' />');
            $('#jugador1 > img').attr('class','manos');
            $('#jugador2 > img').attr('class','manos');
            $('#jugador1 > img , #jugador2 > img').css({
                background : 'blue',
                position : 'absolute'
            });

            // Calcular quien ha ganado según la elección
            if (jugador1DataId == jugador2DataId) {
                alert('Empate');
                animacion();
                animacion2();
            } else if (jugador1DataId == '1' && jugador2DataId == '2') {
                $('#player1Win').show();
                animacion2();
                animacion();
            } else if (jugador1DataId == '1' && jugador2DataId == '3') {
                $('#player2Win').show();
                animacion();
                animacion2();
            } else if (jugador1DataId == '2' && jugador2DataId == '1') {
                $('#player2Win').show();
                animacion2();
                animacion();
            } else if (jugador1DataId == '2' && jugador2DataId == '3') {
                $('#player1Win').show();
                animacion();
                animacion2();
            } else if (jugador1DataId == '3' && jugador2DataId == '1') {
                $('#player1Win').show();
                animacion2();
                animacion();
            } else if (jugador1DataId == '3' && jugador2DataId == '2') {
                $('#player2Win').show();
                animacion();
                animacion2();
            }

            // condicional para que la imagen ganadora se posiciones sobre la otra
            if($('#player1Win').is(':visible')){
                console.log('1');
                $('#jugador1 > img').css({"z-index":"1"});
            }
            if($('#player2Win').is(':visible')){
                console.log('2');
                $('#jugador2 > img').css({"z-index":"1"});
            }

            // animacion al centro de las opciones
            function animacion(){
                $('#jugador1 > img').animate({ 
                    position : 'absolute',
                    left : '150px',
                    top : '150px'
                }, 300);
            }
            function animacion2(){
                $('#jugador2 > img').animate({ 
                    position : 'absolute',
                    left : '-150px',
                    top : '150px'
                }, 300);
            }
            
        });
    });         
});

// carga de imagenes jugador 1 y jugador 2
function cargarImagenes (selector) {
    let imagenesCargadas = ["paper.png", "rock.png", "scissor.png"];
    for(let i = 0 ; i < imagenesCargadas.length; i++){
        let img = $('<img>').attr('src',imagenesCargadas[i]);
        img.attr('class', 'manos');
        img.attr('data-id', i+1)
        $(selector).append(img);
    }
}
// funcion hover animacion
function onHover(selector, callback){
    $(selector).mouseenter(function (){
        $(this).stop();
        $(this).animate({
            height : '150px',
            width : '150px'
        });
    });

    $(selector).mouseleave(function(){
        $(this).stop();
        $(this).animate({
            height : '100px',
            width : '100px'
        })
    });

    $(selector).click(function (e) {
        callback($(this))
    })
}

