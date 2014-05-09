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
    }

    var nodes = [
    ]

    var links = [
    ]

    for (var i = 0; i < arcanaSephirah.length; i++) {
        var arca = arcanaSephirah[i];
        var nombre = _l(arca.getNombre());
        var puede = false;
        if (puedeComprarArcanaSephirah(arca,personaje_actual))
            puede = true;
        nodes.push(
            {
                name: _l(arca.getNombre()),
                puede: puede,
                rama: arca.getEsfera().getRama()
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

    var force = d3.layout.force()
        .nodes(nodes)
        .links([])
        .gravity(0.1)
        .charge(-100)
        .size([w, h]);

    var link = vis.selectAll(".link")
        .data(links)
        .enter().append("line")
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

                //TEXT
                d3.select(this).select("text")
                    .transition()
                    .style("cursor", "none")
                    .duration(250)
                    .style("cursor", "none")
                    .attr("font-size","1.5em")
                    .attr("x", 15 )
                    .attr("y", 5 )
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

                //TEXT
                d3.select(this).select("text")
                    .transition()
                    .duration(250)
                    .attr("font-size","1em")
                    .attr("x", 8 )
                    .attr("y", 4 )
            }
        })

        .call(force.drag);


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
        } )

    //TEXT
    node.append("text")
        .text(function(d, i) { return d.name; })
        .attr("x",    function(d, i) { return circleWidth + 5; })
        .attr("y",            function(d, i) { return 8 })
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
        .attr("font-size",    function(d, i) {  return  "1em"; })
        .attr("text-anchor",  function(d, i) { return "end" })



    force.on("tick", function(e) {
        node.attr("transform", function(d, i) {
            return "translate(" + d.x + "," + d.y + ")";
        });

        link.attr("x1", function(d)   { return d.source.x; })
            .attr("y1", function(d)   { return d.source.y; })
            .attr("x2", function(d)   { return d.target.x; })
            .attr("y2", function(d)   { return d.target.y; })
    });

    force.start();
}