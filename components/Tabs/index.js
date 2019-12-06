// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function Tab(content) {
  const tab = document.createElement("div");
  tab.classList.add("tab");
  tab.textContent = content;

  tab.addEventListener("click", event => {
    const cardList = document.querySelectorAll(".card");
    cardList.forEach(card => {
      if (content.indexOf(card.dataset.topic) === -1) {
        card.style.display = "none";
        console.log(card);
      }
    });
  });

  return tab;
}

function RefreshTab(bool) {
  const tab = document.createElement("div");
  tab.classList.add("tab");
  tab.textContent = "REFRESH";

  tab.addEventListener("click", event => {
    getCards(bool);
  });

  return tab;
}

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    return response.data.topics;
  })
  .then(tabs => {
    tabs.forEach(tab => {
      document.querySelector(".topics").appendChild(Tab(tab));
    });
  });

document.querySelector(".topics").appendChild(RefreshTab(true));
