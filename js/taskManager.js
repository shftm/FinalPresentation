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


  };


//exporting this file to index.js
//module.exports = TaskManager

