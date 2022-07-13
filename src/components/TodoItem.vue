<script setup lang="ts">
	import { defineProps, onMounted } from "vue";
	import { useTodoList } from "../composables/useTodoList";
	defineProps<{
		todoId: string;
		todoText: string;
		isChecked: boolean;
	}>();

	const { checkedTask, deleteTask } = useTodoList();
</script>
<template>
	<li class="todo-item" :title="todoText" draggable="true">
		<input
			class="todo-item__check"
			@change="checkedTask(parseInt(todoId))"
			type="checkbox"
			:name="todoId"
			:id="todoId"
			:checked="isChecked"
		/>
		<label :for="todoId">
			<img
				v-if="isChecked"
				width="16"
				height="16"
				class="todo-item__img"
				src="/src/assets/icon-check.svg"
				alt="checked"
			/>
		</label>

		<label :for="todoId" class="todo-item__task">
			{{ todoId }} -- {{ todoText }}
		</label>

		<input
			type="image"
			src="/src/assets/icon-cross.svg"
			alt="Delete"
			title="Delete Task"
			@click="deleteTask(parseInt(todoId))"
		/>

		<!-- <div class="todo-item__delete" @click="deleteTask">
			<img src="../assets/icon-cross.svg" width="32" alt="Delete" />
		</div> -->
	</li>
	<!-- /// .todo-item -->
</template>

<style scope lang="scss">
	.todo-item {
		font-size: 0.75em;
		background-color: var(--item-background);
		color: var(--text-color);
		padding: 0.5rem 1rem;

		border: 3px solid var(--item-color);

		@include tools.flexbox($direction: row, $content: space-between);

		cursor: grab;
		background: none;

		&__check {
			display: none;
		}

		img {
			box-sizing: border-box;
			padding: 0.2em;
			border-radius: 50%;
			width: 12px;
			height: 12px;
			background: settings.$light-header-gradient;
		}

		&.drag-start {
			opacity: 0.3;
		}
		&.drag-end {
			opacity: 1;
		}

		&.over {
			border: 3px dashed indigo;
			background-color: red;
		}
	}

	.over {
		border: 3px dashed indigo;
		background-color: red;
	}
	[draggable] {
		user-select: none;
	}
	// @use "../scss/02_tools" as tools;
</style>
