<template>
	<div id="scaleDiv">
		<img id="scaleimg" src="@/assets/scale.png" style="max-width: 700px !important;"><br>
		<img class="marker" src="@/assets/marker.png" :style="'left: '+(parseInt(computePos(phmin))+7)+'px;'">
		<img class="marker" src="@/assets/marker.png" :style="'left: '+(parseInt(computePos(phmax))+14)+'px;'">
	</div>
</template>

<style>

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

	max-width: 300px;

	margin-left: 0px !important;
}

img{
	max-width: 700px;
}
</style>

<script>
export default{
	name: 'scale',
	props: {
		phmin: {
			type: Number,
			required: true
		},
		phmax:{
			type: Number,
			required: true
		}
	},
	methods:{
		computePos: function(ph){
			if (ph == 4){
				return 0
			}else if (ph < 4.5){
				return 14
			}else if (ph == 4.5){
				return 28
			}else if (ph < 5.0){
				return 42
			}else if (ph == 5){
				return 56
			}else if (ph < 5.5){
				return 70
			}else if (ph == 5.5){
				return 84
			}else if (ph < 6){
				return 98
			}else if (ph == 6){
				return 112
			}else if (ph < 6.5){
				return 126
			}else if (ph == 6.5){
				return 140
			}else if (ph < 7){
				return 154
			}else if (ph == 7){
				return 168
			}else if (ph < 7.5){
				return 182
			}else if (ph == 7.5){
				return 196
			}else if (ph < 8){
				return 210
			}else if (ph == 8){
				return 224
			}else if (ph < 8.5){
				return 238
			}else if (ph == 8.5){
				return 252
			}else if (ph < 9){
				return 266
			}else if( ph == 9 ){
				return 280
			}else{
				alert('invalid ph ' + ph)
				return 0
			}
		}
	}
}
</script>
