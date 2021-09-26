//fucntion to return the HTML for individual task

function createTaskHtml (name, assignedto, duedate, description, status){
   const html = `  <!-- card one starts -->
  <div class=carditem>
       <!-- bootstrap card code starts -->
       <div class="card" style="width: 100%;">
        <div class="card-header">
          ${name}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${assignedto}</li>
          <li class="list-group-item">${duedate}</li>
        </ul>
        <div class="card-body">
           <p class="card-text">${description}</p>
           <h5 class="card-title" >${status}</h5>
        </div>
      </div>
       <!-- bootstrap card code ends -->
  </div>
    <!-- card one ends -->
  `

  //return HTML from the fucntion
  return html;  // this gives a card with details in html

};








// Create the TaskManager class
class TaskManager {
    constructor(currentId = 0) {
      this.currentId =currentId;
      this._tasks = [];
     
    }

    //getter method to access array value  safely
    get tasks() {
      return this._tasks;
    }


    addnewTask (taskname, assignedto, duedate, description, status ){

      let newTaskObj = {
        id : this.currentId,
        taskkname: taskname,
        assiggnTo: assignedto,
        dueDdte : duedate,
        descptn : description,
        stus: status
      }
      
     //incrementing id
     this.currentId++;
     

     //pushing the new object to the array-referencing to get method
     this.tasks.push(newTaskObj);
    

    } 
   

    //to desplay the  html card (task)
    
    render (){
      //creating empty array to hold all the html task
      let taskToDoList = [];
      let taskInProgressList = [];
      let taskReviewList = [];
      let taskDoneList = [];


      //creating loop to loop over tasks array (which holds objects)
      for(let i=0; i<this.tasks.length; i++) {
        
        let task = this.tasks[i];

        // Format the date
        console.log(task.dueDdte)
      const date = new Date(task.dueDdte);
      console.log(date);
      const formattedDate =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
        console.log(formattedDate);

       //create an if statement

        // Create the task html to store the html of current task
      let taskHtml = createTaskHtml(
        task.taskkname,
        task.assiggnTo,
        formattedDate,
        task.descptn,
        task.stus,
      );

      // Push it to the tasksHtmlList array
      if(task.stus==="To Do"){
        taskToDoList.push(taskHtml);
      } else if(task.stus==="Review"){
        taskReviewList.push(taskHtml);

      }else if(task.stus==="In Progress"){
        taskInProgressList.push(taskHtml);

      }else if(task.stus==="Done"){
        taskDoneList.push(taskHtml);
}
      }
    // Create the tasksHtml by joining each item in the tasksHtmlList
    // with a new line in between each item.
    let tasksHtml = taskToDoList.join("\n");

    // Set the inner html of the tasksList on the page
    document.querySelector("#taskstodo").innerHTML = tasksHtml;

     tasksHtml = taskReviewList.join("\n");

    // Set the inner html of the tasksList on the page
    document.querySelector("#taskreview").innerHTML = tasksHtml;

    tasksHtml = taskInProgressList.join("\n");

    // Set the inner html of the tasksList on the page
    document.querySelector("#taskinprog").innerHTML = tasksHtml;

    tasksHtml = taskDoneList.join("\n");

    // Set the inner html of the tasksList on the page
    document.querySelector("#taskdone").innerHTML = tasksHtml;



    
      }

    };


  


//exporting this file to index.js
//module.exports = TaskManager

