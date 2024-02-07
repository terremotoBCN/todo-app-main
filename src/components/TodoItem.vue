<script setup lang="ts">
	import iconCross from "@assets/icon-cross.svg";
	import iconCheck from "@assets/icon-check.svg";
	const props = defineProps<{
		todoId: number;
		todoText: string;
		isChecked: boolean;
	}>();

	const emitters = defineEmits<{
		(e: "check", id: number): void;
		(e: "delete", id: number): void;
	}>();
</script>
<template>
	<li class="todo-item" :title="todoText" draggable="true">
		<div class="todo-item__check">
			<input
				class="todo-item__check-box"
				@change="emitters('check', todoId)"
				type="checkbox"
				:name="todoId.toString()"
				:id="todoId.toString()"
				:checked="isChecked"
			/>
			<img
				v-if="isChecked"
				width="16"
				height="16"
				class="todo-item__check-img"
				:src="iconCheck"
				alt="checked"
			/>
		</div>
		<label :for="todoId.toString()" class="todo-item__task">
			{{ todoText }}
		</label>
		<input
			class="todo-item__delete"
			type="image"
			:src="iconCross"
			alt="Delete"
			title="Delete Task"
			@click="emitters('delete', todoId)"
		/>
	</li>
	<!-- /// .todo-item -->
</template>
