<template>
	<div class="todo-footer">
		<div class="todo-counter">
			<!-- Add dynamic number -->
			<span class="todo-counter__items">0</span> items left
		</div>
		<div class="todo-clear">
			<a href="#" title="Clear Completed items"> Clear Completed </a>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
	// sass vars defined on vite.config.ts
	// .todo-footer {
	// 	color: colors.$bright-blue;
	// }
</style>
