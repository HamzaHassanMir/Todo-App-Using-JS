📋 TaskMaster: Persistent TODO App
A clean, high-performance, and responsive Todo List application built with vanilla JavaScript. This project focuses on state management through LocalStorage and interactive DOM manipulation.

✨ Features
Data Persistence: Uses localStorage to ensure your tasks are saved and retrieved even after browser restarts.

Dynamic UI: Real-time list updates with interactive completion checkboxes and delete functionality.

Edit in Place: Features a double-click interaction on task text to rename or edit existing items.

Modern Aesthetics: Styled with a vibrant linear-gradient background and clean, card-based task layouts.

Keyboard Support: Quickly add tasks by pressing the Enter key within the input field.

🚀 How to Use
Clone this repository:

Bash

git clone https://github.com/your-username/todo-list-app.git
Navigate to the project directory:

Bash

cd todo-list-app
Launch the App: Open the index.html file directly in your browser.

Manage Tasks:

Type a task in the input field and click Add or press Enter.

Click the checkbox to mark a task as completed (triggers a completion alert).

Double-click the task text to edit its content.

Click "Delete" to permanently remove a task.

🛠️ Technical Overview
The application is built using three core components:

HTML5 Structure: Uses semantic elements and an unordered list (<ul>) to anchor the dynamic content.

CSS3 Styling: Utilizes complex linear gradients and Flexbox to ensure the app is centered and visually engaging.

JavaScript Logic:

savToLocal(): Serializes the tasks array into a JSON string for persistent storage.

createItem(task, index): A factory function that generates DOM nodes for each task, including event listeners for editing and deletion.

display(): Refreshes the UI by clearing the current list and re-rendering it from the source array.

💡 Professional Improvement Tips
To take this repository even further, you could consider these additions:

GitHub Pages: Deploy the app so recruiters can see it live. Go to Settings > Pages and select your main branch.

Code Refactoring: Wrap your script in an IIFE (Immediately Invoked Function Expression) to avoid polluting the global namespace.

Visual Feedback: Replace the standard alert("Congrats, Task Completed") with a custom CSS toast notification for a more polished user experience.
