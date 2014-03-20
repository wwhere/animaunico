/**
 *
 * @param {string} nombreHabilidad
 */
function lanzarEventoSegunHabilidad(nombreHabilidad) {
    var habilidad = getHabilidad(nombreHabilidad);

    switch (habilidad.getTipo()) {
        case TIPO_CAPACIDAD:
            personaje_actual.updateMultiplosVida(true);
            break;
        case TIPO_HB_COMBATE:
            lanzarEvento(EVENT_CHARACTER_SECCION_COMBATE_GENERAL);
            lanzarEvento(EVENT_CHARACTER_SECCION_KI);
            break;
        case TIPO_HB_SOBRENATURAL:
            lanzarEvento(EVENT_CHARACTER_SECCION_MAGIA);
            break;
        case TIPO_HB_PSIQUICA:
            lanzarEvento(EVENT_CHARACTER_SECCION_PSIQUICA);
            break;
        default:
            lanzarEvento(EVENT_CHARACTER_SECCION_SECUNDARIAS);
            lanzarEvento(EVENT_CHARACTER_SECCION_KI);
            break;
    }
}

/**
 *
 * @param {number} gnosis
 * @param {Personaje} personaje
 */
function removeEfectosGnosis(gnosis, personaje) {
    //noinspection FallThroughInSwitchStatementJS
    switch (gnosis) {
        case 50:
        case 45:
        case 40:
        case 35:
        case 30:
        case 25:
            personaje.removeFlag(FLAG_PUEDE_USAR_PODERES_MONSTRUO);
        default:
            //nada
            break;
    }
}

/**
 *
 * @param {number} gnosis
 * @param {Personaje} personaje
 */
function aplicaEfectosGnosis(gnosis, personaje) {
    //noinspection FallThroughInSwitchStatementJS
    switch (gnosis) {
        case 50:
        case 45:
        case 40:
        case 35:
        case 30:
        case 25:
            personaje.setFlag(FLAG_PUEDE_USAR_PODERES_MONSTRUO);
        default:
            //nada
            break;
    }
}

/*
25:

 Poderes de monstruo: A partir de esta cantidad, un ser puede utilizar sus
 PD para desarrollar libremente cualquier poder descrito en el Capítulo 26: La
 creación de seres. Si sube de nivel, puede mejorar los que posee o adquirir
 otros nuevos, incluso si difieren de los de su especie o etnia.

30:
 Percepción expandida: El ser percibe el mundo de
 un modo ligeramente diferente. Por su cercanía con el
 plano espiritual, es capaz de sentir las alteraciones de
 la realidad en el entorno y leer el aura de la gente. De
 este modo, aprecia fácilmente el estado de ánimo de las
 personas y puede discernir si en un lugar determinado
 se han desencadenado habilidades sobrenaturales, y
 en qué medida.
 • Control elemental: Si la criatura es un
 elemental, puede afectar parcialmente el medio
 al que es afín. Automáticamente, influye en un
 número de intensidades equivalente a una tercera
 parte de su Gnosis. También ejerce cierta influencia
 en cualquier ser de su elemento con un Gnosis
 inferior al suyo. Si no es un elemental, puede dominar
 intensidades de cualquier tipo, pero este se reduce sólo
 a una sexta parte en lugar de a una tercera.
 • Bonos de creación: Otorga un Punto de
 Creación adicional, o en su defecto 50 PD extras, para
 obtener poderes y habilidades esenciales de criaturas
 sobrenaturales.

    35:
 • Influir en la realidad: Exteriorizando su poder, la
 entidad modifica pequeños aspectos de la realidad circundante,
 alterando a voluntad cualquier objeto inanimado con una presencia inferior al
 doble de su Gnosis (es decir, si tuviera 35, influiría en cosas cuya presencia fuera
 65 o inferior). Sólo puede influir en un objeto por asalto, siempre y cuando no
 esté en contacto con alguien vivo. Esta habilidad tiene como límite un uso al día
 por cada punto de Gnosis que posea.
 • Inmortal: La entidad ha superado la muerte en muchos aspectos, y sólo puede
 ser exterminada bajo ciertas circunstancias específicas. Incluso si recibe daños que
 disminuyan sus PV por debajo del estado de entre la vida y la muerte, simplemente
 permanecerá inconsciente hasta recuperarse de las heridas. Sólo serán capaces de
 matarlo definitivamente las criaturas cuyo Gnosis no sea 25 puntos inferior al suyo.
 Por tanto, matar a una criatura con Gnosis 35 requiere a alguien de 10 o más, al igual
 que un ser con 40 moriría sólo a manos de un individuo que poseyera 15 puntos.
 • Presencia: Su mera presencia modifica el entorno, volviéndolo afín a su
 naturaleza. Por ejemplo, un elemental oscuro con Gnosis 35 o superior influiría
 en el ambiente tornándolo tenebroso y sombrío.
 • Bonos de creación: Otorga tres Puntos de Creación adicionales o, en
 su defecto, 150 PD extras para obtener poderes y habilidades esenciales de
 criaturas sobrenaturales.

    40:
 • Áuspice: Es capaz de influir en el entorno y en el curso de los
 acontecimientos de manera favorable para él. Por tanto, obtiene un éxito
 automático en cualquier control de una habilidad secundaria que
 no requiera conocimientos o se enfrente directamente a la de otro
 individuo. Esta capacidad no le permite superar directamente
 la dificultad Inhumano o superior. En el caso de los controles
 enfrentados, gana un bono de +10 por cada 5 puntos de Gnosis
 por los que supere a su adversario, incluyendo las habilidades
 de combate.
 • Avatar: La entidad puede erigir varios avatares de sí misma
 proyectando una parte de su conciencia a distancia. Crea
 uno por cada diez puntos de Gnosis que posea, pero es
 incapaz de generar dos de ellos a la vez en el mismo
 lugar. Un avatar tiene aproximadamente entre cinco
 y diez niveles por debajo del ser original y 15 puntos
 menos de Gnosis. Su apariencia y forma es variable,
 pero sus poderes y habilidades deben ser al menos
 parecidos en todas sus encarnaciones. Si el alma de
 un avatar resulta destruida o este es asesinado por un
 ser con un Gnosis igual o superior al suyo, la entidad
 pierde para siempre la capacidad de manifestarlo.
 • Bonos de creación: Otorga seis Puntos de
 Creación adicionales o, en su defecto, 300 PD extras
 para obtener poderes y habilidades esenciales de
 criaturas sobrenaturales.

    45:
 • Caminar entre mundos: Estando más allá de la
 influencia del flujo de almas, la entidad es capaz de moverse
 libremente entre el mundo espiritual, el material o la Vigilia.
 Incluso si fallece, puede volver a manifestarse con todo su
 poder tras cierto tiempo (dependiendo de las circunstancias
 de su fallecimiento, puede costarle desde simples días a
 siglos enteros), salvo si su alma es destruida o muere a
 manos de alguien con un Gnosis superior al suyo.
 • Bonos de creación: Otorga diez Puntos de
 Creación adicionales o, en su defecto, 500 PD extras
 para obtener poderes y habilidades esenciales de criaturas sobrenaturales.

    50:
 • Bonos de creación: Otorga quince Puntos de Creación adicionales o,
 en su defecto, 750 PD extras para obtener poderes y habilidades esenciales de
 criaturas sobrenaturales.

    */