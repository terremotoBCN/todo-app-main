import { Ref, ref } from "vue";

export const todosList: Ref<
	{ id: number; task: string; isChecked: boolean }[]
> = ref([
	{ id: 33, task: "learn React", isChecked: false },
	{ id: 66, task: "learn Svelte", isChecked: true },
	{ id: 44, task: "Playin with...", isChecked: false },
	{ id: 88, task: "Playin with...", isChecked: false },
]);

export function useTodoList() {
	function createNewTask(taskName: string) {
		if (taskName === "") return;
		const newTask: { id: number; task: string; isChecked: boolean } = {
			id: Date.now(),
			task: taskName.trim(),
			isChecked: false,
		};
		todosList.value.unshift(newTask);
		console.info("🌟 Create Task Item", taskName);

		console.table(JSON.stringify(todosList.value));
	}

	function deleteTask(taskId: number): void {
		const resultTasks = todosList.value.filter(
			(taskItem) => taskItem.id !== taskId
		);

		todosList.value = resultTasks;
		console.info("❌ Delete Task Item", taskId);
		console.table(todosList.value);
	}

	function checkedTask(taskId: number): boolean {
		console.info("✔️ Check Task Item", taskId);
		todosList.value.forEach((taskItem) => {
			if (taskItem.id === taskId) {
				taskItem.isChecked = !taskItem.isChecked;
				console.info(
					`Task  ${taskItem.id} is checked? `,
					taskItem.isChecked
				);
				return taskItem.isChecked;
			}
		});

		return false;
	}

	return { todosList, createNewTask, deleteTask, checkedTask };
}

////////////////////////
