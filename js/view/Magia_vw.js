/**
 *
 * @param {NivelEnVia} nivelVia
 * @returns {jQuery}
 */
function muestraBotonMasMenosNivelVia(nivelVia) {
    var div = $("<div></div>");
    var divMas = boton("small primary pretty btn",_l("+"));
    var divMenos = boton("small secondary pretty btn",_l("+"));

//    divMas.css("width","1rem");
  //  divMenos.css("width","1rem");

    div.append(divMas).append(divMenos);

    divMas.on("click",{nivelEnVia: nivelVia,unidades: 2}, aumentaNivelViaClick);
    divMenos.on("click",{nivelEnVia: nivelVia,unidades: -2}, aumentaNivelViaClick);
    return div;
}

/**
 *
 * @param {ViaMagia} via
 * @param {number} nivel
 * @returns {jQuery}
 */
function muestraBotonElegirConjuroLibreAcceso(via,nivel) {
    var botonDiv = boton("small primary pretty btn",_l(UI_ELEGIR));

    botonDiv.on("click",{via:via,nivel:nivel},elegirConjuroLibreAcceso);

    return botonDiv;
}

function muestraBotonElegirConjuroSuelto() {
    var botonDiv = boton("small primary pretty btn",_l(UI_COMPRAR_CONJURO_SUELTO));

    botonDiv.on("click",{},elegirConjuroSuelto);

    return botonDiv;
}

function muestraBotonElegirArcanaSephirah() {
    var botonDiv = boton("small primary pretty btn",_l(UI_ELEGIR_ARCANA_SEPHIRAH));

    botonDiv.on("click",{},elegirArcanaSephirah);

    return botonDiv;
}

function elegirDesequilibrioOfensivoMagico() {
    var arrayOpciones = [];
    var numOpciones = (personaje_actual.desequilibrioOfensivoMagicoCambioMaximo / 5);
    var valorActual = personaje_actual.desequilibrioOfensivoMagico;

    for (i = 1; i <= numOpciones; i++) {
        var valorMas = valorActual + i*5;
        var valorMenos = valorActual -i*5;
        if (valorMas <= 30)
            arrayOpciones.push(new OpcionMostrable(modificadorBonito(valorMas),valorMas,""));
        if (valorMenos >= -30)
            arrayOpciones.push(new OpcionMostrable(valorMenos,valorMenos,""));
    }
    muestraDialogoElegirOpciones(arrayOpciones, {}, {principal: asignarDesequilibrioOfensivoMagico, isDisabled: alwaysEnabled}, true);

}

function muestraEspecializacionInvocacion() {
    var divRow = getDiv("row");

    var divEtiqueta = getDiv("four columns").addClass(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALL).append(_l(UI_ESPECIALIZADO_EN_INVOCACION));

    var valor  = _l(UI_NO);
    if (personaje_actual.especializadoInvocacion) {
        valor = _l(UI_SI);
    }
    var divValorBase = getDiv("two columns").addClass(CSS_VALOR_PERSONALES).addClass(CSS_TEXTO_SMALL).append(valor);

    var divBoton = getDiv("push_one one column").append(muestraBotonPequeño(_l(UI_CAMBIAR_ESPECIALIZACION),{},function() {
        personaje_actual.setEspecializadoEnInvocacion(!personaje_actual.especializadoInvocacion);
    },""));

    divRow.append(divEtiqueta).append(divValorBase);

    if ((personaje_actual.GENERACION_INICIADA == ESTADO_GENERACION_INICIADA) ||(personaje_actual.GENERACION_INICIADA == ESTADO_GENERACION_SUBIENDO_NIVEL)) {
        divRow.append(divBoton);
    }

    return divRow;

}

function muestraElementalismo() {
    var divRow = getDiv("row");

    var divEtiqueta = getDiv("four columns").addClass(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALL).append(_l(UI_ELEMENTALISMO));

    var divValorBase = getDiv("two columns").addClass(CSS_VALOR_PERSONALES).addClass(CSS_TEXTO_SMALL).append(_l(personaje_actual.elementalismo));

    var divBoton = getDiv("push_one one column").append(muestraBotonPequeño(_l(UI_ESPECIFICAR),{},eligeElementalismo,""));

    divRow.append(divEtiqueta).append(divValorBase);

    if ((personaje_actual.GENERACION_INICIADA == ESTADO_GENERACION_INICIADA) ||(personaje_actual.GENERACION_INICIADA == ESTADO_GENERACION_SUBIENDO_NIVEL)) {
        divRow.append(divBoton);
    }

    return divRow;
}

