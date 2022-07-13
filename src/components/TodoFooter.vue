<script setup lang="ts">
	import { defineEmits } from "vue";
	import TodoFilter from "./TodoFilter.vue";

	const emits = defineEmits<{
		(emit: "filter", value: string): void;
	}>();

	const filter = (mode: any) => {
		// alert("filtered by " + mode);
		emits("filter", mode);
	};
</script>

<template>
	<div class="todo-footer">
		<div class="todo-counter">
			<!-- Add dynamic number -->
			<span class="todo-counter__items">0</span> items left
		</div>
		<todo-filter @filter="filter"></todo-filter>
		<div class="todo-clear">
			<a href="#" title="Clear Completed items"> Clear Completed </a>
		</div>
	</div>

	<p>Drag and Drop to reorder list</p>
</template>

<style scoped lang="scss">
	// sass vars defined on vite.config.ts
	// .todo-footer {
	// 	background: settings.$dark-header-gradient;
	// 	color: settings.$purple-gradient;
	// }
</style>
