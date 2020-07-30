<template>
	<div id="app">
		
			<div id="detDiv" is="detailsComponent" v-for="result in results" :key="result.taxonomy" :fish="result"></div> 
		
	</div>
</template>

<script>
import axios from 'axios'
import detailsComponent from '@/views/details.vue'

export default {
	name: 'details',
	components: {
		detailsComponent
	},
	data(){
		return{
			taxonomy: '',
			results: []
		}
	},
	watch: {
		'$route.params.taxonomy': function(){
			//alert(this.$route.params.taxonomy)
			this.search(this.$route.params.taxonomy)
		}
	},
	methods:{
		search: function(taxon){
			this.results = []
			let res = this.results
			//let pt = []
			let config = {
				headers: {'Access-Control-Allow-Origin': '*'}
			}
			let url = "http://localhost:5000/params="
			url = url + "$" + taxon + "$"	
			//alert(url)

			axios.get(url, config)
			//after successful call
			.then( function (response) {
				res.push(response.data["results"][0])
			})
			//after error
			.catch( function (error) {
				alert('details search: ' + error)
			})
		}
	}
}
</script>

<style>
#detDiv{
	width: 70%;
	margin: auto;
	margin-top: 5%;

}
</style>