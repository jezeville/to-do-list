export let SuppTask = () => {
    let tabTaskJson = localStorage.getItem('Tableau');
    let tabTask = JSON.parse(tabTaskJson);
    for (let i = 0; i < tabTask.length; i++) {
        let elem = tabTask[i];
        if (elem.state === true) {
            let suppLi = document.getElementById(elem.id);
            if (suppLi) {
                suppLi.parentNode.removeChild(suppLi);
            }
    
            tabTask.splice(i, 1);
            let updatedTabTaskJson = JSON.stringify(tabTask);
            localStorage.setItem('Tableau', updatedTabTaskJson);
            i--;
        }
    }
}