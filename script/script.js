
import { addTask } from './addTask.js';
import { liCreator } from './liCreator.js';
import { SuppTask } from './SuppTask.js';
document.getElementById('addTaskButton').addEventListener('click', addTask);
document.getElementById('suppresion').addEventListener('click', SuppTask);
liCreator();