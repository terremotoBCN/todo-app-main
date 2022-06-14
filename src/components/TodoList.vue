<script setup lang="ts">
	import TodoItem from "./TodoItem.vue";

	defineProps<{
		todosList: any;
	}>();
</script>
<template>
	<div class="todo-list">
		<todo-item
			v-for="item in todosList"
			:todoId="item.id"
			:todoText="item.text"
			:isChecked="item.isChecked"
		>
		</todo-item>
	</div>
	<!-- /// .todo-list -->
</template>
