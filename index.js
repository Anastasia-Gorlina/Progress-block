import { ProgressController } from './src/modules/ProgressController.js';

document.addEventListener('DOMContentLoaded', () => {
    const progressController = new ProgressController();
    progressController.init();
});
