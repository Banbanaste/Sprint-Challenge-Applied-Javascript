// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function Card(dataObject, topic) {
  const card = document.createElement("div"),
    headline = document.createElement("div"),
    author = document.createElement("div"),
    imgContainer = document.createElement("div"),
    img = document.createElement("img"),
    authorName = document.createElement("span");

  card.dataset.topic = topic;

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  img.src = dataObject.authorPhoto;

  headline.textContent = dataObject.headline;
  authorName.textContent = `By ${dataObject.authorName}`;

  imgContainer.appendChild(img);
  author.append(imgContainer, authorName);
  card.append(headline, author);

  return card;
}

function getCards(bool) {
  if (bool) {
    document.querySelectorAll(".card").forEach(card => {
      card.style.display = "none";
    });
  }

  axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => response.data.articles)
    .then(articles => {
      for (const section in articles) {
        articles[section].forEach(article => {
          document
            .querySelector(".cards-container")
            .appendChild(Card(article, section));
        });
      }
    });
}

getCards(false);
