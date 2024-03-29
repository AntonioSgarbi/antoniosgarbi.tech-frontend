import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        footerColor: 'green',
        isDark: true,
        colorPrimary: '#114146',
        colorSecondary: '#0e2c2f',
        projects: [
            {
                title: "Fish Stock",
                loading: false,
                hasFront: true,
                src: 'https://cdn.pixabay.com/photo/2020/05/02/12/35/fish-shop-5121241_960_720.png',
                alt: 'Imagem de Borja Blanco Cinza em Pixabay, arte mostra homem de avental sem rosto atrás' +
                    ' de balcão cheio de frutos do mar, sobre sua cabeça um letreiro azul escrito Fish Shop',
                subtitle: 'Gerenciamento interno de uma peixaria',
                ratio: 4.75,
                github: 'https://github.com/AntonioSgarbi/GestorPeixaria',
                link: 'https://antoniosgarbi.github.io/GestorPeixaria/',
                class: {
                    footerColor: "#323C93",
                    footerText: "margin"
                },
                swagger: 'https://gestor-peixaria.herokuapp.com/swagger-ui/index.html#/',
                docker: 'https://hub.docker.com/r /antoniosk/gestor_peixaria',
                technologies: [0, 1, 2, 3, 4, 5, 6]
            },
            {
                title: 'Clínica Médica',
                loading: false,
                hasFront: true,
                src: 'https://c.pxhere.com/images/6c/82/2197ff2bf50e38f3bf69deb28097-1589483.jpg!d',
                alt: 'Desenho retrata médico de jaleco branco sorrindo sentado de frente para um notebook',
                subtitle: 'Agendador de consultas simples',
                ratio: 4.75,
                github: 'https://github.com/AntonioSgarbi/bonzina-api',
                link: 'https://antoniosgarbi.github.io/bonzina-api/',
                class: {
                    footerColor: "#4B3424",
                    footerText: "margin"
                },
                technologies: [0, 1, 2, 7]
            },
            {
                title: 'Micro Bank',
                loading: false,
                hasFront: false,
                src: 'data:image/png;base64,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',
                alt: 'desenho de um caixa eletronico com tela verde e borda preta',
                subtitle: 'Simulador de operações bancárias',
                ratio: 4.75,
                github: 'https://github.com/AntonioSgarbi/lab-banco-digital-oo',
                class: {
                    footerColor: "#800000",
                    footerText: "margin"
                },
                swagger: 'https://desafio-banco.herokuapp.com/swagger-ui/index.html#/',
                docker: 'https://hub.docker.com/r/antoniosk/desafio-banco',
                technologies: [0, 1, 2, 3, 4, 6]
            }
        ],
        technologies: [
            {
                logo: "https://i3.wp.com/www.bacula.lat/wp-content/uploads/2019/05/postgresql-logo.png",
                alt: "Logo do banco de dados postgresql, é uma cabeça de elefante azul vista da frente",
            },
            {
                logo: "https://miro.medium.com/max/550/0*5FEJ7emIEAxZRCQF",
                alt: "Logo do framework Spring, é hexágono da cor verde com um simbolo de ligado/desligado vazado no meio",
            },
            {
                logo: "https://logospng.org/download/java/logo-java-512.png",
                alt: "logo da linguagem java, com uma xícara azul soltando fumaça laranja e a palavra java abaixo da xícara tendo a mesma cor  da fumaça",
            },
            {
                logo: "https://avatars.githubusercontent.com/u/874086?s=280&v=4",
                alt: "Logo do framework Junit, letra J em maiusculo na cor verde seguida da palavra unit em vermelho"
            },
            {
                logo: "https://github.com/AntonioSgarbi/antoniosgarbi.tech-frontend/blob/main/src/assets/mockito-logo.png?raw=true",
                alt: "Logo do framework Mockito, é um copo tranparente com folhas de hortelã e  palavra mockito em verde e preto"
            },
            {
                logo: "https://seeklogo.com/images/A/angular-icon-logo-9946B9795D-seeklogo.com.png",
                alt: "Logo do framework Angular, é uma figura geométrica de 6 lados, com bordas cinzas, interior vermelho com uma letra A em maiusculo e em branco no centro",
            },
            {
                logo: 'https://img.mandic.com.br/blog/2015/01/homepage-docker-logo.png',
                alt: 'Logo da ferramenta Docker, é um desenho de baleia azul submersa até a metade carregando conteiners empilhados'
            },
            {
                logo: 'https://inssio.com/wp-content/uploads/2021/03/vuejs.png',
                alt: 'Logo do framework Vue, uma letra V em maiusculo na cor verde'
            }
        ]
    },
    getters: {
        projetoIsLoading(state, index) {
            return state.projects[index].loading;
        }

    },
    mutations: {
        setDark(state) {
            state.isDark = !state.isDark;
            state.colorPrimary = state.isDark ? '#114146' : '#68d9c2';
            state.colorSecondary = state.isDark ? '#0e2c2f' : '#68d9c2';
        },

        setFooterColor(state, color) {
            state.footerColor = color;
        },

        changeProjectIsLoading(state, index) {
            console.log(state.projects[index].loading)
            state.projects[index].loading = !state.projects[index].loading;
        }
    },
    actions: {},
    modules: {}
})


