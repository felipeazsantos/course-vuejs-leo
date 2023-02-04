const v = new Vue({
    el:"#desafio",
    data: {
        nome: "Felipe",
        idade: 28,
        guitarra: "guitarra_fender.jpg"
    },
    methods: {
        numeroRandomico() {
            return Math.random()
        }
    }
})