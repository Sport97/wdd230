const chapter = document.querySelector("input");
const addChapter = document.querySelector("button");
const chapterList = document.querySelector("list");

button.addEventListener("click",  function() {
    if (document.querySelector("input").value !== "") {
        const newChapter = document.createElement("li");
        const deleteButton = document.createElement("button");
        newChapter.innerHTML = document.querySelector("input").value;
        deleteButton.innerHTML = "❌";
        newChapter.appendChild(deleteButton);
        document.querySelector("#list").appendChild(newChapter);
        
        deleteButton.addEventListener("click", function() {
            document.querySelector("#list").removeChild(newChapter);
        });
    }
    document.querySelector("input").focus();
    document.querySelector("input").value = "";
});