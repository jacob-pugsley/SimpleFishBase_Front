<template>
	<div id="details">
		<!--fish contains all values-->
		<table>
			<tr>
				<!--add four columns here-->
				<td>
					<img id="fishImage" :src="'http://fishbase.us/images/species/' + fish.image">
				</td>

				<td>
					<h1>{{ fish.taxonomy }}</h1>
					<a :href="fish.url" target="_blank"><i>View on FishBase</i></a>
					<br>
					<br>
					<h2>Common name:</h2>
					<p v-if="fish.commonName == ''"><i>No common name found.</i></p>
					{{ fish.commonName }}
					<br><br>
					<div id="buttonDiv" v-for="label in columnLabels" :key="label.text">
						<sui-button type="button" v-on:click="reveal($event, label.element)">{{ label.text }}</sui-button>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<!--quick search form-->
					Quick Search<br>
					<sui-form>
						<sui-form-field>
							<input placeholder="Genus + Species" v-model="taxonomy">
						</sui-form-field>
						<sui-form-field>
							<input placeholder="Common Name" v-model="commonName">
						</sui-form-field>

						<sui-button type="button" v-on:click="quickSearch($event, taxonomy, commonName)">Search</sui-button>
					</sui-form>
				</td>

				<td id="infoTd">
					<!--detailed info-->
					<div class="infoP" id="descriptionP">
						<h2>Description</h2>
						<p v-if="this.fish.bio1 == '' && this.fish.bio2 == ''"><i>No description found.</i></p>
						{{ fish.bio1 }}<br>
						{{ fish.bio2 }}
					</div>
					<div class="infoP" id="envReqP">
						<h2>Environmental Requirements</h2>
						<sui-tab>
							<sui-tab-pane title="pH Range">
								<p v-if="this.fish.phMin == '' || this.fish.phMax == ''"><i>No pH data found.</i></p>
								<p v-if="this.fish.phMin != '' && this.fish.phMax != ''">pH: {{ parseFloat(this.fish.phMin) }} to {{ parseFloat(this.fish.phMax) }}</p>
								<scale v-if="this.fish.phMin != '' && this.fish.phMax != ''" :phmin="parseFloat(this.fish.phMin)" :phmax="parseFloat(this.fish.phMax)"></scale>
							</sui-tab-pane>
							<sui-tab-pane title="Temperature Range">
								<p v-if="this.fish.tempMin == '' || this.fish.tempMax == ''"><i>No temperature data found.</i></p>
								<p v-if="this.fish.tempMin != '' && this.fish.tempMax != ''">Temperature: {{parseInt(this.fish.tempMin)}} to {{parseInt(this.fish.tempMax)}} degrees Celcius</p>
								<tempscale v-if="this.fish.tempMin != '' && this.fish.tempMax != ''" :tempmin="this.fish.tempMin" :tempmax="this.fish.tempMax"></tempscale>
							</sui-tab-pane>
						</sui-tab>
					</div>
					<div class="infoP" id="distP">
						<h2>Distribution</h2>
						<p>Lives in water.</p>
						<p v-if="this.fish.distribution == ''"><i>No distribution found.</i></p>
						<locMap v-if="this.fish.distribution != ''" :query="this.fish.distribution.replace(' ', '+')"></locMap>
					</div>
					<div class="infoP" id="compSpec">
						<h2>Sample of Compatible Species</h2>
						<i>Note: these are suggestions for further research only. Purchase at your own risk.</i><br>
						<p v-if="compatibleSearchResults.length == 0"><i>No results.</i></p>
						<ul>
							<li v-for="result in compatibleSearchResults" 
							:key="result.taxonomy">
								<router-link :to="{name: 'details', params: { taxonomy: result.taxonomy.replace(' ', '_') }}" target='_blank'>
									{{ result.taxonomy }}
								</router-link>
							</li>
						</ul>
					</div>
					
					<div class="infoP" id="searchResultsDiv">
						<h2>Quick Search Results</h2>
						<p v-if="quickSearchResults.length == 0"><i>No results. Is your query correctly spelled?</i></p>
						<ul>
							<li is="searchResultMin" v-for="result in quickSearchResults" :key="result.taxonomy" :result="result"></li>
						</ul>
					</div>
				</td>
			</tr>
		</table>
	</div>
</template>

<script>
import scale from '@/components/scale.vue'
import locMap from '@/components/map.vue'
import tempscale from '@/components/tempscale.vue'
import searchResultMin from '@/components/searchResultMin.vue'

