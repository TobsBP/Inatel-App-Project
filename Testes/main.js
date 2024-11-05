document.getElementById("openPopup").onclick = function() {
    document.getElementById("popup").style.display = "block";
}

document.getElementById("closePopup").onclick = function() {
    document.getElementById("popup").style.display = "none";
}

window.onclick = function(event) {
    if (event.target === document.getElementById("popup")) {
        document.getElementById("popup").style.display = "none";
    }
}

document.getElementById("uploadBtn").onclick = function() {
    const fileInput = document.getElementById("fileInput");
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        alert("Arquivo selecionado: " + file.name);
        document.getElementById("popup").style.display = "none";
    } else {
        alert("Por favor, selecione um arquivo.");
    }
}
