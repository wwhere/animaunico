var origen;

origen = new Origen(
    ORIGEN_LANNET,
    function() {
        var azar = d100();

        if (azar <= 99) {
            return ETNIA_RYUAN     ;
        } else  {
            var azar2 = d(8);

            switch (azar2) {
                case 1:
                    return ETNIA_TAYAHAR;
                case 2:
                    return ETNIA_KWA;
                case 3:
                    return ETNIA_VILDIAN ;
                case 4:
                    return ETNIA_DAEVAR;
                case 5:
                    return ETNIA_AION ;
                case 6:
                    return ETNIA_ZINNER ;
                case 7:
                    return ETNIA_ASHER ;
                case 8:
                default:
                    return ETNIA_NORNE;
            }
        }
    },
    [IDIOMA_YAMATO],
    ['Akahito','Ashihei','Danjuro','Goro','Hajime','Heiji','Hidetora','Ichiro','Kazuhiro','Ken','Kumanosuke','Minoru','Ryoma','Senzo','Sosuke','Takeru','Yuichi'],
    ['Ayame','Eriko','Hanae','Hisako','Inoue','Kazumi','Madoka','Mizuki','Narumi','Rei','Sayuri','Tamaki','Tsukiyama','Yayoi','Yoriko','Yukiko','Yuya'],
    ['Adachi','Asanuma','Chikanatsu','Goto','Harada','Ichigawa','Inukai','Kanada','Kawamura','Komine','Kunikida','Moriguchi','Nagasawa','Nakamoto','Onoe','Takenouchi','Yoemon'],
    ['Hanamura','Setsu','Puerta de Occidente','Tsukikage','Sensou-jo','Aimi','Kagami Jiin','Koga','Kuromitsu-Jo','Kurai Hanko','Urashiro'],
    0,
    [],
    [
        {
            nombre: CLASE_BAJA,
            rango: 60,
            dinero: new Dinero(0,0,5),
            bonos: [
                {
                    habilidad: HB_ATLETISMO,
                    bono: 30
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
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_ANIMALES,
                    bono: 10
                },
                {
                    habilidad: HB_HERBOLARIA,
                    bono: 20
                },
                {
                    habilidad: HB_OCULTISMO,
                    especializacion: UI_ESP_RELIGION,
                    bono: 20
                },
                {
                    habilidad: HB_PROEZAS_FUERZA,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_BURGUES,
            rango: 80,
            dinero: new Dinero(15,0,0),
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
                    habilidad: HB_ESTILO,
                    bono: 40
                },
                {
                    habilidad: HB_PERSUASION,
                    bono: 20
                },
                {
                    habilidad: HB_HISTORIA,
                    especializacion: UI_ESP_LOCAL,
                    bono: 20
                },
                {
                    habilidad: HB_ARTE,
                    bono: 20
                },
                {
                    habilidad: HB_MUSICA,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_SAMURAI_CORTESANO,
            rango: 90,
            dinero: new Dinero(40,0,0),
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
                    habilidad: HB_ESTILO,
                    bono: 40
                },
                {
                    habilidad: HB_PERSUASION,
                    bono: 20
                },
                {
                    habilidad: HB_HISTORIA,
                    especializacion: UI_ESP_LOCAL,
                    bono: 20
                },
                {
                    habilidad: HB_ARTE,
                    bono: 20
                },
                {
                    habilidad: HB_MUSICA,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_SAMURAI_GUERRERO,
            rango: 100,
            dinero: new Dinero(40,0,0),
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
                    habilidad: HB_NADAR,
                    bono: 20
                },
                {
                    habilidad: HB_ESTILO,
                    bono: 20
                },
                {
                    habilidad: HB_INTIMIDAR,
                    bono: 20
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_HISTORIA,
                    especializacion: UI_ESP_LOCAL,
                    bono: 20
                },
                {
                    habilidad: HB_FRIALDAD,
                    bono: 20
                }
            ]
        }
    ]
);

allOrigenes[origen.nombre] = origen;
origenes_set.push(origen);

