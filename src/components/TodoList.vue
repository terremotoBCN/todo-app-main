<script setup lang="ts">
	import { computed } from "vue";
	import TodoItem from "./TodoItem.vue";
	import iconCheck from "@assets/icon-check.svg";

	import { useTodoList, showTodosList } from "../composables/useTodoList";

	const { checkedTask, deleteTask } = useTodoList();

	const showList = computed(() => {
		return showTodosList.value;
	});
</script>
<template>
	<div class="todo-list">
		<p v-if="!showTodosList" class="todo-list__loader">loading...</p>
		<p v-if="showTodosList.length < 1" class="todo-list__note">
			Congratulations, <br />
			you have no pending tasks
			<img :src="iconCheck" alt="icon check" />
		</p>
		<ul v-else class="todo-list__list">
			<todo-item
				v-for="item in showTodosList"
				class="todo-list__item"
				:todoId="item.id"
				:todoText="item.task"
				:isChecked="item.isChecked"
				@delete="deleteTask"
				@check="checkedTask"
			>
			</todo-item>
			<pre class="result">
			{{ showTodosList }}
			</pre
			>
		</ul>
	</div>

	<!-- /// .todo-list -->
</template>
<style scoped lang="scss"></style>
