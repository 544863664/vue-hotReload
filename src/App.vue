<template>
	<div id="app">
		<CounterControls />
	</div>
</template>

<script>
	import CounterControls from '@/components/CounterControls.vue'

	export default {
		name: 'App',
		components: {
			CounterControls
		}
	}
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
