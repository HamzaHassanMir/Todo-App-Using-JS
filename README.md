TODO List App
A responsive and interactive task management application built using HTML, CSS, and JavaScript. Organize your daily workflow with a clean interface and persistent data storage.

Features
Task Persistence: Automatically saves your tasks to localStorage so they remain available after refreshing the page.

Interactive Checkbox: Mark tasks as completed with a checkbox, which triggers a visual update and a completion alert.

In-Place Editing: Double-click on any task text to quickly rename or update your items using a prompt.

Keyboard Support: Add new tasks efficiently by pressing the Enter key.

Responsive Gradient UI: A modern design featuring dynamic linear gradients and a mobile-friendly layout.

How to Use
Clone this repository:

Bash

git clone <repository-url>
Navigate to the project directory:

Bash

cd <repository-name>
Open the index.html file in your preferred web browser.

Manage your tasks: * Enter a task in the input field and click Add or press Enter.

Double-click a task's text to edit it.

Click the Delete button to remove a task from your list.

Code Overview
The application is implemented across three core files with the following responsibilities:

HTML Structure (index.html): Defines the task input, add button, and the unordered list container for tasks.

Dynamic Styling (style.css): Handles the vibrant gradient background, button hover effects, and task list shadows.

Logic Engine (script.js): Manages the application state, DOM creation, and localStorage synchronization.

Key Functions
createItem(task, index): Generates the DOM elements for a task, including the checkbox, text span, and delete button.

savToLocal(): Synchronizes the current task array with the browser's local storage.

display(): Clears the current list and re-renders all tasks from the data array to the UI.

addNewTasks(): Validates user input and adds a new task object to the state.

Setup
Ensure all project files (index.html, style.css, script.js) are in the same directory.

The index.html file is already configured to link the stylesheet and script correctly.

No external API keys or dependencies are required, as the app uses vanilla JavaScript and browser APIs.

Contributing
Contributions are welcome! Feel free to fork the repository, make changes, and submit a pull request. Suggestions for features like task categories or drag-and-drop reordering are greatly appreciated.
