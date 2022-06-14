<script setup lang="ts">
	// This starter template is using Vue 3 <script setup> SFCs
	// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
	// import HelloWorld from "./components/HelloWorld.vue";
	import TodoInput from "./components/TodoInput.vue";
	import TodoHeader from "./components/TodoHeader.vue";
	import TodoList from "./components/TodoList.vue";
	import TodoFooter from "./components/TodoFooter.vue";
	import TodoAttribution from "./components/TodoAttribution.vue";
	import TodoFilter from "./components/TodoFilter.vue";
	import { computed, ref, defineProps } from "vue";

	const theme: object = ref("dark");
	// const todos: Array<object> = ref([]);
	const todos = ref([
		{ id: 33, text: "learn React", isChecked: false },
		{ id: 66, text: "learn Svelte", isChecked: true },
		{ id: 44, text: "Playin with...", isChecked: false },
		{ id: 88, text: "Playin with...", isChecked: false },
	]);

	// const todos_asc: any = computed(() => theme.value);
	function createNewTask(msg: string) {
		alert(msg);
		const newId: number = Date.now();
		const newText: string = msg.toString();

		var newTodo = { id: newId, text: newText, isChecked: false };

		todos.value.push(newTodo);
	}
</script>

<template>
	<todo-header appTitle="TODO" theme="dark"></todo-header>
	<todo-input title="New Todo" @create-task="createNewTask"></todo-input>

	<todo-list :todosList="todos"></todo-list>

	<ul>
		<li v-for="todo in todos" :key="todo.id">
			{{ todo.text }}
		</li>
	</ul>
	<todo-footer></todo-footer>
	<todo-filter></todo-filter>

	<todo-attribution></todo-attribution>
</template>

<style lang="scss"></style>
