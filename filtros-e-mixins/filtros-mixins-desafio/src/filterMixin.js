export default {
    computed: {
		nomeC() {
			return this.nome.replaceAll(' ', ',')
		},
		fraseC() {
			const arr = this.frase.split(' ')
			let valorFinal = ''
			for (let i = 0; i < arr.length; i++) {
				const tamanhoDaPalavra = arr[i].split('').length
				valorFinal += `${arr[i]} (${tamanhoDaPalavra}) `
			}
			valorFinal = valorFinal.trim()
			return valorFinal
		}
	}
}