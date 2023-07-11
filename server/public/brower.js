

const tasksDOM = document.querySelector('.tasks')
const loadingDOM = document.querySelector('.loading-text')
const formDOM = document.querySelector('.task-form')
const taskInputDOM = document.querySelector('#task-input')
const taskInputTwo = document.querySelector('#task-inputtwo')
const formAlertDOM = document.querySelector('.form-alert')
// Load tasks from /api/tasks
const showTasks = async () => {
 loadingDOM.style.visibility = "visibility"
try {
   const {data:{getTaskAll} } = await axios.get('/task')
     
//    const tasks= await axios.get('/task/getall')
  if(getTaskAll.lenght < 1){
      tasksDOM.innerHTML = `<h3>No Task in your list</h3>`
      loadingDOM.style.visibility = 'hidden'
  }
  console.log(getTaskAll)
  const AllTask = getTaskAll.map((task)=>{
      const {desc,title,_id:taskId,date} = task
return tasksDOM.innerHTML =`
<span><h4>
${title}</h4>
<p>${desc}</p>
</span>
<a href ="task.html?id=${taskId}">update</a>
<button type="button" 
class="btn-delete" data-id="${taskId}">delete</button>
<hr>
`
  }).join('')

  tasksDOM.innerHTML = AllTask;
  

} catch (error) {
    tasksDOM.innerHTML = `<h3>${error}</h3>`
}
}

showTasks()
// delete task /api/tasks/:i
tasksDOM.addEventListener('click', async (e) => {
//   const el = e.target
const el = e.target;
console.log(el)
  if (el.classList.contains('btn-delete')) {
    const id = el.dataset.id
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
  const title = taskInputDOM.value
  const desc = taskInputTwo.value
  

  try {
    await axios.post('/task/create', {title, desc})
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