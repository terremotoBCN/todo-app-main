<script setup lang="ts">
	import { ref, onMounted } from "vue";
	import TodoItem from "./TodoItem.vue";

	import { useTodoList } from "../composables/useTodoList";
	import { computed } from "@vue/reactivity";

	const todosList = ref(useTodoList().todosList);

	// computed((todoList) => todoList);

	// const emits = defineEmits<{}>();

	onMounted(() => {
		/* DRAGABBLE OPTION */
		// console.log("paso por aqui");
		// let items = document.querySelectorAll(".todo-item");
		// items.forEach(function (item) {
		// 	item.addEventListener("dragstart", handleDragStart);
		// 	item.addEventListener("dragover", handleDragOver,);
		// 	item.addEventListener("dragenter", handleDragEnter);
		// 	item.addEventListener("dragleave", handleDragLeave);
		// 	item.addEventListener("dragend", handleDragEnd);
		// 	item.addEventListener("drop", handleDrop);
		// });
	});
</script>
<template>
	<ul class="todo-list">
		<pre class="result">
			{{ todosList }}
		</pre
		>
		<todo-item
			v-for="item in todosList"
			:todoId="item.id.toString()"
			:todoText="item.task"
			:isChecked="item.isChecked"
		>
		</todo-item>
	</ul>
	<!-- /// .todo-list -->
</template>
<style scoped lang="scss">
	pre.result {
		background-color: #ececec;
		position: absolute;
		top: 0.1rem;
		right: 1rem;
		opacity: 0.66;
		z-index: -1;
		padding: 0.5srem;
		border-radius: 8px;
		box-shadow: 4px 4px 4px -2px #cacaca;
		font-size: 8px;
	}
</style>
