<script setup lang="ts">
	import { ref, Ref } from "vue";
	import { useTodoList } from "../composables/useTodoList";

	const taskName: Ref<string> = ref("");

	const { createNewTask } = useTodoList();

	function addTodoTask(event: Event) {
		event.preventDefault();
		createNewTask(taskName.value);
		taskName.value = "";
	}
</script>

<template>
	<form @submit="addTodoTask" class="todo-input">
		<input
			id="new-task-field"
			type="text"
			class="todo-input__field"
			placeholder="Create a new todo..."
			v-model="taskName"
			autofocus
		/>
	</form>
</template>
