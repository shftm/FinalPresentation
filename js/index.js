// Initialize a new TaskManager with currentId set to 0
const taskinstance = new TaskManager(0);
console.log(taskinstance);

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

Cclose.addEventListener('click', function(){
    //remove previous error message
    error1.innerHTML = "";
    error2.innerHTML = "";
    error3.innerHTML = "";
    error4.innerHTML = "";
    error5.innerHTML = "";

    Ttask.value = "";
    Aasign.value = "";
    Ddue.value = "";
    Ddes.value = "";
    Sstatus.value = "";
});

function validFormFieldInput() {

    // prevent default action - event should be passed into the brackets (eg-"submit")
    //event.preventDefault('submit'); 
    let hasError = false;
  
    //Check if the Task Name input value is more than 5 characters.
    if(Ttask.value.length < 5){
        error1.innerHTML = "Enter a name with more than 5 charecters";
        error1.style.color = 'red';
        hasError = true;
        
    }
    else {

    }
     //Check if the Assigned To value is more than 5 characters.
    if (Aasign.value === "select an option" ){
        error2.innerHTML = "Select an option from the list";
        error2.style.color = 'red';
        hasError = true;
    }
    else {
        error2.innerHTML = "";
    }
    //Check if the Task Due Date input value is not empty.
     if (Ddue.value === "" ){
        error3.innerHTML = "Select a date";
        error3.style.color = 'red'
        hasError = true;
    }
    else {

    }

    //Check if the Task Description input value is more than 5 characters.
     if (!Ddes || Ddes.value.length <5) {
        error4.innerHTML = "Write a description with more than 5 characters";
        error4.style.color = 'red'
        hasError = true;
    }
    else {

    }

    //Check if the Task Status input value is not empty.
     if (Sstatus.value.length > 0) {
        error5.innerHTML = "Select an option";
        error5.style.color = 'red'
        hasError = true;
    }
    else{
        //if false focus to the input fields



    }

    if (hasError) {
        return;
    }

    //remove previous error message
    error1.innerHTML = "";
    error2.innerHTML = "";
    error3.innerHTML = "";
    error4.innerHTML = "";
    error5.innerHTML = "";

    //call the method from the class
    taskinstance.addnewTask(Ttask.value, Aasign.value, Ddue.value, Ddes.value,Sstatus.value)
    console.log(taskinstance._tasks);
    

    //clearing all form field values after submission
    let clearFields = () => {
        Ttask.value = "";
        Aasign.value = "";
        Ddue.value = "";
        Ddes.value = "";
        Sstatus.value = "";
    }
   

   //calling render method
   taskinstance.render();


    //closing the modal after clicking
    // var myModal = new bootstrap.Modal(document.getElementById('createTaskModal')); // after validation occurs and it is successful, you can now use the variable you defined to call a BootStrap method - this would be inside your successful if statement


//     var myModal = new bootstrap.Modal(document.getElementById('createTaskModal')); // after validation occurs and it is successful, you can now use the variable you defined to call a BootStrap method - this would be inside your successful if statement
//  myModal.hide();
//     //  myModal.hide();


};

