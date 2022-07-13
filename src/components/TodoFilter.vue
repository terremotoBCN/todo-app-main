<script setup lang="ts">
	import { defineEmits } from "vue";

	const emit = defineEmits<{
		(e: "filter", value: string): void;
	}>();
</script>

<template>
	<div class="todo-filter">
		<ul>
			<li>
				<a
					class="todo-filter__opt todo-filter__opt--active"
					href="#"
					@click="emit('filter', 'all')"
				>
					All
				</a>
			</li>
			<li>
				<a
					class="todo-filter__opt"
					href="#"
					@click="emit('filter', 'active')"
				>
					Active
				</a>
			</li>
			<li>
				<a
					class="todo-filter__opt"
					href="#"
					@click="emit('filter', 'complete')"
				>
					Completed
				</a>
			</li>
		</ul>
	</div>
</template>
