const sortButton = document.getElementById('sortBtn');
const inputStudent = document.getElementById('inputStudent');

const students = [];
let studentCounter = 1;
const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];

const formButton = () =>{
    document.getElementById('formBtn').addEventListener('click', createForm);
};

const clickEvent = () => {
    if(document.getElementById('sortBtn')){
    document.getElementById('sortBtn').addEventListener('click', addStudent);
    }
};

const getRandomIndex = (x) => {
    return(Math.floor(Math.random() * x.length));
};

const printToDom = (divId, print) => {
    document.getElementById(divId).innerHTML = print;
};

const deleteFunction = (e) => {
    // const buttonId = e.target.id;
    students.forEach((student, index) => {
        if(student.id === e.target.id){
            students.splice(index, 1);
        }
    })
    createCard(students);
    addDeleteEvents();
};

const addDeleteEvents = () => {
    // const deleteButtons = document.getElementsByClassName('expelBtn');
    for (let i=0; i < document.getElementsByClassName('expelBtn').length; i++){
        document.getElementsByClassName('expelBtn')[i].addEventListener('click', deleteFunction);
    }
};



const createForm = () => {
    let message =
        `<form>
            <div class="form-group">
                <label>Enter First Year's Name</label>
                <input id="inputStudent" type="text" class="form-control" placeholder="Enter student's name">
            </div>
            </form>
            <button id="sortBtn">Sort!</button>`
        printToDom('formDiv', message);
        clickEvent();
    };

const createCard = (x) => {
    let message ='';
    x.forEach((student) => {
        message += `<div class="card row" style="width: 18rem;">
                    <div class="card-body col">
                        <h5 class="card-title">${student.name}</h5>
                        <p class="card-text">${student.house}</p>
                        <button id=${student.id} class="expelBtn" type="submit">Expel</button>
                    </div>
                    </div>`;
    });
      printToDom('cardDiv', message);
};

const addStudent = (e) => {
    e.preventDefault();
    const inputText = document.getElementById('inputStudent').value;
    let removedItem = houses.splice(getRandomIndex(houses), 1);
    const newStudent = {
        name: inputText,
        id: `student${studentCounter}`,
        house: removedItem
    };
    students.push(newStudent);
    studentCounter++;
    createCard(students);
    addDeleteEvents();
    houses.push(removedItem);
    document.getElementById('inputStudent').value = '';
};

const init = () => {
    formButton();
    clickEvent();
};

init();