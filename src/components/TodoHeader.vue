<script setup lang="ts">
	const props = defineProps<{
		appTitle: string;
		bar?: number;
	}>();
</script>
<template>
	<header class="todo-header">
		<h1 class="todo-header__title">{{ appTitle }}</h1>

		<button
			id="theme-toggle"
			class="todo-header__theme_toggle todo-header__theme_toggle--dark"
			type="button"
		>
			<span> toggle theme </span>
		</button>
	</header>
	<!-- /// .todo-header -->
</template>

<style lang="scss"></style>
