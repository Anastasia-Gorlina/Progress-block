const DEGREES_PER_PERCENT = 3.6;
const ANIMATION_SPEED = 20;

/**
 * Устанавливает значение прогресс-бара с анимацией
 * @param {HTMLElement} progressElement - элемент прогресс-бара
 * @param {HTMLElement} valueElement - элемент для отображения значения
 * @param {number} targetValue - целевое значение (0-100)
 * @returns {number} - ID интервала (для возможности очистки)
 */
export function animateProgress(progressElement, valueElement, targetValue) {
    let currentValue = 0;
    let intervalId;

    const updateProgress = () => {
        const degrees = currentValue * DEGREES_PER_PERCENT;
        progressElement.style.background = `conic-gradient(var(--primary-color) ${degrees}deg, var(--secondary-color) 0deg)`;
        
        if (valueElement) {
            valueElement.textContent = `${currentValue}%`;
        }

        if (currentValue >= targetValue) {
            clearInterval(intervalId);
            return;
        }

        currentValue++;
    };

    intervalId = setInterval(updateProgress, ANIMATION_SPEED);
    return intervalId;
}

/**
 * Устанавливает значение прогресс-бара без анимации
 * @param {HTMLElement} progressElement - элемент прогресс-бара
 * @param {HTMLElement} valueElement - элемент для отображения значения
 * @param {number} value - значение (0-100)
 */
export function setProgressValue(progressElement, valueElement, value) {
    const degrees = value * DEGREES_PER_PERCENT;
    progressElement.style.background = `conic-gradient(var(--primary-color) ${degrees}deg, var(--secondary-color) 0deg)`;
    
    if (valueElement) {
        valueElement.textContent = `${value}%`;
    }
}

/**
 * Валидирует значение прогресс-бара
 * @param {number} value - значение для проверки
 * @returns {boolean} - true если значение валидно
 */
export function validateProgressValue(value) {
    return !isNaN(value) && value >= 0 && value <= 100;
}

