document.addEventListener("DOMContentLoaded", () => {
  // add a submit event listener to the form.  
  document.querySelector("form").addEventListener("submit", (e)=>{
    //Prevent the Default behavior of a "submit" event
    e.preventDefault();
    //create list element
    const li = document.createElement("li");
    //assign list content to be what's provided in task description field
    li.textContent = document.querySelector("#new-task-description").value;
    //Fix bullets to have a value
    li.textContent ? document.querySelector("#tasks").append(li) : li.textContent

    //create button element
    const button = document.createElement("button");
    //define handleDelete - use e.target to define target of event
    const handleDelete = (e) =>{
      //we are deleting the task itself that is the parent of the x button, so delete the parent node
      e.target.parentNode.remove()
    }
    //incorporate the event listener for the x button
    button.addEventListener("click", handleDelete)
    //give exit out feel
    button.textContent = "x"

    //append functioning button to the li element 
    li.append(button)


    //resets input field to blank
    e.target.reset()

    })
  })




