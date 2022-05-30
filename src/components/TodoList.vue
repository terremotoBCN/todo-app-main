<script setup lang="ts">
	import TodoItem from "./TodoItem.vue";
</script>
<template>
	<div class="todo-list">
		<todo-item :is-checked="false"></todo-item>
	</div>
	<!-- /// .todo-list -->
</template>
