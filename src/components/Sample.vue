<template>
	<div class="sample">
		<h1>Sampel Header</h1>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Sample extends Vue {}
</script>

<style lang="scss">
.sample {
	border-color: $wmui-color-base30;
	border-width: 1px;
	border-style: solid;
}
</style>
