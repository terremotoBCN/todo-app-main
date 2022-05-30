<script setup lang="ts">
	// This starter template is using Vue 3 <script setup> SFCs
	// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
	// import HelloWorld from "./components/HelloWorld.vue";
	import TodoInput from "./components/TodoInput.vue";
	import TodoHeader from "./components/TodoHeader.vue";
	import TodoList from "./components/TodoList.vue";
	import TodoAttribution from "./components/TodoAttribution.vue";

	const theme = {
		color: "orange",
	};
</script>

<template>
	<todo-header appTitle="TODO" theme="dark"></todo-header>
	<todo-input title="New Todo"></todo-input>
	<todo-list></todo-list>

	<!-- Add dynamic number -->
	items left All Active Completed Clear Completed
	<!-- <todo-attribution></todo-attribution> -->
</template>

<style lang="scss"></style>
