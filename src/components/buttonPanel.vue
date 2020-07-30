<template>
	<div id="buttonPanel">
		<div v-for="item in labels" :key="item">
			<sui-button v-on:click="$emit('button-clicked', item)">
				{{ item.text }}
			</sui-button>
		</div>
	</div>
</template>

<script>
export default{
	name: 'buttonPanel',
	data(){
		return{
			labels: [ //button labels
				{text: 'pH'},
				{text: 'description'},
				{text: 'taxonomy'},
				{text: 'common name'}
			]
		}
	}
}
</script>

<style>
</style>