const inputValue = document.getElementById("inpuTask");
const btnTambah = document.getElementById("btnTambahTodo");
const daftarTugas = document.getElementById("listTugas");
const inputDate = document.getElementById("inputDate");

let currentLi = null;

btnTambah.addEventListener("click", function(){

    if(inputValue.value === "" || inputDate.value === ""){
        alert("Input tidak boleh kosong");
        return;
    }

    const listbaru = document.createElement("li");

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
    btnEdit.onclick = function() {
        currentLi = listbaru;
        document.getElementById("editValue").value = content.querySelector("strong").innerText;
        document.getElementById("editDate").value = content.querySelector("small").innerText;
        document.getElementById("modalEdit").style.display = "block";
    };

    const btnHapus = document.createElement("button");
    btnHapus.innerText = "Hapus";
    btnHapus.style.backgroundColor = "red";
    btnHapus.style.color = "white";
    btnHapus.onclick = function() {
        listbaru.remove();
    };

    const actionGroup = document.createElement("div");
    actionGroup.className = "btn-group";
    actionGroup.appendChild(statusBtn);
    actionGroup.appendChild(btnEdit);
    actionGroup.appendChild(btnHapus);
    
    listbaru.appendChild(content);
    listbaru.appendChild(actionGroup);
    daftarTugas.appendChild(listbaru);

    inputValue.value = "";
    inputDate.value = "";

});

document.getElementById("btnSimpanEdit").onclick = function() {
    const newName = document.getElementById("editValue").value;
    const newDate = document.getElementById("editDate").value;
    currentLi.querySelector("strong").innerText = newName;
    currentLi.querySelector("small").innerText = newDate;
    document.getElementById("modalEdit").style.display = "none";
}

document.getElementById("btnBatalEdit").onclick = function() {
    document.getElementById("modalEdit").style.display = "none";
};

