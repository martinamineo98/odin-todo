
// Tasks

class Task {

	constructor(title, description, dueDate, priority, folder) {
		this.title = title
		this.description = description
		this.dueDate = new Date(dueDate)
		this.priority = priority
		this.folder = folder
		this.id = generateId()
		localStorage[`task-${this.id}`] = JSON.stringify(this)
	}
	
}

// Generate an id for the newly created task.

function generateId(characters = 20) {
	
	const string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	let id = ''
	
	for (let index = 0; index < characters; index++) {
		const characterIndex = Math.floor(Math.random() * string.length)
		id += string[characterIndex]
	}
	
	return id
	
}

// Get all Tasks from Local Storage

function getTasksFromLocalStorage() {
	
	const tasks = Object.keys(localStorage)
				.filter((key)=> key.startsWith('task-'))
        .map((key)=> JSON.parse(localStorage[key]));
        
	return tasks
	
}

// Folders

class Folder {
	
	constructor(name) {
		this.name = name
		localStorage[`folder-${name.toLowerCase().replaceAll(' ', '')}`] = JSON.stringify(this)
	}
	
}

// Get All Folders from LocalStorage

function getFoldersFromLocalStorage() {
	
	const folders = Object.keys(localStorage)
				.filter((key)=> key.startsWith('folder-'))
        .map((key)=> JSON.parse(localStorage[key]));
        
	return folders
	
}

// Dummy Folder and Dummy Tasks

// const folder1 = new Folder('Folder 1')
// const folder2 = new Folder('Folder 2')
// const folder3 = new Folder('Folder 3')

// const task1 = new Task('Task 1', 'Task Number 1 blah blah', '2022-08-27', 'High', 'Unfinished', 'Folder 1')
// const task2 = new Task('Task 2', 'Task Number 2 blah blah', '2022-08-28', 'Medium', 'Unfinished', 'Folder 2')
// const task3 = new Task('Task 3', 'Task Number 3 blah blah', '2022-08-29', 'Low', 'Finished', 'Folder 2')
// const task4 = new Task('Task 4', 'Task Number 4 blah blah', '2022-08-30', 'Low', 'Finished', 'Folder 3')

export {Task, getTasksFromLocalStorage, Folder, getFoldersFromLocalStorage}
