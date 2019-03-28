const students = [];
let studentCounter = 1;

const clickEvent = (id, e) => {
    document.getElementById(id).addEventListener('click', e);
};

const printToDom = (divId, print) => {
    document.getElementById(divId).innerHTML = print;
};

const deleteFunction = (e) => {
    const buttonId = e.target.id;
    students.forEach((student, index) => {
        if(student.id === buttonId){
            student.splice(index, 1);
        }
    })
    createCard(students);
    addDeleteEvents();
};

const addDeleteEvents = () => {
    const deleteButtons = document.getElementsByClassName('expelBtn');
    for (let i=0; i < deleteButtons.length; i++){
        deleteButtons[i].addEventListener('click', deleteFunction);
    }
};







const createForm = () => {
    let message =
        `<form>
            <div class="form-group">
                <label>Enter First Year's Name</label>
                <input type="text" class="form-control" placeholder="Enter student's full name">
            </div>
                <button id="sortBtn" type="submit">Sort!</button>
        </form>`
        printToDom('formDiv', message);
        if (document.getElementById('sortBtn')){
            clickEvent('sortBtn', createCard);
            };            
};

const createCard = () => {
    let message =
        `<div class="card col-3" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button id="expelBtn" type="submit">Expel</button>
          </div>
        </div>`
      printToDom('cardDiv', message);
};

const Btns = () => {
clickEvent('formBtn', createForm);
};

const init = () => {
    Btns();
};

init();