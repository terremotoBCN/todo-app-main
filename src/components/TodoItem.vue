<script setup lang="ts">
	defineProps<{ isChecked: boolean }>();
</script>
<template>
	<div class="todo-item">
		<div class="todo-item__icon todo-item__icon--uncheck">
			<img
				v-if="isChecked"
				width="32"
				class="todo-item__img"
				src="../assets/icon-check.svg"
				alt="checked"
			/>
		</div>

		<div class="todo-item__task">Task Description</div>

		<div class="todo-item__del">
			<img src="../assets/icon-cross.svg" width="32" alt="Delete" />
		</div>
	</div>
	<!-- /// .todo-item -->
</template>

<style scope lang="scss">
	@use "../scss/02_tools" as tools;
</style>
