<script setup lang="ts">
	import { ref, computed } from "vue";
	import TodoFilter from "./TodoFilter.vue";
	import { showTodosList } from "../composables/useTodoList";

	const taskLeft = ref(0);

	const emits = defineEmits<{
		(emit: "filter", value: string): void;
	}>();

	const filter = (mode: any) => {
		// alert("filtered by " + mode);
		emits("filter", mode);
	};

	const totalTaskLeft = computed(() => {
		taskLeft.value = 0;
		showTodosList.value.filter((task) =>
			task.isChecked ? null : taskLeft.value++
		);
		return taskLeft;
	});
</script>

<template>
	<div class="todo-footer">
		<div v-if="totalTaskLeft.value === 1" class="todo-footer__counter">
			<!-- Add dynamic number -->
			{{ totalTaskLeft }} pending task
		</div>
		<div v-else-if="totalTaskLeft.value > 1" class="todo-footer__counter">
			<!-- Add dynamic number -->
			{{ totalTaskLeft }} pending tasks
		</div>
		<div v-else class="todo-footer__counter">
			<!-- Add dynamic number -->
			No pending task
		</div>
		<div class="todo-footer__clear">
			<a href="#" title="Clear Completed items"> Clear Completed </a>
		</div>
		<todo-filter class="todo-footer__filter" @filter="filter"></todo-filter>
	</div>

	<p>Drag and Drop to reorder list</p>
</template>
