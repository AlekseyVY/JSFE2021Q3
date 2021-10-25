
export class Td {
  constructor(dto) {
    this.tasks = [];
    this.list = document.querySelector('.todo-list');
    this.addTask = document.querySelector('.add-task');
    this.taskInput = document.querySelector('.task-input');
    this.taskState = null;
    this.generateTasks();

    this.taskInput.addEventListener('input', (e) => {
      this.taskState = e.target.value;
    })

    this.addTask.addEventListener('click', (e) => {
      if(this.taskState && this.tasks.length < 5) {
        const taskObj = {
          task: this.taskState,
          id: `${Math.random() * 1000}`
        }
        this.tasks.push(taskObj);
        const tmp = document.createElement('li');
        tmp.id = `task_${taskObj.id}`;
        tmp.innerHTML = `<div class="task-wrapper"><span>${taskObj.task}</span>
<svg version="1.1" id="${taskObj.id}" class="del-btn" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
\t viewBox="0 0 489.425 489.425" style="enable-background:new 0 0 489.425 489.425;" xml:space="preserve">
<g>
\t<g>
\t\t<path d="M122.825,394.663c17.8,19.4,43.2,30.6,69.5,30.6h216.9c44.2,0,80.2-36,80.2-80.2v-200.7c0-44.2-36-80.2-80.2-80.2h-216.9
\t\t\tc-26.4,0-51.7,11.1-69.5,30.6l-111.8,121.7c-14.7,16.1-14.7,40.3,0,56.4L122.825,394.663z M29.125,233.063l111.8-121.8
\t\t\tc13.2-14.4,32-22.6,51.5-22.6h216.9c30.7,0,55.7,25,55.7,55.7v200.6c0,30.7-25,55.7-55.7,55.7h-217c-19.5,0-38.3-8.2-51.5-22.6
\t\t\tl-111.7-121.8C23.025,249.663,23.025,239.663,29.125,233.063z"/>
\t\t<path d="M225.425,309.763c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6l47.8-47.8l47.8,47.8c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6
\t\t\tc4.8-4.8,4.8-12.5,0-17.3l-47.9-47.8l47.8-47.8c4.8-4.8,4.8-12.5,0-17.3s-12.5-4.8-17.3,0l-47.8,47.8l-47.8-47.8
\t\t\tc-4.8-4.8-12.5-4.8-17.3,0s-4.8,12.5,0,17.3l47.8,47.8l-47.8,47.8C220.725,297.263,220.725,304.962,225.425,309.763z"/>
\t</g>
</svg>
</div>`;
        tmp.classList.add('task');
        this.list.append(tmp);
        this.taskState = null;
        this.taskInput.value = '';

        const tmp_2 = document.getElementById(`${taskObj.id}`);
        tmp_2.addEventListener('click', (e) => {
          const delId = document.getElementById(`task_${taskObj.id}`);
          delId.remove();
          const idToFilter = delId.id.slice(5)
          this.tasks = this.tasks.filter((task) => task.id !== idToFilter)
        })
      }
    })
  }

  generateTasks = () => {
    if(this.tasks) {
      this.tasks.forEach((task) => {
        const tmp = document.createElement('li');
        tmp.textContent = task;
        tmp.classList.add('task');
        this.list.append(tmp)
      })
    }
  }
}