<script setup lang="ts">
	import { ref, Ref } from "vue";
	import TodoHeader from "./components/TodoHeader.vue";
	import TodoInput from "./components/TodoInput.vue";
	import TodoList from "./components/TodoList.vue";
	import TodoFooter from "./components/TodoFooter.vue";
	import TodoAttribution from "./components/TodoAttribution.vue";

	const filter = (mode: string) => {
		alert("filtered APP by " + mode);
	};
</script>

<template>
	<TodoHeader appTitle="TODO" />
	<TodoInput title="New Todo" />
	<TodoList />
	<TodoFooter @filter="filter" />
	<TodoAttribution />
</template>
