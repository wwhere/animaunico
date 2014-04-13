module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                // define a string to put between each file in the concatenated output
                separator: '\r\n'
            },
            dist: {
                // the files to concatenate
                src: [
                    "js/vendor/modernizr-2.6.2.min.js",
                    "js/pluginsOld.js",
                    "js/vendor/jquery-ui-1.10.3.custom.min.js",
                    "js/libs/gumby.min.js",
                    "js/plugins.js",
                    "js/main.js",

                    "js/head.js",
                    "js/locale/localization.js",
                    "js/locale/locArtesMarciales.js",
                    "js/locale/locCategorias.js",
                    "js/locale/locDesventajas.js",
                    "js/locale/locElan.js",
                    "js/locale/locEquipo.js",
                    "js/locale/locKi.js",
                    "js/locale/locMagia.js",
                    "js/locale/locPsiquica.js",
                    "js/locale/locRazas.js",
                    "js/locale/locTablas.js",
                    "js/locale/locVentajas.js",
                    "js/locale/locInvocaciones.js",
                    "js/locale/locOrigenes.js",

                    "js/libros.js",
                    "js/mainAnimaUnico.js",
                    "js/hojaPersonaje.js",

                    "js/model/Resistencia.js",

                    "js/model/Bono.js",

                    "js/model/ElementoProhibido.js",

                    "js/model/Requisito.js",

                    "js/model/Habilidad.js",
                    "js/controller/Habilidad_ct.js",

                    "js/model/Magia.js",
                    "js/controller/Magia_ct.js",
                    "js/data/magia/LibreAcceso.js",
                    "js/data/magia/ViaAgua.js",
                    "js/data/magia/ViaAire.js",
                    "js/data/magia/ViaCreacion.js",
                    "js/data/magia/ViaDestruccion.js",
                    "js/data/magia/ViaEsencia.js",
                    "js/data/magia/ViaFuego.js",
                    "js/data/magia/ViaIlusion.js",
                    "js/data/magia/ViaLuz.js",
                    "js/data/magia/ViaNigromancia.js",
                    "js/data/magia/ViaOscuridad.js",
                    "js/data/magia/ViaTierra.js",

                    "js/model/Invocacion.js",
                    "js/data/magia/invocaciones.js",

                    "js/model/DisciplinaPsiquica.js",
                    "js/controller/Psiquica_ct.js",
                    "js/data/psiquica/PoderesMatriciales.js",
                    "js/data/psiquica/Crioquinesis.js",
                    "js/data/psiquica/Energia.js",
                    "js/data/psiquica/IncrementoFisico.js",
                    "js/data/psiquica/Piroquinesis.js",
                    "js/data/psiquica/Sentiente.js",
                    "js/data/psiquica/Telemetria.js",
                    "js/data/psiquica/Telepatia.js",
                    "js/data/psiquica/Telequinesis.js",

                    "js/model/HabilidadKi.js",
                    "js/model/Ki.js",
                    "js/model/Limite.js",
                    "js/controller/Ki_ct.js",
                    "js/data/ki/habilidadesKi.js",
                    "js/data/ki/efectosTecnicas/desventajasTecnicas.js",
                    "js/data/ki/efectosTecnicas/efectosAccion.js",
                    "js/data/ki/efectosTecnicas/efectosDefensivos.js",
                    "js/data/ki/efectosTecnicas/efectosDestructivos.js",
                    "js/data/ki/efectosTecnicas/efectosEsotericos.js",
                    "js/data/ki/efectosTecnicas/efectosEspeciales.js",
                    "js/data/ki/efectosTecnicas/efectosOfensivos.js",
                    "js/data/ki/efectosTecnicas/efectosReaccion.js",
                    "js/data/ki/tecnicas/celeritas.js",
                    "js/data/ki/tecnicas/ignis.js",
                    "js/data/ki/tecnicas/elDragon.js",
                    "js/data/ki/tecnicas/complementoWeb1.js",
                    "js/data/ki/limites.js",

                    "js/model/Ventaja.js",
                    "js/controller/Ventaja_ct.js",
                    "js/data/ventajas/ventComunes.js",
                    "js/data/ventajas/ventDon.js",
                    "js/data/ventajas/ventPsiquicos.js",
                    "js/data/desventajas/desvComunes.js",
                    "js/data/desventajas/desvDon.js",
                    "js/data/desventajas/desvPsiquicos.js",

                    "js/model/Dinero.js",
                    "js/model/Equipo.js",
                    "js/controller/Equipo_ct.js",
                    "js/data/equipo/Armas.js",
                    "js/data/equipo/Armaduras.js",
                    "js/data/equipo/Equipo.js",

                    "js/model/TablaArmas.js",
                    "js/controller/Tablas_ct.js",
                    "js/data/tablas/tablasArmas.js",
                    "js/data/tablas/tablasMisticas.js",
                    "js/data/tablas/tablasPsiquicas.js",

                    "js/model/Raza.js",
                    "js/controller/Razas_Ct.js",
                    "js/data/razas/humano.js",
                    "js/data/razas/sylvain.js",
                    "js/data/razas/danjayni.js",
                    "js/data/razas/ebudan.js",
                    "js/data/razas/jayan.js",
                    "js/data/razas/daimah.js",
                    "js/data/razas/dukZarist.js",
                    "js/data/razas/nephilim/nephDaimah.js",
                    "js/data/razas/nephilim/nephDanjayni.js",
                    "js/data/razas/nephilim/nephDukZarist.js",
                    "js/data/razas/nephilim/nephEbudan.js",
                    "js/data/razas/nephilim/nephJayan.js",
                    "js/data/razas/nephilim/nephSylvain.js",

                    "js/model/ArteMarcial.js",
                    "js/controller/ArtesMarciales_ct.js",
                    "js/data/artesMarciales/artesMarcialesBasicas.js",
                    "js/data/artesMarciales/artesMarcialesAvanzadas.js",

                    "js/model/Elan.js",
                    "js/controller/Elan_ct.js",
                    "js/data/elan/BerylAzrael.js",
                    "js/data/elan/BerylBarakiel.js",
                    "js/data/elan/BerylEdamiel.js",
                    "js/data/elan/BerylGabriel.js",
                    "js/data/elan/BerylRafael.js",
                    "js/data/elan/BerylMikael.js",
                    "js/data/elan/BerylUriel.js",
                    "js/data/elan/ShajadAbbadon.js",
                    "js/data/elan/ShajadErebus.js",
                    "js/data/elan/ShajadEriol.js",
                    "js/data/elan/ShajadMeseguis.js",
                    "js/data/elan/ShajadJedah.js",
                    "js/data/elan/ShajadNoah.js",
                    "js/data/elan/ShajadZemial.js",

                    "js/model/Categoria.js",
                    "js/controller/Categoria_ct.js",
                    "js/data/categorias/asesino.js",
                    "js/data/categorias/conjurador.js",
                    "js/data/categorias/explorador.js",
                    "js/data/categorias/guerrero.js",
                    "js/data/categorias/guerreroAcrobata.js",
                    "js/data/categorias/guerreroConjurador.js",
                    "js/data/categorias/guerreroMentalista.js",
                    "js/data/categorias/hechicero.js",
                    "js/data/categorias/hechiceroMentalista.js",
                    "js/data/categorias/ilusionista.js",
                    "js/data/categorias/ladron.js",
                    "js/data/categorias/maestroEnArmas.js",
                    "js/data/categorias/mentalista.js",
                    "js/data/categorias/novel.js",
                    "js/data/categorias/paladinDesc.js",
                    "js/data/categorias/paladinFrial.js",
                    "js/data/categorias/paladinOscuroCont.js",
                    "js/data/categorias/paladinOscuroResi.js",
                    "js/data/categorias/sombra.js",
                    "js/data/categorias/tao.js",
                    "js/data/categorias/tecnicista.js",
                    "js/data/categorias/warlock.js",

                    "js/model/Origen.js",
                    "js/controller/Origen_ct.js",
                    "js/data/origenes/origenesAbel.js",
                    "js/data/origenes/origenesAlEnneth.js",
                    "js/data/origenes/origenesAzur.js",
                    "js/data/origenes/origenesComercio.js",
                    "js/data/origenes/origenesEpiscopales.js",
                    "js/data/origenes/origenesGelidos.js",
                    "js/data/origenes/origenesIndependientes.js",
                    "js/data/origenes/origenesOrientales.js",
                    "js/data/origenes/origenesOscuras.js",

                    "js/model/Personaje.js",
                    "js/controller/Personaje_ct.js",
                    "js/view/Personaje_vw.js",

                    "js/view/Controles_vw.js",
                    "js/view/Caracteristicas_vw.js",
                    "js/view/Categoria_vw.js",
                    "js/view/Combate_vw.js",
                    "js/view/Equipo_vw.js",
                    "js/view/Ki_vw.js",
                    "js/view/Magia_vw.js",
                    "js/view/Psiquica_vw.js",
                    "js/view/ArtesMarciales_vw.js",
                    "js/view/PuntosCreacion_vw.js",
                    "js/view/Raza_vw.js",
                    "js/view/Elan_vw.js",
                    "js/view/Habilidades_vw.js",
                    "js/logCambios.js",
                    "js/controller/Creacion.js",

                    "js/controller/json_parse.js",
                    "js/controller/persistencia.js",

                    "js/init.js",

                    "js/foot.js"

                ],
                // the location of the resulting JS file
                dest: 'js/<%= pkg.name %>.js'
            }
        },

        uglify: {
            options: {
                // the banner is inserted at the top of the output
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // the default task can be run just by typing "grunt" on the command line
    grunt.registerTask('default', ['concat', 'uglify']);
}


