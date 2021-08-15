const taskInput= document.querySelector('#taskInput');

const addTask= document.querySelector('#btn');
const tasks= document.querySelector('#tasks')


addTask.addEventListener('click',function(){
const newItems= document.createElement('li')
newItems.classList.add("items")
const taskName= taskInput.value

newItems.innerText=taskName
tasks.appendChild(newItems)

})