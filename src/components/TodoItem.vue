<script setup lang="ts">
	// import { computed, ref, defineProps } from "vue";

	import { ref, defineProps } from "vue";
	defineProps<{
		isChecked?: boolean;
		todoId: string;
		todoText?: string;
	}>();

	function checkToggle(todoId: string) {
		const item: any = document.getElementById(todoId);
		item.checked = item.checked ? true : false;
		console.info("Tooggle: ", todoId);
	}
</script>
<template>
	<div class="todo-item">
		<div class="todo-item__icon todo-item__icon--uncheck">
			<label :for="todoId">
				<img
					v-if="isChecked"
					width="32"
					class="todo-item__img"
					src="../assets/icon-check.svg"
					alt="checked"
				/>
			</label>
			<input
				@change="checkToggle(todoId)"
				type="checkbox"
				:name="todoId"
				:id="todoId"
				:checked="isChecked"
			/>{{ isChecked }}
		</div>

		<label :for="todoId" class="todo-item__task">
			{{ todoId }} --Task Description:: {{ todoText }}
		</label>

		<div class="todo-item__del">
			<img src="../assets/icon-cross.svg" width="32" alt="Delete" />
		</div>
	</div>
	<!-- /// .todo-item -->
</template>

<style scope lang="scss">
	// @use "../scss/02_tools" as tools;
</style>
