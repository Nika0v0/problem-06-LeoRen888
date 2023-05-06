'use strict';

import * as model from './Model.js';
import { renderTaskList } from './View.js';

let addTaskButton = document.querySelector('#add-task-button');

function markCompleteCallback(task) {
  model.markComplete(task.id);
  renderTaskView();
}

export function renderTaskView() {
  let tasksRoot = document.querySelector('#tasks-root');
  tasksRoot.innerHTML = '';

  let taskList = renderTaskList(markCompleteCallback);
  tasksRoot.append(taskList);
}

addTaskButton.addEventListener('click', () => {
  let input = document.querySelector('input');

  if (input.value !== "") {
    model.addTask(input.value);
    input.value = "";
    renderTaskView();
  }
});
