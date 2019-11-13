<script>
	export let appName;

	let idCounter = 3;
	let todos = [
		{ id: 0, text: 'Installere NPM', done: true},
		{ id: 1, text: 'Klone git-repoet', done: true},
		{ id: 2, text: '???', done: false},
		{ id: 3, text: 'Vise alle min fine Todo-app', done: false}];
	let numberDone = todos.filter(todoElement => todoElement.done).length;
	
	function addTodo(text) {
		idCounter += 1;
		const newTodoItem = { id: idCounter, text, done: false };
		console.log('New todo item:', newTodoItem); // Erstatt denne linjen i oppg 2
	}
</script>

<style>
	h1 {
		color: purple;
	}

	.container {
		max-width: 500px;
		margin: 0 auto;
		padding: 1rem;
	}

	.todo {
		border: 1px solid #ccc;
		margin: 1rem 0;
		padding: .5rem 0;
	}

	.todo input {
		margin: 0 1rem;
	}

	.todo.done span {
		color: #bbb;
		text-decoration: line-through;
	}
</style>

<div class="container">
	<h1>{appName}</h1>

	<button>Add todo</button>

	<label class="todo">
		<input type="checkbox" />
		Todo text
	</label>
	<label class="todo">
		<input type="checkbox" />
		Todo text
	</label>

	<div>{numberDone} / {todos.length} done</div>
</div>

