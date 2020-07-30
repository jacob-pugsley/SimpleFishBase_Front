<template>
	<div id="scaleDiv">
		<img id="scaleimg" src="@/assets/tempscale.png"><br>
		<img class="marker" src="@/assets/marker.png" :style="'left: '+(parseInt(computePos(tempmin)))+'px;'">
		<img class="marker" src="@/assets/marker.png" :style="'left: '+(parseInt(computePos(tempmax)))+'px;'">
	</div>
</template>

<style>
.marker{
	top: 35px;
    position: absolute;

	height: 150px !important;
	width: 28px !important;

	margin: 0px;
}

#scaleimg{
	border: 2px solid black !important;
	height: 150px !important;
	width: 300px !important;

	margin-left: 0px !important;
}
</style>

<script>
export default{
	name: 'tempscale',
	props: {
		tempmin: {
			type: Number,
			required: true
		},
		tempmax:{
			type: Number,
			required: true
		}
	},
	methods:{
		computePos: function(temp){
			if( temp <= 10 ){
				return 0
			}else if( temp < 15 ){
				return 30
			}else if( temp == 15){
				return 60
			}else if( temp < 20 ){
				return 90
			}else if( temp == 20 ){
				return 120
			}else if( temp < 25 ){
				return 150
			}else if( temp == 25 ){
				return 180
			}else if( temp < 30 ){
				return 210
			}else if( temp == 30 ){
				return 240
			}else if( temp < 35 ){
				return 270
			}else if( temp >= 35 ){
				return 300
			}else{
				alert('invalid temp ' + temp)
				return 0
			}
		}
	}
}
</script>

