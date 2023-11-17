window.onload = () => {
     const doneTask = (taskId, isDone) => {
         const tasks = _localStorage.getTasks();
         for (let i = 0; i < tasks.length; i++) {
             const task = tasks[i];
             if (task.id === taskId) {
                 task.done = isDone;
             }
         }
         _localStorage.saveTasks(tasks);
         showTasks();
     }

    const deleteTask = (taskId) => {
        const tasks = _localStorage.getTasks();
        const filteredTasks = tasks.filter((task, index) => {
            return task.id != taskId;
        });
        _localStorage.saveTasks(filteredTasks);
        showTasks();
    }

    const createNewTask = () => {
        const titleInput = document.getElementById("new-task-title");
        if (titleInput) {
            const newTaskTitle = titleInput.value;
            const id = new Date().getTime();
            titleInput.value = "";
            return {
                id: id,
                title: newTaskTitle,
                done: false
            };
        }
    }
    
    const createTaskElement = (task) => {
        const tasksItem = document.createElement("div");
        tasksItem.classList.add("tasks__item");
        if (task.done) {
            tasksItem.classList.add("tasks__item_done");
        }
        tasksItem.id = task.id;
        
        const tasksItemDelete = document.createElement("img");
        tasksItemDelete.src = "assets/icons/delete-task.svg";
        tasksItemDelete.classList.add("tasks__item-delete");
        tasksItem.appendChild(tasksItemDelete);
        tasksItemDelete.addEventListener('click', () => {
            deleteTask(task.id);
        })

        const tasksDone = document.createElement("span");
        tasksDone.classList.add("tasks__item-done");
        const tasksDoneIcon = document.createElement("img");
        tasksDoneIcon.classList.add("tasks__item-done-icon");
        tasksDoneIcon.src = "assets/icons/task-done.svg";
        tasksDone.appendChild(tasksDoneIcon);
        tasksItem.appendChild(tasksDone);
        tasksDone.addEventListener("click", () => {
            doneTask(task.id, !task.done);
        })

        const tasksItemTitle = document.createElement("span");
        tasksItemTitle.classList.add("tasks__item-title");
        tasksItemTitle.innerText = task.title;
        tasksItem.appendChild(tasksItemTitle);

        return tasksItem;
    }

    const showTasks = () => {
        const tasks = _localStorage.getTasks();
        const tasksComponent = document.getElementById("tasks")
        if (!tasksComponent || !tasks) {
            return;
        }
        tasksComponent.innerHTML = "";
        tasks.forEach((task, index) => {
            const newTaskElement = createTaskElement(task);
            tasksComponent.appendChild(newTaskElement);
        });
    }


    const _localStorage = {
        key: "TASKS",
        saveNewTask: function(task) {
            const tasks = this.getTasks();
            tasks.push(task);
            this.saveTasks(tasks)
        },
        saveTasks: function(tasks) {
            localStorage.setItem(this.key, JSON.stringify(tasks));
        },
        getTasks: function() {
            const rawData = localStorage.getItem(this.key);
            if (!rawData) {
                return [];
            } else {
                const parsedData = JSON.parse(rawData);
                return !!parsedData ? parsedData : [];
            }
        }
    }

    const buttons = {
        addNewTask: document.getElementById("new-task-add"),
        saveNewTask: document.getElementById("new-task-save"),
        cancelSavingNewTask: document.getElementById("new-task-cancel"),
        initHandlers: function() {
            this.addNewTask.addEventListener("click", () => {
                newTaskModal.setVisible(true);
            });
            this.cancelSavingNewTask.addEventListener("click", () => {
                newTaskModal.setVisible(false);
            })
            this.saveNewTask.addEventListener("click", () => {
                const newTask = createNewTask();
                if (newTask) {
                    _localStorage.saveNewTask(newTask);
                    newTaskModal.setVisible(false);
                    showTasks();
                }
            });
        }
    }

    const newTaskModal = {
        component: document.getElementById("new-task-modal"),
        setVisible: function(isVisible) {
            if (this.component) {
                if (isVisible) {
                    this.component.classList.remove("new-task-modal_hidden")
                } else {
                    this.component.classList.add("new-task-modal_hidden")
                }
            }
        }
    }

    buttons.initHandlers();
    showTasks();
}