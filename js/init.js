animaUnico.inicializar = function() {
    initHabilidades();

    initVentajas();

    initEquipo();

    initArtesMarciales();

    initCategorias();

    muestraControles();

    setIdiomaUI();

    localizaHTML();

    /*Se extraen los valores de GET*/
    var queryDict = {};
    location.search.substr(1).split("&").forEach(
        function(item) {
            queryDict[item.split("=")[0]] = item.split("=")[1]
        }
    );

    if (queryDict.carga == 1) {
        var idPersonaje = queryDict.id;
        jQuery.ajax('http://helechaloscuro.net/cake/personajes/carga/'+idPersonaje,{
            success : function(json, status, jqxhr) {
                cargarPersonaje(json);
                ALTO_DIALOGO =  $(window).height() * 0.8;
            },
            dataType : 'text',
            error : function(jqxhrm, errorType, exception) {

            } //TODO username / password para autenticación HTTP
        });
    } else {
        personaje_actual = new Personaje();
        personaje_actual.setRaza(getRaza(RAZA_HUMANO));
        personaje_actual.setCategoria(CATEGORIA_NOVEL);

        muestraPersonaje(personaje_actual);

        var primeraVisita = true;

        if (typeof(Storage) !== "undefined") {
            if (localStorage.ultimosCambiosVistos == CURRENT_VERSION) {
                primeraVisita = false;
            }
        }

        if (primeraVisita) {
            mostrarLogCambios();
        }
        ALTO_DIALOGO =  $(window).height() * 0.8;
    }
};

function inicializar() {
    console.log("COPIA LOCAL");
    initHabilidades();

    initVentajas();

    initEquipo();

    initArtesMarciales();

    initCategorias();

    muestraControles();

    setIdiomaUI();

    localizaHTML();

    /*Se extraen los valores de GET*/
    var queryDict = {};
    location.search.substr(1).split("&").forEach(
        function(item) {
            queryDict[item.split("=")[0]] = item.split("=")[1]
        }
    );

    if (queryDict.carga == 1) {
        var idPersonaje = queryDict.id;
        jQuery.ajax('http://helechaloscuro.net/cake/personajes/carga/'+idPersonaje,{
            success : function(json, status, jqxhr) {
                cargarPersonaje(json);
                ALTO_DIALOGO =  $(window).height() * 0.8;
            },
            dataType : 'text',
            error : function(jqxhrm, errorType, exception) {

            } //TODO username / password para autenticación HTTP
        });
    } else {
        personaje_actual = new Personaje();
        personaje_actual.setRaza(getRaza(RAZA_HUMANO));
        personaje_actual.setCategoria(CATEGORIA_NOVEL);

        muestraPersonaje(personaje_actual);

        var primeraVisita = true;

        if (typeof(Storage) !== "undefined") {
            if (localStorage.ultimosCambiosVistos == CURRENT_VERSION) {
                primeraVisita = false;
            }
        }

        if (primeraVisita) {
            mostrarLogCambios();
        }
        ALTO_DIALOGO =  $(window).height() * 0.8;
    }

}

function mostrarPersonajeActual() {
    muestraPersonaje(personaje_actual);
}