function eligeElementalismo() {
    var arrayOpciones = [];

    arrayOpciones.push(new OpcionMostrable(_l(ELEMENTALISMO_AGUA),ELEMENTALISMO_AGUA,""));
    arrayOpciones.push(new OpcionMostrable(_l(ELEMENTALISMO_FUEGO),ELEMENTALISMO_FUEGO,""));
    arrayOpciones.push(new OpcionMostrable(_l(ELEMENTALISMO_AIRE),ELEMENTALISMO_AIRE,""));
    arrayOpciones.push(new OpcionMostrable(_l(ELEMENTALISMO_TIERRA),ELEMENTALISMO_TIERRA,""));
    arrayOpciones.push(new OpcionMostrable(_l(ELEMENTALISMO_LUZ),ELEMENTALISMO_LUZ,""));
    arrayOpciones.push(new OpcionMostrable(_l(ELEMENTALISMO_OSCURIDAD),ELEMENTALISMO_OSCURIDAD,""));

    muestraDialogoElegirOpciones(arrayOpciones, {}, {principal: asignarElementalismo, isDisabled: alwaysEnabled}, true);

}
function muestraInvocaciones(muestraBotones) {
    var div = getDiv("");
    var i;
    var divInvocaciones = getDiv("");

    var invocaciones = personaje_actual.getInvocaciones();

    if (muestraBotones) {
        div.append(muestraBotonElegirInvocacion());
    } else if (invocaciones.length == 0) {
        div.append(getDiv(CSS_ETIQUETA).addClass(CSS_TEXTO_SMALLER).html("<br>"));
    }

    for (i=0; i < invocaciones.length;i++) {
        var invocacion = invocaciones[i];
        var divInvocacion = getDiv(CSS_TEXTO_SMALL).addClass(CSS_ETIQUETA);
        divInvocacion.append(invocacion.toString()).append(muestraBotonAnular(eliminarInvocacion,{invocacion: invocacion}));
        divInvocaciones.append(divInvocacion);
    }

    div.append(divInvocaciones);
    return div;
}

function muestraBotonElegirInvocacion() {
    var botonDiv = boton("small primary pretty btn",_l(UI_ELEGIR_INVOCACION));

    botonDiv.on("click",{},elegirInvocacion);

    return botonDiv;
}

