
import {Task, getTasksFromLocalStorage, Folder, getFoldersFromLocalStorage} from './app.js'

const container = document.querySelector('.container')

// Create a Column, a Form and a Button

function createColumn(name) {
	const column = Object.assign(document.createElement('div'), {
		className: `column column-${name}`
	})
	
	container.appendChild(column)
	return column
}

function createForm(name, parent) {
	const form = Object.assign(document.createElement('div'), {
		className: `form form-${name}`
	})
	
	parent.appendChild(form)
	return form
}

function createButton(content, parent) {
	const button = Object.assign(document.createElement('button'), {
		textContent: content
	})
	
	parent.appendChild(button)
	return button
}

// Folder Column and Folder Creation Form

const folderColumn = (function() {
	const column = createColumn('folders')
	
	// Populate Folder Form
	const populateForm = (function() {
		const columnForm = createForm('folder', column)
		const columnFormInput = Object.assign(document.createElement('input'), {
			id: 'folder-name',
			type: 'text',
			placeholder: 'Folder/Project Name'
		})
		
		columnForm.appendChild(columnFormInput)
		const columnFormButton = createButton('+', columnForm)
		
		return {
			columnForm,
			columnFormInput,
			columnFormButton
		}
	})()
	
	// Populate Folder List
	const populateFolderList = (function() {
		const folders = getFoldersFromLocalStorage()
		
		const columnUl = Object.assign(document.createElement('ul'), {
			className: 'folders'
		})
		
		column.appendChild(columnUl)
		
		folders.forEach((folder) => {
			const folderName = folder.name
			const folderNameFixed = folderName.toLowerCase().replaceAll(' ', '')
			const columnLi = Object.assign(document.createElement('li'), {
				className: `folder folder-${folderNameFixed}`,
				textContent: folderName
			})
			
			columnLi.setAttribute('data-folder', folderName)
			
			columnUl.appendChild(columnLi)
		})
		
		return {
			folders,
			columnUl
		}
	})()
	
	// Create new Folder on Button Click
	const newFolderBtn = (function() {
		const folders = populateFolderList.folders
		const folderNames = folders.map((folder) => folder.name)
		const button = populateForm.columnFormButton
		const input = populateForm.columnFormInput
		
		button.addEventListener('click', () => {
			const isIncluded = folderNames.includes(input.value)
			
			if (!isIncluded && input.value != '') {
				new Folder(input.value)
				reloadPage()
			}
		})
	})()
})()

// Task Column and Task Creation Form

