const input = document.querySelector("input")
const add = document.querySelector("#main-btn")
const todo = document.querySelector(".task")

add.addEventListener("click",() => {

    if(input.value.trim() === "") return
    
    todo.innerHTML += `<div class="li">
                <h3>${input.value}</h3>
                <div class="li-btn">
                    <button class="edit"><i class="ri-edit-line"></i></button>
                    <button class="delete"><i class="ri-delete-bin-5-line"></i></button>
                    <button class="done-btn"><i class="ri-check-line"></i></button>
                </div>
            </div>`

    input.value = ""
})

todo.addEventListener("click", (e) => {
    //for delete task
    if (e.target.closest(".delete")) {
        e.target.closest(".li").remove();
    }

    //for edit task
    if (e.target.closest(".edit")) {

        let task = e.target.closest(".li").querySelector("h3");

        let newTask = prompt("Edit Task", task.textContent);

        if (newTask && newTask.trim() !== "") {
            task.textContent = newTask;
        }
    }

    //done
    if(e.target.closest(".done-btn")){
        let task = e.target.closest(".li").querySelector("h3");
        let icon = e.target.closest(".done-btn").querySelector("i")

        if(task.classList.toggle("alldone")){
            icon.className = "ri-arrow-go-back-line"
            e.target.closest(".li").style.opacity = "0.6";
            e.target.closest(".done-btn").classList.toggle("undo-btn")
        }else{
            icon.className = "ri-check-line";
            e.target.closest(".li").style.opacity = "1";
            e.target.closest(".done-btn").classList.toggle("undo-btn")
            e.target.closest(".done-btn").st
        }
    }
});