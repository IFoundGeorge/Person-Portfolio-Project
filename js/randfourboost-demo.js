document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("audioUpload");
    const fileName = document.querySelector(".file-name");
    const predictBtn = document.querySelector(".predict-btn");
    const resultText = document.querySelector(".result span");

    if (!fileInput || !fileName || !predictBtn || !resultText) return;

    fileInput.addEventListener("change", () => {
        if (fileInput.files.length > 0) {
            fileName.textContent = fileInput.files[0].name;
            predictBtn.disabled = false;
        } else {
            fileName.textContent = "No file selected";
            predictBtn.disabled = true;
        }
    });

    predictBtn.addEventListener("click", () => {
    resultText.textContent = "Genre Predicted";
    resultText.classList.add("success");
    });

});
