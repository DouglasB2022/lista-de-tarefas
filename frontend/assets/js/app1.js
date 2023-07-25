let id = 1

window.onload = () =>{
    get_username(id);
    get_user_tasks(id);
}

const get_username = (id) =>{
    fetch(`http://localhost:3000/user/${id}`)
    .then(response =>{
        if(response.status === 200){
           return response.json();
        } else{
            console.log('Erro');
        }
    })
        .then(dados =>{
            if(dados.length === 0){
                console.log('Error')
            } else {
                document.querySelector('#username').textContent = dados[0].username;
            }
        })
}

const get_user_tasks = (id) =>{
    fetch(`http://localhost:3000/user/${id}/tasks`)
    .then(response =>{
        if(response.status === 200){
           return response.json();
        } else{
            console.log('Erro');
        }
    })
        .then(tarefas =>{
            if(tarefas.length === 0){
                
                document.querySelector("#no_tasks").classList.remove("d-none");
                document.querySelector("#total_tasks").classList.add("d-none");
            } else {
                
                
                

                tarefas.forEach(tarefa => {
                    
                    
                    let html = `
                    <div class="col-12 border border-secondary rounded p-3 shadow">
            
                        <div class="row align-items-center">
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                            <h6 class="me-2 text-info"><i class="fa-solid fa-circle-chevron-right"></i></h6>
                            <h6 >${tarefa.task_text}</h6> 
                            
                            
                                </div>
                            </div>
                            <div class="col-2">
            
                                <select id="tasks_status" class="form-select w-15 p-1">
                                    <option value="new" ${tarefa.task_status == "new" ? 'selected' : ''}>New</option>
                                    <option value="in progress" ${tarefa.task_status == "in progress" ? 'selected' : ''}>In progress</option>
                                    <option value="canceled" ${tarefa.task_status == "canceled" ? 'selected' : ''}>Canceled</option>
                                    <option value="done" ${tarefa.task_status == "done" ? 'selected' : ''}>Done</option>
                                </select>
            
                            </div>

                            <div class="col-2 text-end" >

                            
                                <span class="edit_link">
                                <i class="fa-solid fa-pen me-2">Edit</i></span>

                            </div>
                            
                            <div class="col-2 text-end ">
                                <span class="delete_link" data-id-delete="${tarefa.id_user}">
                                <i class="fa-regular fa-trash-can me-2"></i>Delete</span>
                            </div>

                        </div>
                    </div>`;

                    
                    document.querySelector("#tasks_container").innerHTML = null;
                    document.querySelector("#tasks_container").innerHTML = html;

                    let new_task =  document.createElement("div");
                    new_task.classList.add("row", "mb-3");
                    new_task = html;

                    
                    // document.querySelector("#tasks_container").appendChild(new_task);
                });

                document.querySelector("#no_tasks").classList.add("d-none");
                document.querySelector("#total_tasks > div > span").textContent = tarefas.length

                
            }
        })
}
    