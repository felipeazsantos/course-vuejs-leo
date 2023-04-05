<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		<p>{{ nome | trocar }}</p>
		<hr>
		
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<p>{{ frase | contadorDePalavra }}</p>
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
		<hr>
		<p>{{ nomeC }}</p>
		<p>{{ fraseC }}</p>
		

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
		<hr>

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
	</div>
</template>

<script>
import filterMixin from './filterMixin'


export default {
	mixins: [filterMixin],
	filters: {
		trocar(valor) {
			return valor.replaceAll(' ', ',')
		}
	},
	data() {
		return {
			nome: 'Pedro dos Santos Silva',
			frase: 'Pedro é Legal'
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
