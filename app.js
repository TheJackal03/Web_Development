const inputButton = document.querySelector('#inputButton');
const inputSpace = document.querySelector('#inputEl');
const clearing = document.querySelector('#clear');
const showTabs = document.querySelector('#showcasing');
const saveTab = document.querySelector('#tabButton');
let bookmarks = [];


inputButton.addEventListener('click', () => {
    const url = inputSpace.value
    savingInput(url)
});

clearing.addEventListener('click', deleteAll);
saveTab.addEventListener('click', saveCurrentTab);

// Load saved bookmarks from localStorage
loadBookmarks();

function savingInput(url) {
    const liElement = document.createElement('li');
    const link = document.createElement('a');
    bookmarks.push(url);
    link.href = url;
    link.textContent = url;
    link.target = "_blank";
    liElement.appendChild(link);
    showTabs.appendChild(liElement);

    // Save the updated bookmarks to localStorage
    saveBookmarks();
}

function deleteAll() {
  bookmarks = [];
  showTabs.innerHTML = '';

  // Save the updated bookmarks to localStorage
  saveBookmarks();
}

function saveCurrentTab() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const url = tabs[0].url;
    savingInput(url); // Call savingInput function to add the current tab's URL to the list
  });
}

function loadBookmarks() {
  const savedBookmarks = localStorage.getItem('bookmarks');
  if (savedBookmarks) {
    bookmarks = JSON.parse(savedBookmarks);
    for (const url of bookmarks) {
      const liElement = document.createElement('li');
      const link = document.createElement('a');
      link.href = url;
      link.textContent = url;
      liElement.appendChild(link);
      showTabs.appendChild(liElement);
    }
  }
}

function saveBookmarks() {
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}
