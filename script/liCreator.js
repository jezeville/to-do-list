
export let liCreator = () => {
    let tabTaskJSON = localStorage.getItem('Tableau');
    if (tabTaskJSON){
    let tabTask = JSON.parse(tabTaskJSON);
    let listeTaches = document.getElementById("listeTaches");
    listeTaches.innerHTML = "";
    for (let elem of tabTask){
        let Taches = document.createElement('li');
        Taches.innerHTML = elem.task
        Taches.id = elem.id;
        listeTaches.append(Taches);
        let divRadio = document.createElement('label');
        divRadio.className = "container";
        let checkRadio = document.createElement('input');
        checkRadio.type = "checkbox";
        checkRadio.className = 'radioLi';
        checkRadio.checked = elem.state;
        checkRadio.addEventListener('click', function () {
             elem.state = checkRadio.checked;
            let updatedTabTaskJson = JSON.stringify(tabTask);
            localStorage.setItem('Tableau', updatedTabTaskJson);
            Taches.classList.toggle('barre');
        })
        if(elem.state == true){
            Taches.className='barre';
        }
        let divCheck = document.createElement('div');
        divCheck.className = "checkmark" ;
        divRadio.append(checkRadio);
        divRadio.append(divCheck);
        Taches.append(divRadio);
    }
}
}
