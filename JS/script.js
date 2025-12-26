
const input = document.getElementById('todoInput');
const addbtn = document.getElementById('btn');
const list = document.getElementById('taskList');

// Checking if any tasks are saved in local storage
const savedTask = localStorage.getItem('tasks');
const tasks = savedTask? JSON.parse(savedTask) : [];

function savToLocal(){
    // saving tasks array to localstorage
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

// Creating DOM node to add new tasks in list and append the element (ul)
function createItem(task,index){
    const li = document.createElement('li');

    // check to check if tasks are completed
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.checked = !!task.completed;
    checkBox.addEventListener("change",()=>{
        task.completed = checkBox.checked;
        textSpan.style.textDecoration = task.completed? 'underline' : 'none';
        alert("Congrats, Task Completed");
        savToLocal();
    })

    const textSpan = document.createElement("span");
    textSpan.textContent = task.text;
    textSpan.style.margin = '0 10px';
    if(task.completed){
        textSpan.style.textDecoration = 'underline';
    }
    textSpan.addEventListener("dblclick", ()=>{
        const newText = prompt("Edit Task", task.text);
        if(newText !== null){
            task.text = newText.trim()
            textSpan.textContent = task.text;
            savToLocal();
        }
    })
    
    const deletebtn = document.createElement('button');
    deletebtn.textContent = 'Delete';
    deletebtn.addEventListener('click',()=>{
        tasks.splice(index,1);             // deletes one element from array
        display();
        savToLocal();
    })

    li.appendChild(checkBox);
    li.appendChild(textSpan);
    li.appendChild(deletebtn);
    return li
}

// Display the Tasks List on UI
function display(){
    list.innerHTML = '';

    tasks.forEach((task,index) => {
        const node = createItem(task,index);
        list.appendChild(node);
    });
    
}

function addNewTasks(){
    const text = input.value.trim();
    if(!text){
        return;
    }
    tasks.push({text:text, completed:false});
    input.value="";
    display();
    savToLocal();
}

addbtn.addEventListener("click",addNewTasks);
input.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        addNewTasks();
    }
})
display();