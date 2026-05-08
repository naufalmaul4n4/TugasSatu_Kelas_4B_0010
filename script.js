const inputValue = document.getElementById("inpuTask");
const btnTambah = document.getElementById("btnTambahTodo");
const daftarTugas = document.getElementById("listTugas");
const inpuDate = document.getElementById("inputDate");


btnTambah.addEventListener("click", function(){

    if(inputValue.value === "" || inpuDate.value === ""){
        alert("Input tidak boleh kosong");
        return;
    }

    const listbaru = document.createElement("li");
    const span = document.createElement("span")
    span.innerHTML = inputValue.value;
    
    listbaru.appendChild(span);
    daftarTugas.appendChild(listbaru)

    inputValue.value = "";
    inputValue.focus();

    const content = document.createElement("div");
    content.innerHTML = `<strong>${inputValue.value}</strong> <br> <small>${inputDate.value}</small>`;

    const statusBtn = document.createElement("button");
    statusBtn.innerText = "Progress";
    statusBtn.style.backgroundColor = "#ffcc00";

    statusBtn.onclick = function() {
        if(statusBtn.innerText === "Progress") {
            statusBtn.innerText = "Done";
            statusBtn.style.backgroundColor = "#99ff99";
            content.classList.add("done-text");
        } else {
            statusBtn.innerText = "Progress";
            statusBtn.style.backgroundColor = "#ffcc00";
            content.classList.remove("done-text");
        }
    };

    const btnEdit = document.createElement("button");
    btnEdit.innerText = "Edit";



})

