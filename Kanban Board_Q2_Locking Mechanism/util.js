function add_event_to_lock(lock,task){
    
    lock.addEventListener('click',function(e){
        //console.log(task)
        if(e.target.innerText ==='Locked'){
            e.target.innerText='Unlocked';  
            task.setAttribute("contenteditable",true)  
        }
        else{
            e.target.innerText='Locked';
            task.setAttribute("contenteditable",false)
        }
        
    })
}

function passtasktoeventlistner(ticket){
    //console.log(ticket) 
    const task = ticket.querySelector('.task-area') 
    const lock = ticket.querySelector('.ticket-lock')
    //console.log(lock) 
    //console.log(task)
   add_event_to_lock(lock,task)
}