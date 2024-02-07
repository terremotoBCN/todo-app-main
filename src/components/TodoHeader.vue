<script setup lang="ts">
	//	theme
	import { storedTheme, switchTheme } from "@/ts/themes";

	const props = defineProps<{
		appTitle: string;
		bar?: number;
	}>();
</script>
<template>
	<header class="todo-header">
		<h1 class="todo-header__title">{{ appTitle }}</h1>

		<button
			id="theme-toggle"
			class="todo-header__theme_toggle"
			type="button"
			@click="switchTheme"
		>
			<span> toggle theme </span>
		</button>
	</header>
	<!-- /// .todo-header -->
</template>
