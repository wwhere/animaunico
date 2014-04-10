var origen;

origen = new Origen(
    ORIGEN_NANWE,
    function() {
        var azar = d100();

        if (azar <= 92) {
            return ETNIA_KWA    ;
        } else if (azar <= 99) {
            return ETNIA_ASHER ;
        } else  {
            var azar2 = d(7);

            switch (azar2) {
                case 1:
                    return ETNIA_TAYAHAR;
                case 2:
                    return ETNIA_RYUAN;
                case 3:
                    return ETNIA_VILDIAN ;
                case 4:
                    return ETNIA_DAEVAR;
                case 5:
                    return ETNIA_AION ;
                case 6:
                    return ETNIA_ZINNER ;
                case 7:
                default:
                    return ETNIA_NORNE;
            }
        }
    },
    [IDIOMA_KANNAWA, IDIOMA_LATIN],
    ['Ahmed','Ashon','Chane','Chui','Enzi','Haji','Hasani','Idi','Issa','Jaali','Jahi','Kanu','Kitwana','Rahidi','Rashid','Thimba'],
    ['Adia','Ashanti','Chinika','Dashiki','Eshe','Hasina','Kamaria','Kapuki','Kesi','Neema','Nuru','Paka','Ramla','Raziya','Zahina','Zanta'],
    ['Babu','Bayi','Bsiligitwa','Dato','Gulagami','Gurnah','Jumbe','Karume','Kawawe','Nyererer','Salim','Semid','Sokoine','Suja','Wakil','Wanyka','Yomba'],
    ['Mabanu','Almasi','Magburaka','Zarb Kiná','Sirakoro','Tribu Ngedere','Tribu Mafumbo','Tribu Kubwa Gku','Tribu Kimburu','Tribu Rakushian'],
    0,
    [],
    [
        {
            nombre: CLASE_INDIGENA_POBRE,
            rango: 20,
            dinero: new Dinero(0,0,0),
            bonos: [
                {
                    habilidad: HB_ATLETISMO,
                    bono: 20
                },
                {
                    habilidad: HB_TREPAR,
                    bono: 20
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_RASTREAR,
                    bono: 20
                },
                {
                    habilidad: HB_ANIMALES,
                    bono: 20
                },
                {
                    habilidad: HB_HERBOLARIA,
                    bono: 20
                },
                {
                    habilidad: HB_OCULTARSE,
                    bono: 20
                },
                {
                    habilidad: HB_SIGILO,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_INDIGENA_DE_CLASE_MEDIA,
            rango: 60,
            dinero: new Dinero(0,10,0),
            bonos: [
                {
                    habilidad: HB_ATLETISMO,
                    bono: 20
                },
                {
                    habilidad: HB_TREPAR,
                    bono: 20
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_RASTREAR,
                    bono: 20
                },
                {
                    habilidad: HB_ANIMALES,
                    bono: 20
                },
                {
                    habilidad: HB_HERBOLARIA,
                    bono: 20
                },
                {
                    habilidad: HB_OCULTARSE,
                    bono: 20
                },
                {
                    habilidad: HB_SIGILO,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_CIUDADANO_DE_CLASE_MEDIA,
            rango: 85,
            dinero: new Dinero(0,70,0),
            bonos: [
                {
                    habilidad: HB_NADAR,
                    bono: 20
                },
                {
                    habilidad: HB_TREPAR,
                    bono: 10
                },
                {
                    habilidad: HB_PERSUASION,
                    bono: 20
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 30
                },
                {
                    habilidad: HB_RASTREAR,
                    bono: 30
                },
                {
                    habilidad: HB_ANIMALES,
                    bono: 30
                },
                {
                    habilidad: HB_OCULTARSE,
                    bono: 10
                },
                {
                    habilidad: HB_SIGILO,
                    bono: 10
                }
            ]
        },
        {
            nombre: CLASE_BURGUES,
            rango: 100,
            dinero: new Dinero(40,0,0),
            bonos: [
                {
                    habilidad: HB_NADAR,
                    bono: 20
                },
                {
                    habilidad: HB_TREPAR,
                    bono: 10
                },
                {
                    habilidad: HB_PERSUASION,
                    bono: 20
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 30
                },
                {
                    habilidad: HB_RASTREAR,
                    bono: 30
                },
                {
                    habilidad: HB_ANIMALES,
                    bono: 30
                },
                {
                    habilidad: HB_OCULTARSE,
                    bono: 10
                },
                {
                    habilidad: HB_SIGILO,
                    bono: 10
                }
            ]
        }
    ]
);

allOrigenes[origen.nombre] = origen;
origenes_set.push(origen);

origen = new Origen(
    ORIGEN_LUCRECIO,
    function() {
        var azar = d100();

        if (azar <= 39) {
            return ETNIA_AION;
        } else if (azar <= 77) {
            return ETNIA_ASHER;
        } else if (azar <= 88) {
            return ETNIA_VILDIAN;
        } else if (azar <= 99) {
            return ETNIA_TAYAHAR;
        } else  {
            var azar2 = d(5);

            switch (azar2) {
                case 1:
                    return ETNIA_KWA;
                case 2:
                    return ETNIA_RYUAN;
                case 3:
                    return ETNIA_ZINNER ;
                case 4:
                    return ETNIA_DAEVAR ;
                case 5:
                default:
                    return ETNIA_NORNE;
            }
        }
    },
    [IDIOMA_LATIN],
    ['Acke','Fredrick','Gerhard','Greger','Gustaf','Halsten','Jerjer','Klemens','Niklas','Patrik','Salomon','Sigfrid','Staffan','Tomas','Truls','Tyko'],
    ['Agda','Annika','Britt','Britta','Charlotta','Emelie','Frida','Greta','Ingegärd','Lovisa','Marna','Mia','Pernilla','Sassa','Susasnn','Tova','Viveka'],
    ['Andersson','Bergqvist','Bergman','Dahl','Dhalberg','Hedlund','Holmberg','Ivarsson','Johansson','Karlsonn','Lindqvist','Lundberg','Nordin','Nyberg','Sandberg','Ström'],
    ['Keltia','La Gran Universidad','Krause','Puerto Misrech','Holzburg','Malakai','Hirsch','Du´Lucart','Lenard','Korin','Creixburg'],
    1,
    [{
        nombre: CLASE_ALTA_BURGUESIA,
        dinero: new Dinero(700,0,0),
        bonos: [
            {
                habilidad: HB_ATLETISMO,
                bono: 20
            },
            {
                habilidad: HB_MONTAR,
                bono: 20
            },
            {
                habilidad: HB_PERSUASION,
                bono: 20
            },
            {
                habilidad: HB_ADVERTIR,
                bono: 20
            },
            {
                habilidad: HB_CIENCIA,
                bono: 20
            },
            {
                habilidad: HB_HISTORIA,
                bono: 20
            },
            {
                habilidad: HB_MEMORIZAR,
                bono: 20
            },
            {
                habilidad: ELEGIR,
                opciones: [HB_ARTE,HB_MUSICA],
                bono: 20
            }
        ]
    }],
    [
        {
            nombre: CLASE_BAJA,
            rango: 15,
            dinero: new Dinero(0,0,5),
            bonos: [
                {
                    habilidad: HB_ATLETISMO,
                    bono: 20
                },
                {
                    habilidad: HB_MONTAR,
                    bono: 20
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_CIENCIA,
                    bono: 20
                },
                {
                    habilidad: HB_HISTORIA,
                    bono: 20
                },
                {
                    habilidad: HB_MEMORIZAR,
                    bono: 20
                },
                {
                    habilidad: HB_HERBOLARIA,
                    bono: 20
                },
                {
                    habilidad: HB_ANIMALES,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_MEDIA,
            rango: 80,
            dinero: new Dinero(1,0,0),
            bonos: [
                {
                    habilidad: HB_ATLETISMO,
                    bono: 20
                },
                {
                    habilidad: HB_MONTAR,
                    bono: 20
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_CIENCIA,
                    bono: 20
                },
                {
                    habilidad: HB_HISTORIA,
                    bono: 20
                },
                {
                    habilidad: HB_MEMORIZAR,
                    bono: 20
                },
                {
                    habilidad: HB_HERBOLARIA,
                    bono: 20
                },
                {
                    habilidad: HB_ANIMALES,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_ALTA,
            rango: 100,
            dinero: new Dinero(15,0,0),
            bonos: [
                {
                    habilidad: HB_ATLETISMO,
                    bono: 20
                },
                {
                    habilidad: HB_MONTAR,
                    bono: 20
                },
                {
                    habilidad: HB_PERSUASION,
                    bono: 20
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_CIENCIA,
                    bono: 20
                },
                {
                    habilidad: HB_HISTORIA,
                    bono: 20
                },
                {
                    habilidad: HB_MEMORIZAR,
                    bono: 20
                },
                {
                    habilidad: ELEGIR,
                    opciones: [HB_ARTE,HB_MUSICA],
                    bono: 20
                }
            ]
        }
    ]
);

allOrigenes[origen.nombre] = origen;
origenes_set.push(origen);

origen = new Origen(
    ORIGEN_KASHMIR,
    function() {
        var azar = d100();

        if (azar <= 93) {
            return ETNIA_KWA ;
        } else if (azar <= 97) {
            return ETNIA_ASHER;
        } else  {
            return ETNIA_DAEVAR;
        }
    },
    [IDIOMA_SHEEHAM, IDIOMA_LATIN],
    ['Ajuma','Bokhani','Chalis','Chuma','Jadili','Kalume','Kinara','Kipchumba','Kokaji','Mwai','Nelion','Oginga','Osano','Salif','Wambua','Waweru'],
    ['Chanya','Eddah','Fodeba','Jebet','Kaaria','Kalititi','Loiyan','Mansa','Meja','Modiba','Muthoni','Nigesa','Njoki','Soila','Sundiata','Tekla'],
    ['Akii-Bua','Baiya','Gupta','Karai','Ketter','Kosgei','Maina','Muhavi','Ngotho','Nyugi','Odoyo','Rono','Shah','Sheikh','Theuri','Wekessa','Zaman'],
    ['Khon Thami','Goredema','Mwanatabu','Rodenia','Kwa Lubilo','Wuppertal'],
    0,
    [],
    [
        {
            nombre: CLASE_HABITANTE_DE_LA_SABANA_POBRE,
            rango: 40,
            dinero: new Dinero(0,0,2),
            bonos: [
                {
                    habilidad: HB_ATLETISMO,
                    bono: 40
                },
                {
                    habilidad: HB_NADAR,
                    bono: 10
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_RASTREAR,
                    bono: 30
                },
                {
                    habilidad: HB_ANIMALES,
                    bono: 20
                },
                {
                    habilidad: HB_HERBOLARIA,
                    bono: 10
                },
                {
                    habilidad: HB_OCULTARSE,
                    bono: 10
                },
                {
                    habilidad: HB_SIGILO,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_HABITANTE_DE_LA_SABANA_MEDIO,
            rango: 90,
            dinero: new Dinero(0,15,0),
            bonos: [
                {
                    habilidad: HB_ATLETISMO,
                    bono: 40
                },
                {
                    habilidad: HB_NADAR,
                    bono: 10
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_RASTREAR,
                    bono: 30
                },
                {
                    habilidad: HB_ANIMALES,
                    bono: 20
                },
                {
                    habilidad: HB_HERBOLARIA,
                    bono: 10
                },
                {
                    habilidad: HB_OCULTARSE,
                    bono: 10
                },
                {
                    habilidad: HB_SIGILO,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_HABITANTE_DE_LA_SABANA_RICO,
            rango: 100,
            dinero: new Dinero(10,0,0),
            bonos: [
                {
                    habilidad: HB_ATLETISMO,
                    bono: 40
                },
                {
                    habilidad: HB_NADAR,
                    bono: 10
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_RASTREAR,
                    bono: 30
                },
                {
                    habilidad: HB_ANIMALES,
                    bono: 20
                },
                {
                    habilidad: HB_HERBOLARIA,
                    bono: 10
                },
                {
                    habilidad: HB_OCULTARSE,
                    bono: 10
                },
                {
                    habilidad: HB_SIGILO,
                    bono: 20
                }
            ]
        }
    ]
);

allOrigenes[origen.nombre] = origen;
origenes_set.push(origen);


origen = new Origen(
    ORIGEN_BAHO,
    function() {
        var azar = d100();

        if (azar <= 95) {
            return ETNIA_TAYAHAR;
        } else if (azar <= 99) {
            return ETNIA_KWA ;
        } else  {
            var azar2 = d(6);

            switch (azar2) {
                case 1:
                    return ETNIA_AION;
                case 2:
                    return ETNIA_RYUAN;
                case 3:
                    return ETNIA_ZINNER ;
                case 4:
                    return ETNIA_DAEVAR ;
                case 5:
                    return ETNIA_ASHER ;
                case 6:
                default:
                    return ETNIA_NORNE;
            }
        }
    },
    [IDIOMA_KOLA, IDIOMA_IRULA, IDIOMA_LATIN],
    ['Abhidipa','Ahannatha','Ahuka','Angosin','Bhavesh','Bhim','Bhumisvara','Citaka','Dharmistha','Gyaneshwar','Jai','Jenya','Krsihan','Raja','Shyamal','Vasantha'],
    ['Abha','Ahi','Asmaki','Bharani','Darpanika','Gamati','Gesna','Hemaksi','Ipsa','Jabala','Kailash','Karsna','Makara','Prema','Shanta','Sumantra','Urmila','Zubeida'],
    ['Ankola','Chandak','Chapal','Dwijen','Gajraj','Gorantla','Kalpak','Khanderia','Lokesh','Mandhatri','Muddiah','Namasri','Priyanka','Sangawar','Sethi','Sreenivasa','Umakanta','Yelsangikar'],
    ['Sherena','Thirghú','Ghaggar','Vishe','Tían','Magdala','Parsa'],
    0,
    [],
    [
        {
            nombre: CLASE_SABIO_POBRE,
            rango: 15,
            dinero: new Dinero(0,0,3),
            bonos: [
                {
                    habilidad: HB_NADAR,
                    bono: 20
                },
                {
                    habilidad: HB_PERSUASION,
                    bono: 20
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_ANIMALES,
                    bono: 10
                },
                {
                    habilidad: HB_CIENCIA,
                    bono: 30
                },
                {
                    habilidad: HB_HISTORIA,
                    bono: 10
                },
                {
                    habilidad: HB_MEMORIZAR,
                    bono: 20
                },
                {
                    habilidad: HB_ARTE,
                    bono: 30
                }
            ]
        },
        {
            nombre: CLASE_GUERRERO_POBRE,
            rango: 30,
            dinero: new Dinero(0,0,3),
            bonos: [
                {
                    habilidad: HB_ATLETISMO,
                    bono: 20
                },
                {
                    habilidad: HB_NADAR,
                    bono: 20
                },
                {
                    habilidad: HB_TREPAR,
                    bono: 20
                },
                {
                    habilidad: HB_INTIMIDAR,
                    bono: 30
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 10
                },
                {
                    habilidad: HB_FRIALDAD,
                    bono: 20
                },
                {
                    habilidad: HB_PROEZAS_FUERZA,
                    bono: 20
                },
                {
                    habilidad: HB_RESISTENCIA_DOLOR,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_SABIO_MEDIO,
            rango: 55,
            dinero: new Dinero(0,20,0),
            bonos: [
                {
                    habilidad: HB_NADAR,
                    bono: 20
                },
                {
                    habilidad: HB_PERSUASION,
                    bono: 20
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_ANIMALES,
                    bono: 10
                },
                {
                    habilidad: HB_CIENCIA,
                    bono: 30
                },
                {
                    habilidad: HB_HISTORIA,
                    bono: 10
                },
                {
                    habilidad: HB_MEMORIZAR,
                    bono: 20
                },
                {
                    habilidad: HB_ARTE,
                    bono: 30
                }
            ]
        },
        {
            nombre: CLASE_GUERRERO_MEDIO,
            rango: 80,
            dinero: new Dinero(0,20,0),
            bonos: [
                {
                    habilidad: HB_ATLETISMO,
                    bono: 20
                },
                {
                    habilidad: HB_NADAR,
                    bono: 20
                },
                {
                    habilidad: HB_TREPAR,
                    bono: 20
                },
                {
                    habilidad: HB_INTIMIDAR,
                    bono: 30
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 10
                },
                {
                    habilidad: HB_FRIALDAD,
                    bono: 20
                },
                {
                    habilidad: HB_PROEZAS_FUERZA,
                    bono: 20
                },
                {
                    habilidad: HB_RESISTENCIA_DOLOR,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_SABIO_RICO,
            rango: 90,
            dinero: new Dinero(20,0,0),
            bonos: [
                {
                    habilidad: HB_NADAR,
                    bono: 20
                },
                {
                    habilidad: HB_PERSUASION,
                    bono: 20
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_ANIMALES,
                    bono: 10
                },
                {
                    habilidad: HB_CIENCIA,
                    bono: 30
                },
                {
                    habilidad: HB_HISTORIA,
                    bono: 10
                },
                {
                    habilidad: HB_MEMORIZAR,
                    bono: 20
                },
                {
                    habilidad: HB_ARTE,
                    bono: 30
                }
            ]
        },
        {
            nombre: CLASE_GUERRERO_RICO,
            rango: 100,
            dinero: new Dinero(20,0,0),
            bonos: [
                {
                    habilidad: HB_ATLETISMO,
                    bono: 20
                },
                {
                    habilidad: HB_NADAR,
                    bono: 20
                },
                {
                    habilidad: HB_TREPAR,
                    bono: 20
                },
                {
                    habilidad: HB_INTIMIDAR,
                    bono: 30
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 10
                },
                {
                    habilidad: HB_FRIALDAD,
                    bono: 20
                },
                {
                    habilidad: HB_PROEZAS_FUERZA,
                    bono: 20
                },
                {
                    habilidad: HB_RESISTENCIA_DOLOR,
                    bono: 20
                }
            ]
        }
    ]
);

allOrigenes[origen.nombre] = origen;
origenes_set.push(origen);
