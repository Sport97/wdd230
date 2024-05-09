const chapterInput = document.querySelector("input");
const chapterButton = document.querySelector("button");
const chapterList = document.querySelector("list");
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

chapterButton.addEventListener("click",  function() {
    if (chapterInput.value !== "") {
        displayList(chapterInput.value);
        chaptersArray.push(chapterInput.value);
        setChapterList();
        chapterInput.focus();
        chapterInput.value = "";
    }});

function displayList(item) {
    const newChapter = document.createElement("li");
    const deleteButton = document.createElement("button");
    newChapter.innerHTML = item;
    deleteButton.innerHTML = "❌";
    newChapter.append(deleteButton);
    list.append(newChapter);

    deleteButton.addEventListener("click", function () {
      list.removeChild(newChapter);
      deleteChapter(newChapter.textContent);
    });
    chapterInput.focus();
}

function setChapterList() {
    localStorage.setItem("Favorite Book of Mormon Chapters", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("Favorite Book of Mormon Chapters"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}