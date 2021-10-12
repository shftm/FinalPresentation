// Initialize a new TaskManager with currentId set to 0
const taskinstance = new TaskManager(0);
console.log(taskinstance);
taskinstance.load();
taskinstance.render();


//testing html task
let taskHtml  = createTaskHtml ('aaa', 'bbb', 'ccc', 'ddd', 'ddd');
console.log(taskHtml);

// Select the New Task Form
const form = document.querySelector("#taskform");

const Ttask = document.querySelector("#taskname");
const Aasign = document.querySelector("#assignTo");
const Ddue = document.querySelector("#dueDate");
const Ddes = document.querySelector("#description");
const Sstatus = document.querySelector("#status");
const Cchange = document.querySelector("#savebtn");
const Cclose = document.querySelector("#closeb");

const Option1 = document.querySelector("#opt1");
const Option2 = document.querySelector("#opt2");


const error1 = document.querySelector("#error1");
const error2 = document.querySelector("#error2");
const error3 = document.querySelector("#error3");
const error4 = document.querySelector("#error4");
const error5 = document.querySelector("#error5");


Cchange.addEventListener('click', validFormFieldInput);

function resetForm(){
//remove previous error message
error1.innerHTML = "";
error2.innerHTML = "";
error3.innerHTML = "";
error4.innerHTML = "";
error5.innerHTML = "";

Ttask.value = "";
Aasign.selectedIndex = 0;
Ddue.value = "";
Ddes.value = "";
Sstatus.selectedIndex = 0;
}
// add done button

    
Cclose.addEventListener('click', function(){
resetForm();
});

function validFormFieldInput() {

    // prevent default action - event should be passed into the brackets (eg-"submit")
    //event.preventDefault('submit'); 
    let hasError = false;
  
    //Check if the Task Name input value is more than 5 characters.
    if(Ttask.value.length < 5){
        error1.innerHTML = "Please enter a name with more than 5 charecters";
        error1.style.color = 'red';
        hasError = true;
        
    }
    else {

    }
     //Check if the Assigned To value is more than 5 characters.
    if (Aasign.value === "select an option" ){
        error2.innerHTML = "Please select an option from the list";
        error2.style.color = 'red';
        hasError = true;
    }
    else {
        error2.innerHTML = "";
    }
    //Check if the Task Due Date input value is not empty.
     if (Ddue.value === "" ){
        error3.innerHTML = "Please select a date";
        error3.style.color = 'red'
        hasError = true;
    }
    else {
        error3.innerHTML = "";
    }

    //Check if the Task Description input value is more than 5 characters.
     if (!Ddes || Ddes.value.length <5 ) {
        error4.innerHTML = "Please write a description with more than 5 characters";
        error4.style.color = 'red'
        hasError = true;
    }
    else {
        error4.innerHTML = "";
    }

    //Check if the Task Status input value is not empty.
     if (Sstatus.value === "select an option") {
        error5.innerHTML = "Select an option";
        error5.style.color = 'red'
        hasError = true;
    }
    else{
        
        error5.innerHTML = "";


    }

    if (hasError) {
        return;
    }

   

    //call the method from the class
    taskinstance.addnewTask(Ttask.value, Aasign.value, Ddue.value, Ddes.value,Sstatus.value)
    
    console.log(taskinstance._tasks);
    

     //clearing all form field values after submission
   resetForm();   
    taskinstance.save();
   //calling render method
   taskinstance.render();    
};

// to to flex-------------------------------

const taskList = document.querySelector("#taskstodo");
// Add an 'onclick' event listener to the Tasks List
taskList.addEventListener("click", (event) => {
  // Check if a "Mark As Done" button was clicked
  if (event.target.classList.contains("done-button")) {
    const parentTask = event.target.parentElement.parentElement.parentElement;
      console.log(parentTask);
    // Get the taskId of the parent Task and turn it into a number.
    const taskId = Number(parentTask.dataset.taskId);
    console.log(taskId);
    // Get the task from the TaskManager using the taskId
    const catchTask = taskinstance.getTaskById(taskId);
    console.log(catchTask);
    // Update the task status to 'DONE'
    catchTask.stus = "Done"; 
    taskinstance.save();
    // Render the tasks
    taskinstance.render();
  }
  //-delete task    
  if (event.target.classList.contains("delete-button")) {    
    const parentTask =
    event.target.parentElement.parentElement.parentElement;
    const taskId = Number(parentTask.dataset.taskId);
    taskinstance.deleteTask(taskId);    
    taskinstance.save();
    taskinstance.render();
    
  }
});
// to do flex ends--------------

//inprogress flex starts -----
const taskListProg = document.querySelector("#taskinprog");
// Add an 'onclick' event listener to the Tasks List
taskListProg.addEventListener("click", (event) => {
  // Check if a "Mark As Done" button was clicked
  if (event.target.classList.contains("done-button")) {
    const parentTask = event.target.parentElement.parentElement.parentElement;
      console.log(parentTask);
    // Get the taskId of the parent Task and turn it into a number.
    const taskId = Number(parentTask.dataset.taskId);
    console.log(taskId);
    // Get the task from the TaskManager using the taskId
    const catchTask = taskinstance.getTaskById(taskId);
    console.log(catchTask);
    // Update the task status to 'DONE'
    catchTask.stus = "Done";
    taskinstance.save();
    // Render the tasks
    taskinstance.render();
  }

  //-delete task    
  if (event.target.classList.contains("delete-button")) {    
    const parentTask =
    event.target.parentElement.parentElement.parentElement;
    const taskId = Number(parentTask.dataset.taskId);
    taskinstance.deleteTask(taskId);    
    taskinstance.save();
    taskinstance.render();
    
  }
});
//inprogress flex ends-----

//review flex starts ------
const taskListRev = document.querySelector("#taskreview");
// Add an 'onclick' event listener to the Tasks List
taskListRev.addEventListener("click", (event) => {
  // Check if a "Mark As Done" button was clicked
  if (event.target.classList.contains("done-button")) {
    const parentTask = event.target.parentElement.parentElement.parentElement;
      console.log(parentTask);
    // Get the taskId of the parent Task and turn it into a number.
    const taskId = Number(parentTask.dataset.taskId);
    console.log(taskId);
    // Get the task from the TaskManager using the taskId
    const catchTask = taskinstance.getTaskById(taskId);
    console.log(catchTask);
    // Update the task status to 'DONE'
    catchTask.stus = "Done";
    taskinstance.save();
    // Render the tasks
    taskinstance.render();
  }

  //-delete task    
  if (event.target.classList.contains("delete-button")) {    
    const parentTask =
    event.target.parentElement.parentElement.parentElement;
    const taskId = Number(parentTask.dataset.taskId);
    taskinstance.deleteTask(taskId);    
    taskinstance.save();
    taskinstance.render();    
  }
});
//review flex ends---

//done flex item starts here
const taskListDone = document.querySelector("#taskdone");
// Add an 'onclick' event listener to the Tasks List
taskListDone.addEventListener("click", (event) => {    
  if (event.target.classList.contains("delete-button")) {    
    const parentTask = event.target.parentElement.parentElement.parentElement;
    const taskId = Number(parentTask.dataset.taskId);
    taskinstance.deleteTask(taskId);    
    taskinstance.save();
    taskinstance.render();
    
  }
});

// done flex item ends here 
