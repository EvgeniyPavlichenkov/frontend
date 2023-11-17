window.onload = () => {
    const TIMER_DEFAULT_VALUE = 60;

    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const resetButton = document.getElementById('reset');
    const timerValueComponent = document.getElementById('timer-value');
    const timerValueContainer = document.getElementById('timer-container');

    let timerValue = 0;
    let timerId = 0;
    let timerStatus = 0; // 0 - stopped, 1 - running, 2 - paused


    const updateTimerValueInDocument = () => {
        if (timerValueComponent) {
            timerValueComponent.innerText = timerValue;
            timerValueComponent.style = "color: red";
        }
    }

    const setTimerContainerVisible = (isVisible) => {
        if (isVisible) {
            timerValueContainer.classList.remove('hidden');
        } else {
            timerValueContainer.classList.add('hidden');
        }
    }

    const stopCountdown = () => {
        if (timerId) {
            clearInterval(timerId);
            timerStatus = 2;
            startButton.disabled = false;
            return true;
        }
        return false;
    }


    const startOrResumeCountdown = () => {
        if (timerId && timerStatus === 1) {
            return;
        }

        timerValue = timerId ? timerValue : TIMER_DEFAULT_VALUE;
        timerStatus = 1;
        setTimerContainerVisible(true);
        updateTimerValueInDocument();
        startButton.disabled = true;
        timerId = setInterval(() => {
            if (timerValue > 0) {
                timerValue--;
                updateTimerValueInDocument();
            } else {
                resetCountdown();
            }
        }, 1000)
    }

    const resetCountdown = () => {
        if (stopCountdown()) {
            timerId = 0;
            timerValue = 0;
            timerStatus = 0;
            setTimerContainerVisible(false);
            startButton.disabled = false;
        }
    }


    // add button events
    if (startButton) {
        startButton.addEventListener('click', startOrResumeCountdown);
    }

    if (stopButton) {
        stopButton.addEventListener('click', stopCountdown);
    }

    if (resetButton) {
        resetButton.addEventListener('click', resetCountdown);
    }
    //
}