function muestraArcanaSephirah(destino) {
    var circleWidth = 5;

    var fontFamily = 'Bree Serif',
        fontSizeHighlight = '1.5em',
        fontSizeNormal = '1em';

    var w = "800px";
    var h = "600px";
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

    var posiciones = [];
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
        var puede = puedeComprarArcanaSephirah(arca,personaje_actual);
        var tiene = personaje_actual.hasArcanaSephirah(arca);
        var anulable = false;
        if (tiene) {
            if (personaje_actual.getEsferaMetamagica(arca.getNombre()).isAnulable(arca.posicion)) {
                anulable = true;
            }
        }
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
                tiene: tiene,
                anulable: anulable,
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

    $(destino).empty();

    var vis = d3.select(destino)
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
                .text(function(d, i) {
                    var cadena =d.name + " (" + d.arcana.getCoste();
                    if (d.arcana.getNivelMinimo() > 0) {
                        cadena += "/" + d.arcana.getNivelMinimo();
                    }
                    cadena += ")";
                    return cadena;
                })
                .style("cursor", "none")
                .duration(250)
                .style("cursor", "none")
                .attr("font-size","1.5em")


        })

        //MOUSEOUT
        .on("mouseout", function(d,i) {
            //CIRCLE
            d3.select(this).selectAll("circle")
                .transition()
                .duration(250)
                .attr("r", circleWidth)
                .attr("fill",function(d, i) {
                    if (d.tiene) {
                        if (d.anulable) {
                            return palette.blue;
                        } else {
                            return palette.black;
                        }
                    } else if (d.puede) {
                        return  palette.green;
                    }
                    else {
                        return palette.red;
                    }
                });

            d3.selectAll("text")
                .transition()
                .duration(1)
                .attr("font-size","0.6em");

            //TEXT
            d3.select(this).select("text")
                .transition()
                .duration(250)
                .text(function(d, i) { return d.name; })
                .attr("font-size","0.6em")
                .attr("x", function(d, i) { return d.x; } )
                .attr("y", function(d, i) { return d.y - 10 } )


        })

        .on("click", function(d,i) {
            if (d.puede) {
                personaje_actual.addEsferaMetamagica(d.arcana);
            } else if (d.anulable) {
                personaje_actual.removeEsferaMetamagica(d.arcana);
            }
        });


    //CIRCLE
    node.append("svg:circle")
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; })
        .attr("r", circleWidth)
        .attr("fill", function(d, i) {
            if (d.tiene) {
                if (d.anulable) {
                    return palette.blue;
                } else {
                    return palette.black;
                }
            } else if (d.puede) {
                return  palette.green;
            }
            else {
                return palette.red;
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

function elegirArcanaSephirah(event) {
    muestraDialogoArcanaSephirah();
}

function muestraDialogoArcanaSephirah() {
    var dialogo = getDiv("");

    dialogo.append(getDiv("").attr("id","muestraArcanaSephirah"));

    var actualizarDialogoArcanaSephirah = function() {
        $("#muestraArcanaSephirah").empty();


        muestraArcanaSephirah("#muestraArcanaSephirah");
    };



    dialogo.dialog({
        modal: true,
        autoOpen: true,
        resizable: true,
        draggable: true,
        //show: "puff",
        title: _l(DIAG_ARCANA_SEPHIRAH),
        position: "center",
        width: ANCHO_DIALOGO,
        height: ALTO_DIALOGO,
        maxHeight: ALTO_DIALOGO,
        closeOnEscape: true,
        close: function(event, ui) {dialogo.empty();}
    });
    actualizarDialogoArcanaSephirah();

    dialogo.on("close",function() {
        dialogo.empty();
        removeActualizador(EVENT_CHARACTER_SECCION_MAGIA,actualizarDialogoArcanaSephirah);
    });


    addActualizador(EVENT_CHARACTER_SECCION_MAGIA,actualizarDialogoArcanaSephirah);
}

function seleccionarTeoremaMagico() {
    var arrayOpciones = [];

    arrayOpciones.push(new OpcionMostrable(_l(TEOREMA_MAGIA_GENERAL),TEOREMA_MAGIA_GENERAL,""));
    arrayOpciones.push(new OpcionMostrable(_l(TEOREMA_MAGIA_ONMYODO),TEOREMA_MAGIA_ONMYODO,""));
    arrayOpciones.push(new OpcionMostrable(_l(TEOREMA_MAGIA_VODOUN),TEOREMA_MAGIA_VODOUN,""));
    arrayOpciones.push(new OpcionMostrable(_l(TEOREMA_MAGIA_SHAMANICA),TEOREMA_MAGIA_SHAMANICA,""));
    arrayOpciones.push(new OpcionMostrable(_l(TEOREMA_MAGIA_MAGIA_NATURAL),TEOREMA_MAGIA_MAGIA_NATURAL,""));

    muestraDialogoElegirOpciones(arrayOpciones, {}, {principal: elegidoTeoremaMagico, isDisabled: alwaysEnabled}, true);
}

function elegidoTeoremaMagico(parametros) {
    var teorema = parametros.opcion;

    if (teorema == TEOREMA_MAGIA_MAGIA_NATURAL) {
        var arrayOpciones = [];

        arrayOpciones.push(new OpcionMostrable(_l(MAGIA_NATURAL_ESP_NINGUNA),MAGIA_NATURAL_ESP_NINGUNA,""));
        arrayOpciones.push(new OpcionMostrable(_l(MAGIA_NATURAL_ESP_CREADOR),MAGIA_NATURAL_ESP_CREADOR,""));
        arrayOpciones.push(new OpcionMostrable(_l(MAGIA_NATURAL_ESP_DESTRUCTOR),MAGIA_NATURAL_ESP_DESTRUCTOR,""));
        arrayOpciones.push(new OpcionMostrable(_l(MAGIA_NATURAL_ESP_TRANSMUTADOR),MAGIA_NATURAL_ESP_TRANSMUTADOR,""));
        arrayOpciones.push(new OpcionMostrable(_l(MAGIA_NATURAL_ESP_CONTROLADOR),MAGIA_NATURAL_ESP_CONTROLADOR,""));
        arrayOpciones.push(new OpcionMostrable(_l(MAGIA_NATURAL_ESP_ANIMISTA),MAGIA_NATURAL_ESP_ANIMISTA,""));
        arrayOpciones.push(new OpcionMostrable(_l(MAGIA_NATURAL_ESP_SANADOR),MAGIA_NATURAL_ESP_SANADOR,""));
        arrayOpciones.push(new OpcionMostrable(_l(MAGIA_NATURAL_ESP_ELEMENTALISTA),MAGIA_NATURAL_ESP_ELEMENTALISTA,""));
        arrayOpciones.push(new OpcionMostrable(_l(MAGIA_NATURAL_ESP_ILUSIONISTA),MAGIA_NATURAL_ESP_ILUSIONISTA,""));

        muestraDialogoElegirOpciones(arrayOpciones, {teorema:teorema}, {principal: elegidaEspecializacionMagiaNatural, isDisabled: alwaysEnabled}, true);
    } else {
        personaje_actual.setTeoremaMagico(teorema);
    }
}

function elegidaEspecializacionMagiaNatural(parametros) {
    personaje_actual.setTeoremaMagico(parametros.teorema,parametros.opcion);
}