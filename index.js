// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.

/**
 * Creates an element with specified tag and attributes
 * @param {string} tag - The HTML tag name
 * @param {Object} attributes - Object containing attribute key-value pairs
 * @returns {HTMLElement} The created element
 */
function createElementWithAttributes(tag, attributes) {
  const element = document.createElement(tag);
  Object.keys(attributes).forEach(attr => {
    element.setAttribute(attr, attributes[attr]);
  });
  return element;
}

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

/**
 * Displays an error message in the DOM
 * @param {string} message - The error message to display
 */
function displayError(message) {
  const errorElement = document.getElementById('error-message');
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.classList.remove('hidden');
  }
}

/**
 * Hides the error message
 */
function hideError() {
  const errorElement = document.getElementById('error-message');
  if (errorElement) {
    errorElement.textContent = '';
    errorElement.classList.add('hidden');
  }
}

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

/**
 * Adds content to a DOM element
 * @param {string} containerId - The ID of the container element
 * @param {string} content - The content to add
 */
function addElementToDOM(containerId, content) {
  const container = document.getElementById(containerId);
  if (container) {
    const element = document.createElement('div');
    element.textContent = content;
    container.appendChild(element);
  }
}

/**
 * Removes an element from the DOM by ID
 * @param {string} elementId - The ID of the element to remove
 */
function removeElementFromDOM(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.remove();
  }
}

// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

/**
 * Simulates a button click and updates the DOM with a message
 * @param {string} containerId - The ID of the container to update
 * @param {string} message - The message to display
 */
function simulateClick(containerId, message) {
  const container = document.getElementById(containerId);
  if (container) {
    const element = document.createElement('div');
    element.textContent = message;
    container.appendChild(element);
  }
}

/**
 * Handles form submission and updates the DOM
 * @param {string} formId - The ID of the form element
 * @param {string} containerId - The ID of the container to update with form data
 */
function handleFormSubmit(formId, containerId) {
  const form = document.getElementById(formId);
  const container = document.getElementById(containerId);
  
  if (!form || !container) {
    displayError('Form or container element not found');
    return;
  }

  const input = form.querySelector('input[type="text"]');
  if (!input) {
    displayError('Input element not found');
    return;
  }

  const inputValue = input.value.trim();
  
  // Hide any previous errors
  hideError();
  
  if (inputValue === '') {
    displayError('Input cannot be empty');
    return;
  }

  // Clear previous content and add new content
  const element = document.createElement('div');
  element.textContent = inputValue;
  container.appendChild(element);
  
  // Clear the input
  input.value = '';
}

// Initialize event listeners when DOM is loaded
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    // Add event listener for the simulate click button
    const simulateButton = document.getElementById('simulate-click');
    if (simulateButton) {
      simulateButton.addEventListener('click', () => {
        simulateClick('dynamic-content', 'Button Clicked!');
      });
    }

    // Add event listener for form submission
    const form = document.getElementById('user-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        handleFormSubmit('user-form', 'dynamic-content');
      });
    }
  });
}

// Export functions for testing (CommonJS)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    addElementToDOM,
    removeElementFromDOM,
    simulateClick,
    handleFormSubmit,
    displayError,
    hideError,
    createElementWithAttributes,
  };
}
