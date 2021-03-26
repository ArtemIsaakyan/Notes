// $(".note").draggable();

let headerNote = document.getElementById('noteHeader');
let createNote = document.getElementById('createNewNote');
let outNote = document.querySelector('.out');
let visibleForm = document.querySelector('.optionsForm');
let addNote = document.getElementById('addNewNote');

createNote.onclick = () => {

    visibleForm.style.display = "block";

}


addNote.onclick = () => {
    outNote.innerHTML = noteHeader.value;
}



// noteOut.innerHTML = noteHeader.value;