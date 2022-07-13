<script setup lang="ts">
	import { ref, Ref } from "vue";
	import { useTodoList } from "../composables/useTodoList";

	// const task = ref();

	const taskName: Ref<string> = ref("");

	const { createNewTask } = useTodoList();
</script>

<template>
	<div class="todo-input">
		<input
			type="text"
			class="todo-input__field"
			placeholder="Insert Task"
			v-model="taskName"
		/>
		<button
			@click="
				createNewTask(taskName);
				taskName = '';
			"
		>
			dame
		</button>
	</div>
	<!-- /// .todo-input -->
</template>
