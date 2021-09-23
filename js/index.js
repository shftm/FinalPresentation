
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

function validFormFieldInput() {
    //Check if the Task Name input value is more than 5 characters.
    if(Ttask.value.length < 5){
        error1.innerHTML = "Enter a name with more than 5 charecters";
        error1.style.color = 'red';
    } 
    else {

    }
     //Check if the Assigned To value is more than 5 characters.
    if (Aasign.value === "select an option" ){
        error2.innerHTML = "Select an option from the list";
        error2.style.color = 'red';
    }   
    else {

    }  
    //Check if the Task Due Date input value is not empty.
     if (Ddue.value === "" ){
        error3.innerHTML = "Select a date";
        error3.style.color = 'red'
    }
    else {

    }

    //Check if the Task Description input value is more than 5 characters.
     if (!Ddes || Ddes.value.length <5) {
        error4.innerHTML = "Write a description with more than 5 characters";
        error4.style.color = 'red'
    }
    else {

    }
       
    //Check if the Task Status input value is not empty.
     if (Sstatus.value === "select an option") {
        error5.innerHTML = "Select an option";
        error5.style.color = 'red'
    }
    else{
      
    }
};