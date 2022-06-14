<script setup lang="ts">
	import { ref, Ref } from "vue";
	// const task = ref();

	const taskName = ref("");
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
				$emit('createTask', taskName);
				taskName = ``;
			"
		>
			dame
		</button>
	</div>
	<!-- /// .todo-input -->
</template>