origen = new Origen(
    ORIGEN_SHIVAT,
    function() {
        var azar = d100();

        if (azar <= 98) {
            return ETNIA_RYUAN ;
        } else if (azar <= 99) {
            return ETNIA_ASHER;
        } else  {
            var azar2 = d(7);

            switch (azar2) {
                case 1:
                    return ETNIA_KWA;
                case 2:
                    return ETNIA_AION;
                case 3:
                    return ETNIA_ZINNER ;
                case 4:
                    return ETNIA_DAEVAR ;
                case 5:
                    return ETNIA_VILDIAN;
                case 6:
                    return ETNIA_TAYAHAR;
                case 7:
                default:
                    return ETNIA_NORNE;
            }
        }
    },
    [IDIOMA_YAMATO_SHUN],
    ['Bai-luo','Bi-jun','Chang-yong','Dan-zu','Decheng','Fai','Gong-sun','Hi-yuan','Hwen-thiang','Jiang-gang','Kang','Kolin-sen','Lan-fang','Ming-jiang','Qian-fu','Wei-hong','Xian-yao'],
    ['An','Bao-yu','Chin-chiao','Chun-hwa','Er-hong','Fei','Jing-mei','Kit ling','Li-jun','Mei-lin','Ming-zing','Rou-wan','Szu','Tsao-lin','Xiu-lan','Yi','Yue','Zhen-li'],
    ['Bai','Cheung','Chou','Dai','Eng','Fong','Hong','Jianbua','Jung','Kin','Lai','Lang','Li','Liao','Ning','Pei','Qian','Thien','Zhao','Zou'],
    ['Siyu','Qianfeng','Kianlung','Subutai','Baoling','Xaohuan','Huan Zhou','Maisen','Templo de Ning Shi','Peng Wang','Yokai','Shan Lu','Hung Whan','Qianfu','Nanmiaozui','Sihsien'],
    0,
    [],
    [
        {
            nombre: CLASE_BAJA,
            rango: 30,
            dinero: new Dinero(0,0,3),
            bonos: [
                {
                    habilidad: HB_ACROBACIAS,
                    bono: 20
                },
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
                    habilidad: HB_ESTILO,
                    bono: 20
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_ANIMALES,
                    bono: 20
                },
                {
                    habilidad: HB_HERBOLARIA,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_MEDIA,
            rango: 55,
            dinero: new Dinero(0,70,0),
            bonos: [
                {
                    habilidad: HB_ACROBACIAS,
                    bono: 20
                },
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
                    habilidad: HB_ESTILO,
                    bono: 20
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_ANIMALES,
                    bono: 20
                },
                {
                    habilidad: HB_HERBOLARIA,
                    bono: 20
                }
            ]
        },
        {
            nombre: CLASE_BURGUES,
            rango: 75,
            dinero: new Dinero(15,0,0),
            bonos: [
                {
                    habilidad: HB_MONTAR,
                    bono: 20
                },
                {
                    habilidad: HB_ESTILO,
                    bono: 30
                },
                {
                    habilidad: HB_PERSUASION,
                    bono: 40
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_HISTORIA,
                    bono: 20
                },
                {
                    habilidad: HB_OCULTISMO,
                    bono: 10
                },
                {
                    habilidad: HB_BAILE,
                    bono: 10
                },
                {
                    habilidad: ELEGIR,
                    opciones: [HB_ARTE,HB_MUSICA],
                    bono: 10
                }
            ]
        },
        {
            nombre: CLASE_BUROCRATA,
            rango: 90,
            dinero: new Dinero(30,0,0),
            bonos: [
                {
                    habilidad: HB_MONTAR,
                    bono: 20
                },
                {
                    habilidad: HB_ESTILO,
                    bono: 30
                },
                {
                    habilidad: HB_PERSUASION,
                    bono: 40
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_HISTORIA,
                    bono: 20
                },
                {
                    habilidad: HB_OCULTISMO,
                    bono: 10
                },
                {
                    habilidad: HB_BAILE,
                    bono: 10
                },
                {
                    habilidad: ELEGIR,
                    opciones: [HB_ARTE,HB_MUSICA],
                    bono: 10
                }
            ]
        },
        {
            nombre: CLASE_NOBLEZA,
            rango: 100,
            dinero: new Dinero(60,0,0),
            bonos: [
                {
                    habilidad: HB_MONTAR,
                    bono: 20
                },
                {
                    habilidad: HB_ESTILO,
                    bono: 30
                },
                {
                    habilidad: HB_PERSUASION,
                    bono: 40
                },
                {
                    habilidad: HB_ADVERTIR,
                    bono: 20
                },
                {
                    habilidad: HB_HISTORIA,
                    bono: 20
                },
                {
                    habilidad: HB_OCULTISMO,
                    bono: 10
                },
                {
                    habilidad: HB_BAILE,
                    bono: 10
                },
                {
                    habilidad: ELEGIR,
                    opciones: [HB_ARTE,HB_MUSICA],
                    bono: 10
                }
            ]
        }
    ]
);

allOrigenes[origen.nombre] = origen;
origenes_set.push(origen);
