import { Ref, ref } from "vue";

export const showTodosList: Ref<todoList.ITodoItem[]> = ref([]);

export function useTodoList() {
	// todoList Object
	const todosList: Ref<todoList.ITodoItem[]> = ref([
		{ id: 33, task: "learn React", isChecked: false },
		{ id: 66, task: "learn Svelte", isChecked: true },
		{ id: 44, task: "Playin with...", isChecked: false },
		{ id: 88, task: "Playin with XHTML", isChecked: false },
	]);

	// Create New Tasks
	function createNewTask(taskName: string): void {
		if (taskName === "" || taskName.length < 4) {
			alert(`Task Name "${taskName}" is not valid, try again!`);
			return;
		}
		const newTask: { id: number; task: string; isChecked: boolean } = {
			id: Date.now(),
			task: taskName.trim(),
			isChecked: false,
		};
		showTodosList.value.unshift(newTask);
		console.info("🌟 Create Task Item", taskName);

		console.table(showTodosList.value);

		// showTodosList.value = todosList.value;
	}

	// Delete Task By ID
	function deleteTask(taskId: number): void {
		console.info("❌ Delete Task Item ==>>", taskId);
		showTodosList.value = showTodosList.value.filter(
			(task) => task.id !== taskId
		);
	}

	// Check/Uncheck Task by ID
	function checkedTask(taskId: number): void {
		console.info("✔️ Check Task Item", taskId);
		showTodosList.value.forEach((taskItem) => {
			if (taskItem.id === taskId) {
				taskItem.isChecked = !taskItem.isChecked;
				console.info(
					`Task  ${taskItem.id} is checked? `,
					taskItem.isChecked
				);
			}
		});
	}

	return { todosList, createNewTask, deleteTask, checkedTask };
}

////////////////////////
