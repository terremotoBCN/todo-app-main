<script setup lang="ts">
	const props = defineProps<{
		appTitle: string;
		bar?: number;
	}>();
</script>
<template>
	<header class="todo-header">
		<h1 class="todo-header__title">{{ appTitle }}</h1>
		<!-- /// .todo-header__title -->

		<div class="todo-header__theme">
			<button id="theme-toggle" type="button">
				<img src="../assets/icon-sun.svg" alt="Light theme" />
			</button>
		</div>
		<!-- /// .todo-header__theme -->
	</header>
	<!-- /// .todo-header -->
</template>

<style lang="scss">
	.todo-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