import axios from 'axios'


export default{
	name: 'details',
	components:{
		scale,
		locMap,
		tempscale,
		searchResultMin
	},
	props:{
		'fish': {
			type: Object,
			required: true
		}
	},
	data() {
		return{
			columnLabels: [
				{
					text: "Description",
					element: "descriptionP"
				},
				{
					text: "Environmental Requirements",
					element: "envReqP"
				},
				{
					text: "Distribution",
					element: "distP"
				},
				{
					text: "Compatible Species",
					element: "compSpec"
				},
				{
					text: "Quick Search Results",
					element: "searchResultsDiv"
				}
			],
			compatibleSearchResults: [],
			quickSearchResults: [],
			taxonomy: '',
			commonName: ''
		}
	},
	methods:{
		reveal: function(event, elementID){
			for( let i = 0; i < this.columnLabels.length; i++ ){
				if( document.getElementById(this.columnLabels[i].element).id == elementID ){
					document.getElementById(this.columnLabels[i].element).style.setProperty("visibility", "visible", "important")
				}else{
					document.getElementById(this.columnLabels[i].element).style.setProperty("visibility", "hidden")
				}
			}
		},
		compatibleSearch: function(){
			//search for compatible species
			//basically just search by temperature and ph
			let csr = this.compatibleSearchResults
			let fish = this.fish



			//allows axios to access another page on localhost
			let config = {
				headers: {'Access-Control-Allow-Origin': '*'}
			}
			
			//structured url passed to the flask server
			/*
			url = url + taxonomy + "$" + commonName + "$" + tempMin + "$" + tempMax + "$" + phMin + "$" + phMax
			*/
			let url = "http://localhost:5000/params=$$$$$"
			url = url + fish.tempMin + "$" + fish.tempMax + "$" + fish.phMin + "$" + fish.phMax

			axios.get(url, config)
			

			//after successful call
			.then( function (response) {
				for( let i = 0; i < Object.keys(response.data["results"]).length && i < 3; i++ ){
					//exclude the current species from the results
					if( response.data["results"][""+i]["taxonomy"] != fish.taxonomy ){
						csr.push(response.data["results"][""+i])
					}
				}
			})
			//after error
			.catch( function (error) {
				alert(error)
			})
		},
		quickSearch: function(event, taxonomy, commonName){
				//taxonomy, common name, temp min, temp max, ph min, ph max

				//clear previous results
				this.quickSearchResults = []
				let res = this.quickSearchResults
				let pt = []
				
				//allows axios to access another page on localhost
				let config = {
					headers: {'Access-Control-Allow-Origin': '*'}
				}
				
				//structured url passed to the flask server
				let url = "http://localhost:5000/params=$"
				/*
				url = url + taxonomy + "$" + commonName + "$" + tempMin + "$" + tempMax + "$" + phMin + "$" + phMax
				*/
				url = url + taxonomy + "$" + commonName

				axios.get(url, config)
				

				//after successful call
				.then( function (response) {
					//push all results onto the results array
					for( let i = 0; i < 3; i++ ){

						if( !pt.includes(response.data["results"][""+i]["taxonomy"]) ){
							pt.push(response.data["results"][""+i]["taxonomy"])
							res.push(response.data["results"][""+i])
						}

					}



				})
				//after error
				.catch( function (error) {
					alert(error)
				})

				this.reveal("", "searchResultsDiv")
			},
	},
	mounted(){
		this.compatibleSearch()
	}
}
	
</script>

<style>
#fishImage{
	width: 80%;

	margin-left: 10%;
}

.ui.grid{
	

	background: #f9fafb;
	border-color: rgba(34,36,38,.15);
	box-shadow: 0 2px 25px 0 rgba(34,36,38,.05) inset;
}

.infoP{
	/*all should be invisible at first*/
	visibility: hidden;

	position: absolute;
	top: 0px;
	bottom: 0px;
	

	width: 100%;
	height: 100%;
}

#infoTd{
	position: relative;
}


#buttonDiv .ui.button{
	display: flex;
	float: left !important;
	margin-top: 3px;
}

#descriptionP{
	/* this one should be initially visible */
	visibility: visible;
}

table{
	width: 100%;

	margin: auto;


	background: #f9fafb;
    border-color: rgba(34,36,38,.15);
    box-shadow: 0 2px 25px 0 rgba(34,36,38,.05) inset;



}

td{
	width: 50%;
}

.ui.attached.tabular.menu{
	background: #f9fafb;
}
</style>