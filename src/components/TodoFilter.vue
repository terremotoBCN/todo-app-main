<script setup lang="ts">
	const emitters = defineEmits<{
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
					@click="emitters('filter', 'all')"
				>
					All
				</a>
			</li>
			<li>
				<a
					class="todo-filter__opt"
					href="#"
					@click="emitters('filter', 'active')"
				>
					Active
				</a>
			</li>
			<li>
				<a
					class="todo-filter__opt"
					href="#"
					@click="emitters('filter', 'complete')"
				>
					Completed
				</a>
			</li>
		</ul>
	</div>
</template>