function grafo() {
    var w = 900,
        h = 900;

    var circleWidth = 5;

    var fontFamily = 'Bree Serif',
        fontSizeHighlight = '1.5em',
        fontSizeNormal = '1em';

    var palette = {
        "black": "#000000",
        "lightgray": "#819090",
        "gray": "#708284",
        "mediumgray": "#536870",
        "darkgray": "#475B62",

        "darkblue": "#0A2933",
        "darkerblue": "#042029",

        "paleryellow": "#FCF4DC",
        "paleyellow": "#EAE3CB",
        "yellow": "#A57706",
        "orange": "#BD3613",
        "red": "#D11C24",
        "pink": "#C61C6F",
        "purple": "#595AB7",
        "blue": "#2176C7",
        "green": "#259286",
        "yellowgreen": "#738A05"
    };

    var nodes = [];

    var links = [];

    var posiciones = []; //TODO http://thinkingonthinking.com/Getting-Started-With-D3/
    posiciones[0] = {x: 450 ,y: 20};
    posiciones[1] = {x: 400 ,y: 50};
    posiciones[2] = {x: 500 ,y: 50};
    posiciones[3] = {x: 450 ,y: 70};
    posiciones[4] = {x: 70 ,y: 90};
    posiciones[5] = {x: 250 ,y: 90};
    posiciones[6] = {x: 400 ,y: 90};
    posiciones[7] = {x: 500 ,y: 90};
    posiciones[8] = {x: 650 ,y: 90};
    posiciones[9] = {x: 830 ,y: 90};
    posiciones[10] = {x: 150 ,y: 110};
    posiciones[11] = {x: 450 ,y: 110};
    posiciones[12] = {x: 750 ,y: 110};
    posiciones[13] = {x: 70 ,y: 130};
    posiciones[14] = {x: 250 ,y: 130};
    posiciones[15] = {x: 450 ,y: 130};
    posiciones[16] = {x: 650 ,y: 130};
    posiciones[17] = {x: 830 ,y: 130};
    posiciones[18] = {x: 400 ,y: 150};
    posiciones[19] = {x: 500 ,y: 150};
    posiciones[20] = {x: 450 ,y: 160};
    posiciones[21] = {x: 70 ,y: 180};
    posiciones[22] = {x: 150 ,y: 180};
    posiciones[23] = {x: 300 ,y: 180};
    posiciones[24] = {x: 400 ,y: 190};
    posiciones[25] = {x: 500 ,y: 190};
    posiciones[26] = {x: 600 ,y: 180};
    posiciones[27] = {x: 750 ,y: 180};
    posiciones[28] = {x: 830 ,y: 180};
    posiciones[29] = {x: 30 ,y: 200};
    posiciones[30] = {x: 100 ,y: 200};
    posiciones[31] = {x: 200 ,y: 200};
    posiciones[32] = {x: 250 ,y: 200};
    posiciones[33] = {x: 350 ,y: 200};
    posiciones[34] = {x: 550 ,y: 200};
    posiciones[35] = {x: 650 ,y: 200};
    posiciones[36] = {x: 700 ,y: 200};
    posiciones[37] = {x: 800 ,y: 200};
    posiciones[38] = {x: 870 ,y: 200};
    posiciones[39] = {x: 70 ,y: 220};
    posiciones[40] = {x: 150 ,y: 220};
    posiciones[41] = {x: 300 ,y: 220};
    posiciones[42] = {x: 400 ,y: 210};
    posiciones[43] = {x: 500 ,y: 210};
    posiciones[44] = {x: 600 ,y: 220};
    posiciones[45] = {x: 750 ,y: 220};
    posiciones[46] = {x: 830 ,y: 220};
    posiciones[47] = {x: 450 ,y: 240};
    posiciones[48] = {x: 70 ,y: 280};
    posiciones[49] = {x: 250 ,y: 280};
    posiciones[50] = {x: 400 ,y: 260};
    posiciones[51] = {x: 450 ,y: 280};
    posiciones[52] = {x: 500 ,y: 260};
    posiciones[53] = {x: 650 ,y: 280};
    posiciones[54] = {x: 830 ,y: 280};
    posiciones[55] = {x: 150 ,y: 300};
    posiciones[56] = {x: 450 ,y: 300};
    posiciones[57] = {x: 750 ,y: 300};
    posiciones[58] = {x: 70 ,y: 320};
    posiciones[59] = {x: 250 ,y: 320};
    posiciones[60] = {x: 400 ,y: 320};
    posiciones[61] = {x: 500 ,y: 320};
    posiciones[62] = {x: 650 ,y: 320};
    posiciones[63] = {x: 830 ,y: 320};
    posiciones[64] = {x: 450 ,y: 340};
    posiciones[65] = {x: 400 ,y: 360};
    posiciones[66] = {x: 500 ,y: 360};
    posiciones[67] = {x: 450 ,y: 380};



    for (var i = 0; i < arcanaSephirah.length; i++) {
        var arca = arcanaSephirah[i];
        var nombre = _l(arca.getNombre());
        var puede = false;
        if (puedeComprarArcanaSephirah(arca,personaje_actual))
            puede = true;

        var x = posiciones[i].x;
        if (x < 450) {
            x = 450-((450-x) * 0.8);
        } else if (x > 450) {
            x = 450 + ((x-450)*0.8);
        }
        var y = posiciones[i].y * 1.5;
        nodes.push(
            {
                name: _l(arca.getNombre()),
                puede: puede,
                arcana: arca,
                rama: arca.getEsfera().getRama(),
                x: x,
                y: y
            }
        );
    }
    for (i = 0; i < arcanaSephirah.length; i++) {
        var conex = arcanaSephirah[i].getConexiones();
        for (var j = 0; j < conex.length; j++) {
            if (conex[j] > i) {
                links.push({source: nodes[i], target: nodes[conex[j]]});
            }
        }
    }

    $("#grafo").empty();

    var vis = d3.select("#grafo")
        .append("svg:svg")
        .attr("class", "stage")
        .attr("width", w)
        .attr("height", h);

    var link = vis.selectAll(".link")
        .data(links)
        .enter().append("line")
        .attr("x1", function(d) {return d.source.x})
        .attr("y1", function(d) {return d.source.y})
        .attr("x2", function(d) {return d.target.x})
        .attr("y2", function(d) {return d.target.y})
        .attr("class", "link")
        .attr("stroke", "#000000")
        .attr("fill", "none");

    var node = vis.selectAll("circle.node")
        .data(nodes)
        .enter().append("g")
        .attr("class", "node")

        //MOUSEOVER
        .on("mouseover", function(d,i) {
            if (d.puede) {
                //CIRCLE
                d3.select(this).selectAll("circle")
                    .transition()
                    .duration(250)
                    .style("cursor", "none")
                    .attr("r", circleWidth+3)
                    .attr("fill",palette.orange);

                d3.selectAll("text")
                    .transition()
                    .duration(1)
                    .attr("font-size","0em");
                //TEXT
                d3.select(this).select("text")
                    .transition()
                    .style("cursor", "none")
                    .duration(250)
                    .style("cursor", "none")
                    .attr("font-size","1.5em")
            } else {
                //CIRCLE
                d3.select(this).selectAll("circle")
                    .style("cursor", "none")

                //TEXT
                d3.select(this).select("text")
                    .style("cursor", "none")
            }
        })

        //MOUSEOUT
        .on("mouseout", function(d,i) {
            if (d.puede) {
                //CIRCLE
                d3.select(this).selectAll("circle")
                    .transition()
                    .duration(250)
                    .attr("r", circleWidth)
                    .attr("fill",palette.blue);

                d3.selectAll("text")
                    .transition()
                    .duration(1)
                    .attr("font-size","0.6em");

                //TEXT
                d3.select(this).select("text")
                    .transition()
                    .duration(250)
                    .attr("font-size","0.6em")
                    .attr("x", function(d, i) { return d.x; } )
                    .attr("y", function(d, i) { return d.y - 10 } )
            }
        })

            .on("click", function(d,i) {
                if (d.puede) {
                    personaje_actual.addEsferaMetamagica(d.arcana);
                }
            });


    //CIRCLE
    node.append("svg:circle")
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; })
        .attr("r", circleWidth)
        .attr("fill", function(d, i) {
            if (d.puede) {
                return  palette.blue;
            }
            else {
                return palette.black
            }
        } );

    //TEXT
    node.append("text")
        .text(function(d, i) { return d.name; })
        .attr("x",    function(d, i) { return d.x; })
        .attr("y",            function(d, i) { return d.y - 10 })
        .attr("font-family",  "Bree Serif")
        .attr("fill",         function(d, i) {
            switch (d.rama) {
                case BELLUM_DOMINI_ARCHANUM:
                    return  palette.red;
                case COGNOS_ARCHANUM:
                    return  palette.blue;
                case ESOTEROS_ARCHANUM:
                    return  palette.green;
                case POTESTAS_ARCHANUM:
                    return  palette.purple;
                default:
                    return  palette.paleryellow;
            }
        })
        .attr("font-size",    function(d, i) {  return  "0.6em"; })
        .attr("text-anchor",  function(d, i) { return "middle" });


}