export const getElement = (selector) => document.querySelector(selector);
export const getElements = (selector) => document.querySelectorAll(selector);
export const getElementById = (id) => document.getElementById(id);

export const addClass = (element, className) => {
    if (element) {
        element.classList.add(className);
    }
};

export const removeClass = (element, className) => {
    if (element) {
        element.classList.remove(className);
    }
};

export const toggleClass = (element, className, condition) => {
    if (element) {
        if (condition) {
            addClass(element, className);
        } else {
            removeClass(element, className);
        }
    }
};

