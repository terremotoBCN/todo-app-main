<script setup lang="ts">
	import TodoHeader from "./components/TodoHeader.vue";
	import TodoInput from "./components/TodoInput.vue";
	import TodoList from "./components/TodoList.vue";
	import TodoFooter from "./components/TodoFooter.vue";
	import TodoAttribution from "./components/TodoAttribution.vue";
	import { computed, ref, defineProps, Ref, provide } from "vue";
	// import { Ref } from "@vue/reactivity";

	const theme: Ref<string> = ref("dark");
	// const todos: Array<object> = ref([]);

	// const todos_asc: any = computed(() => theme.value);
	// function recibeNewTask(msg: string) {
	// 	console.log(msg);
	// }

	const filter = (mode: any) => {
		alert("filtered APP by " + mode);
	};
</script>

<template>
	<todo-header appTitle="TODO"></todo-header>
	<todo-input title="New Todo"></todo-input>

	<!-- 	// INI -- 	 TODO-LIST ITEMS //	-->
	<todo-list></todo-list>
	<!-- 	\\ END -- 	 TODO-LIST ITEMS \\	-->

	<todo-footer @filter="filter"></todo-footer>

	<todo-attribution></todo-attribution>
</template>

<style lang="scss"></style>
