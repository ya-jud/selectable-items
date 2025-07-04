<script setup lang="ts">
// Props
interface IProps {
	title?: string
}

const props = defineProps<IProps>();
</script>

<template>
  <div class="area">
	<h3
		v-if="props.title"
		class="area__title"
	>
		{{ props.title }}
	</h3>

	<div class="area__content">
		<slot/>
	</div>
  </div>
</template>

<style scoped lang="scss">
.area {
	position: relative;
	border-radius: 25px;
	padding: 25px;
	background-color: rgb(58, 58, 58);

	&__title {
		padding: 5px 20px;
		border-radius: 20px;
		background-color: inherit;
		text-align: center;
		box-shadow: 0 0 5px rgba(144, 144, 144, 0.385);
	}

	&__content {
		display: flex;
		width: fit-content;
		flex-wrap: wrap;
		margin-top: 20px;
		gap: 10px;
	}
}
</style>
