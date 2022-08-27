document.addEventListener("DOMContentLoaded", () => {

  let formElement=document.querySelector("form")
  formElement.addEventListener("submit", (e) => {

    e.preventDefault()

    listOfTask(e.target.new_task_description.value)
    formElement.reset()
  })

  function listOfTask(tasks) {
    let p = document.createElement("p")
    p.textContent = `${tasks}  `
    let btn = document.createElement("button")
    btn.addEventListener("click", deleteList)
    btn.textContent = " x "
    p.appendChild(btn)
  
    document.getElementById("list").appendChild(p)
    
  }

  function deleteList(e) {
    e.target.parentNode.remove()
  }



});
