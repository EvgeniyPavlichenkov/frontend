window.onload = () => {
    const addTaskButton = document.getElementById('new-task-add');
    const saveTaskButton = document.getElementById('new-task-save');
    const cancelTaskButton = document.getElementById('new-task-cancel');

    const newTaskModal = document.getElementById('new-task-modal');


    const setNewTaskModalVisible = (isVisible) => {
        if (newTaskModal) {
            if (isVisible) {
                newTaskModal.classList.remove('new-task-modal_hidden')
            } else {
                newTaskModal.classList.add('new-task-modal_hidden')
            }
        }
    }

    addTaskButton.addEventListener('click', () => {
        setNewTaskModalVisible(true);
    });
    //
    cancelTaskButton.addEventListener('click', () => {
        setNewTaskModalVisible(false);
    })
}