const taskColumn = (function() {
	const column = createColumn('tasks')
	const columnForm = createForm('task', column)
	
	const createInput = (id, type, placeholder, parent) => {
		const input = Object.assign(document.createElement('input'), {
			id: id,
			name: name,
			type: type,
			placeholder: placeholder,
			defaultText: placeholder
		})
		
		parent.appendChild(input)
		return input
	}
	
	const createSelect = (id, optionsArr, parent) => {
		const select = Object.assign(document.createElement('select'), {
			id: id,
			name: id
		})
		
		optionsArr.forEach((x) => {
			const option = Object.assign(document.createElement('option'), {
				value: x,
				textContent: x
			})
			
			select.appendChild(option)
		})
		
		parent.appendChild(select)
		return select
	}
	
	const taskList = (function() {
		const tasks = getTasksFromLocalStorage()
		
		const columnUl = Object.assign(document.createElement('ul'), {
			className: 'tasks'
		})
		
		column.appendChild(columnUl)
		
		const taskLi = (function() {
			tasks.forEach((task) => {
				const columnLi = Object.assign(document.createElement('li'), {
					className: `task task-${task.id}`
				})
				
				columnLi.setAttribute('data-folder', task.folder)
				
				const removeBtn = Object.assign(document.createElement('button'), {
					textContent: '-',
					className: 'remove-button'
				})
				
				const editBtn = Object.assign(document.createElement('button'), {
					textContent: '✎',
					className: 'edit-button'
				})
				
				const addRemoveBtnEventListener = (function() {
					removeBtn.addEventListener('click', () => {
						const id = task.id
						const item = `task-${id}`
						localStorage.removeItem(item)
						reloadPage()
					})
				})()
				
				const addEditBtnEventListener = (function() {
					editBtn.addEventListener('click', () => {
						const idTask = task.id
						const item = `task-${idTask}`
						const createEditForm = (function() {
							const form = createForm('edit', container)
							const folders = getFoldersFromLocalStorage().map((folder) => folder.name)
							
							const taskTitle = createInput('task-edit-title', 'text', 'Title', form)
							const taskDescription = createInput('task-edit-description', 'text', 'Description', form)
							const taskDueDate = createInput('task-edit-dueDate', 'date', '', form)
							const taskPriority = createSelect('task-priority', ['High', 'Medium', 'Low'], form)
							const taskFolder = createSelect('task-folder', folders, form)
							
							const submitBtn = Object.assign(document.createElement('button'), {
								textContent: '+'
							})
							
							const closeBtn = Object.assign(document.createElement('button'), {
								textContent: 'x'
							})
							
							closeBtn.addEventListener('click', () => form.remove())
							
							form.appendChild(submitBtn)
							form.appendChild(closeBtn)
							
							submitBtn.addEventListener('click', () => getValue())
							
							const getValue = () => {						
								const title = taskTitle.value
								const description = taskDescription.value
								const dueDate = taskDueDate.value
								const priority = taskPriority.value
								const folder = taskFolder.value
								new Task(title, description, dueDate, priority, folder)
								localStorage.removeItem(item)
								reloadPage()
							}
						})()
					})
				})()
				
				const taskEntries = Object.entries(task)
				
				const infoDiv = document.createElement('div')
				
				// I do not want to create a span for the id nor for the folder.
				for (let i = 0; i < taskEntries.length - 2; i++) {
					let key = taskEntries[i][0]
					let value = taskEntries[i][1]
					
					if (key == 'dueDate') {
						let date = new Date(value)
						let year = date.getFullYear()
						let month = ((date.getMonth() + 1) < 10) ? `0${date.getMonth() + 1}` : `${date.get() + 1}`
						let day = ((date.getDate()) < 10) ? `0${date.getDate()}` : `${date.getDate()}`
						value = `${month}/${day}/${year}`
					}
					
					const span = Object.assign(document.createElement('span'), {
						textContent: value
					})
					
					infoDiv.appendChild(span)
					columnLi.appendChild(infoDiv)
				}
				
				columnLi.appendChild(editBtn)		
				columnLi.appendChild(removeBtn)		
				columnUl.appendChild(columnLi)
			})
		})()
		
	})()
	
	const taskForm = (function() {
		const folders = getFoldersFromLocalStorage().map((folder) => folder.name)
		const taskTitle = createInput('task-title', 'text', 'Title', columnForm)
		const taskDescription = createInput('task-description', 'text', 'Description', columnForm)
		const taskDueDate = createInput('task-date', 'date', '', columnForm)
		const taskPriority = createSelect('task-priority', ['High', 'Medium', 'Low'], columnForm)
		const taskFolder = createSelect('task-folder', folders, columnForm)
		
		return {
			taskTitle,
			taskDescription,
			taskDueDate,
			taskPriority,
			taskFolder
		}
	})()
	
	const taskFormButton = (function() {
		const columnFormButton = createButton('+', columnForm)
		columnFormButton.addEventListener('click', () => {
			const taskTitle = taskForm.taskTitle.value
			const taskDescription = taskForm.taskDescription.value
			const taskDueDate = taskForm.taskDueDate.value
			const taskPriority = taskForm.taskPriority.value
			const taskFolder = taskForm.taskFolder.value
			
			new Task(taskTitle, taskDescription, taskDueDate, taskPriority, taskFolder)
			reloadPage()
		})
	})()
})()

// Each time something gets added to LocalStorage, refresh the page.

const refreshLocalStorage = (function() {
	window.addEventListener('storage', () => window.location.reload(true))
})()

const reloadPage = () => {
	window.location.reload(true)
}
