

const tasksDOM = document.querySelector('#tasks')
const loadingDOM = document.querySelector('.loading-text')
const formDOM = document.querySelector('.task-form')
const taskInputDOM = document.querySelector('.task-input')
const formAlertDOM = document.querySelector('.form-alert')
// Load tasks from /api/tasks
const showTasks = async () => {
  loadingDOM.style.visibility = 'visible'
try {
   const {data:{getTaskAll} } = await axios.get('/task/getall')
     
//    const tasks= await axios.get('/task/getall')
  if(getTaskAll.lenght < 1){
      tasksDOM.innerHTML = `<h3>No Task in your list</h3>`
      loadingDOM.style.visibility = 'hidden'
    
  }
  console.log(getTaskAll)
  const AllTask = getTaskAll.map((task)=>{
      const {Completed,name,_id} = task
return `<div>${name}</div>`
  }).join('')

  tasksDOM.innerHTML = AllTask;

} catch (error) {
    tasksDOM.innerHTML = `<h3>${error}</h3>`
}
}

showTasks()

// delete task /api/tasks/:id

tasksDOM.addEventListener('click', async (e) => {
  const el = e.target
  if (el.parentElement.classList.contains('delete-btn')) {
    loadingDOM.style.visibility = 'visible'
    const id = el.parentElement.dataset.id
    try {
      await axios.delete(`/task/delete/${id}`)
      showTasks()
    } catch (error) {
      console.log(error)
    }
  }
  loadingDOM.style.visibility = 'hidden'
})

// form

formDOM.addEventListener('submit', async (e) => {
  e.preventDefault()
  const name = taskInputDOM.value

  try {
    await axios.post('/task/create', { name })
    showTasks()
    taskInputDOM.value = ''
    formAlertDOM.style.display = 'block'
    formAlertDOM.textContent = `success, task added`
    formAlertDOM.classList.add('text-success')
  } catch (error) {
    formAlertDOM.style.display = 'block'
    formAlertDOM.innerHTML = `error, please try again`
  }
  setTimeout(() => {
    formAlertDOM.style.display = 'none'
    formAlertDOM.classList.remove('text-success')
  }, 4000)
})