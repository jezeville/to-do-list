import {liCreator} from './liCreator.js';

export let addTask = () => {
    let tabTask = [];
    let tabTaskJsonB = localStorage.getItem('Tableau');

    if (tabTaskJsonB){
        tabTask = JSON.parse(tabTaskJsonB);
    }

    let inputTask = document.getElementById('tacheInput');
    let inputTaskValue = inputTask.value;

    let maxId = 0;
    for (let i = 0; i < tabTask.length; i++) {
        if (tabTask[i].id > maxId) {
            maxId = tabTask[i].id;
        }
    }

    let object = {};

    object.id = (parseInt(maxId) + 1);
    object.task = inputTaskValue;
    object.state = false;

    tabTask.push(object);

    let tabTaskJson = JSON.stringify(tabTask);
    localStorage.setItem('Tableau', tabTaskJson);

    inputTask.value = "";
    liCreator();
};