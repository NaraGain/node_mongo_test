const text = document.querySelector('.text')
const input = document.querySelector('.edit_task')
const Completed = document.querySelector('task_edit_completed')
const params = window.location.search
const id = new URLSearchParams(params).get('id')

const showTask = async ()  => {
    try{
const {
    data : {taskId},
} = await  axios.get(`/task/${id}`)
const {_id: task,Completed,name} = taskId

text.innerHTML = task
input.value = name


    }catch(error){
console.log(error)
    }

}

showTask()