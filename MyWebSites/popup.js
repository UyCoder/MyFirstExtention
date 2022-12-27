document.getElementById("Google").addEventListener("click", async () => {
  var url = this.getAttribute("data-url");
  chrome.tabs.create({url: url, active: true});
});

document.getElementById("Youtube").addEventListener("click", async () => {
  var url = this.getAttribute("data-url");
  chrome.tabs.create({url: url, active: true});
});

document.getElementById("ilkur").addEventListener("click", async () => {
  var url = this.getAttribute("data-url");
  chrome.tabs.create({url: url, active: true});
});