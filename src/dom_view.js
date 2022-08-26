
const folders = document.querySelectorAll('[data-folder]')
const tasks = document.querySelectorAll('[data-folder]')

// Default State
// The tasks beloging to the first folder are visible.
// The first folder is active.

const defaultState = (function() {
	folders[0].classList.add('isActive')
	tasks.forEach((task) => {
		if (task.dataset.folder == folders[0].dataset.folder) {
			task.classList.add('isActive')
		}
	})
})()

// Add Event Listener on Folder

const addEventListenerToFolders = (function() {
	folders.forEach((folder) => {
		folder.addEventListener('click', () => {
			folders.forEach((x) => x.classList.remove('isActive'))
			folder.classList.add('isActive')
			
			tasks.forEach((task) => {
				if (task.dataset.folder == folder.dataset.folder) {
					task.classList.add('isActive')
				} else {
					task.classList.remove('isActive')
				}
			})
		})
	})
})()
