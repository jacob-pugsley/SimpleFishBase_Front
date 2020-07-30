<template>
	<div id="locMap">
		<!--
		<iframe width="600" height="450" frameborder="0" style="border:0"
			src="https://www.google.com/maps/embed/v1/place?q=&key=..." allowfullscreen></iframe>
		-->

		<iframe
			frameborder="0" style="border:0"
			height="400"
			:src="'https://www.google.com/maps/embed/v1/place?q='+query
					+'&key=AIzaSyCDm4MdBOmUXlq3W6pCiVKE0m4kOZpQAe4'"
		></iframe>
	</div>
</template>

<script>
export default{
	name: 'locMap',
	props:{
		query:{
			type: String,
			required: true
		}
	}
}
</script>

<style>
iframe{
	width: 100% !important;
}
</style>