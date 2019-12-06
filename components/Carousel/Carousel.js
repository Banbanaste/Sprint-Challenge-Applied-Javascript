/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function Carousel() {
  let imgNum = 1;

  const carousel = document.createElement("div"),
    left = document.createElement("div"),
    img1 = document.createElement("img"),
    img2 = document.createElement("img"),
    img3 = document.createElement("img"),
    img4 = document.createElement("img"),
    right = document.createElement("div");

  carousel.classList.add("carousel");
  left.classList.add("left-button");
  right.classList.add("right-button");
  img1.classList.add("currentImg");
  img1.classList.add("carousel-img");
  img2.classList.add("carousel-img");
  img3.classList.add("carousel-img");
  img4.classList.add("carousel-img");

  img1.id = "img1";
  img2.id = "img2";
  img3.id = "img3";
  img4.id = "img4";

  img1.src = "./assets/carousel/mountains.jpeg";
  img2.src = "./assets/carousel/computer.jpeg";
  img3.src = "./assets/carousel/trees.jpeg";
  img4.src = "./assets/carousel/turntable.jpeg";

  function setImg(num) {
    const list = document.querySelectorAll(".carousel-img");
    list.forEach(img => {
      img.classList.remove("currentImg");
    });

    num === 1 && img1.classList.add("currentImg");
    num === 2 && img2.classList.add("currentImg");
    num === 3 && img3.classList.add("currentImg");
    num === 4 && img4.classList.add("currentImg");
  }

  right.addEventListener("click", event => {
    if (imgNum < 4) {
      imgNum++;
    } else {
      imgNum = 1;
    }
    console.log("imgNum:", imgNum);
    setImg(imgNum);
  });

  left.addEventListener("click", event => {
    if (imgNum > 1) {
      imgNum--;
    } else {
      imgNum = 4;
    }
    console.log("imgNum:", imgNum);
    setImg(imgNum);
  });

  carousel.append(left, img1, img2, img3, img4, right);

  return carousel;
}

document.querySelector(".carousel-container").appendChild(Carousel());
