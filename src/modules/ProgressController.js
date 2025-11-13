import { getElement, getElementById } from '../utils/dom.js';
import { animateProgress, setProgressValue, validateProgressValue } from '../utils/progress.js';

export class ProgressController {
    constructor() {
        this.progressElement = getElement('#progress');
        this.valueElement = getElement('#progress-value');
        this.valueInput = getElementById('value-number');
        this.animateCheckbox = getElementById('animateCheck');
        this.hideCheckbox = getElementById('hideCheck');

        this.currentInterval = null;
        this.isInitialized = false;
    }

    init() {
        if (this.isInitialized) return;
        
        this.setupValueInput();
        this.setupAnimateToggle();
        this.setupHideToggle();
        this.reset();
        
        this.isInitialized = true;
    }

    setupValueInput() {
        this.valueInput.addEventListener('input', (e) => {
            this.handleValueChange(e.target.value);
        });
    }

    handleValueChange(inputValue) {
        const value = parseInt(inputValue, 10);
        
        if (!validateProgressValue(value)) {
            if (inputValue !== '' && !isNaN(value)) {
                console.error('Неправильное значение. Допустимый диапазон: 0-100');
            }
            return;
        }

        this.updateProgress(value);
    }

    updateProgress(targetValue) {
        if (this.currentInterval) {
            clearInterval(this.currentInterval);
        }

        const finalValue = isNaN(targetValue) ? 0 : targetValue;
        this.currentInterval = animateProgress(
            this.progressElement,
            this.valueElement,
            finalValue
        );
    }

    setupAnimateToggle() {
        this.animateCheckbox.addEventListener('change', (e) => {
            this.toggleAnimation(e.target.checked);
        });
    }

    toggleAnimation(enabled) {
        if (enabled) {
            this.progressElement.classList.add('progress--animated');
        } else {
            this.progressElement.classList.remove('progress--animated');
        }
    }

    setupHideToggle() {
        this.hideCheckbox.addEventListener('change', (e) => {
            this.toggleVisibility(e.target.checked);
        });
    }

    toggleVisibility(hidden) {
        if (hidden) {
            this.progressElement.classList.add('progress--hidden');
        } else {
            this.progressElement.classList.remove('progress--hidden');
        }
    }

    reset() {
        if (this.currentInterval) {
            clearInterval(this.currentInterval);
            this.currentInterval = null;
        }

        this.valueInput.value = '';
        this.animateCheckbox.checked = false;
        this.hideCheckbox.checked = false;
        
        this.progressElement.classList.remove('progress--animated', 'progress--hidden');
        setProgressValue(this.progressElement, this.valueElement, 0);
    }
}

