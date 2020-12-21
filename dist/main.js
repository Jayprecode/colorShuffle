const colors = ["green", "red", "yellow", "blue", "cyan", "magenta"],
  hexaDecimal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  //GENERATING HEX VALUE
  let hex, hex2;

  //ROTATE GRADIENT
  let rotateGradient = document.querySelector(".color_rotate");
  const num = ["to left", "to right", "to top", "to down"];

let btn = document.getElementById("btn"),
  color = document.querySelector(".color"),
  checkBox = document.querySelector(".checkbox"),
  header = document.getElementById("header"),
  subHeader = document.querySelector(".sub_header"),
  svg = document.querySelector(".colorful"),
  svg2 = document.querySelector(".colorless"),
  h = document.querySelector(".hr"),
  navLinks = document.querySelectorAll(".nav-link");




checkBox.addEventListener("change", function () {
  header.classList.toggle("dark");
  subHeader.classList.toggle("dark");
  svg.classList.toggle("display");
  svg2.classList.toggle("opacyful");
  h.classList.toggle("w");
});



for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navLinks[0].classList.remove("selected");
    navLinks[1].classList.remove("selected");
    navLinks[2].classList.remove("selected");
    navLinks[3].classList.remove("selected");
    this.classList.add("selected")

    this.textContent === "Basic" ?
      (basic(),
        color.textContent = "white",
        document.body.style.background = "white",
        rotateGradient.style.display = "none") :
    
    this.textContent === "Hex" ?
      (hexValue(),
        color.textContent = "#FFFFFF",
        document.body.style.background = "white",
        rotateGradient.style.display = "none") :
    
    this.textContent === "RGB" ?
      (rgb(),
        color.textContent = "rgb(255, 255, 255)",
        document.body.style.background = "white",
        rotateGradient.style.display = "none") :
    
      (gradient(),
        color.textContent = "linear-gradient(#FFFFFF, #FF8F8F)",
        document.body.style.background = "white",
        rotateGradient.style.display = "block");
  });
}


//BASIC
function basic() {
  //WHEN BUTTON IS CLICKED
  btn.addEventListener("click", function () {
    // Get random number between 0 - 3
    let randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
  });

  //GENERATING RANDOM COLOR VALUES
  function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
  }
}



//HEX
function hexValue() {
  //WHEN BUTTON IS CLICKED
  btn.addEventListener("click", function () {
    let hexColor = "#";
    for (var i = 0; i < 6; i++) {
      hexColor += hexaDecimal[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.background = `${hexColor}`;
  });
  //GENERATING RANDOM HEX VALUES
  function getRandomNumber() {
    return Math.floor(Math.random() * hexaDecimal.length);
  }
}



//RGB
function rgb() {
    //WHEN BUTTON IS CLICKED
    btn.addEventListener("click", function () {
      document.body.style.background = randomColor();
      color.textContent = randomColor();
    });
    //GENERATING RANDOM RGB NUMBERS/values
    function randomColor() {
      //Pick a "red" from 0 - 255
      let r = Math.floor(Math.random() * 256);
      //Pick a "green" from 0 - 255
      let g = Math.floor(Math.random() * 256);
      //Pick a "blue" from 0 - 255
      let b = Math.floor(Math.random() * 256);
      return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}



//GRADIENTS
function gradient() {
  //WHEN BUTTON IS CLICKED
  btn.addEventListener("click", function () {
    //GENERATING HEX VALUE
    hex = "#000000".replace(/0/g, function () {
      return (~~(Math.random() * 16)).toString(16);
    });
    hex2 = "#000000".replace(/0/g, function () {
      return (~~(Math.random() * 16)).toString(16);
    });
    document.body.style.background =
      "linear-gradient(" + hex + ", " + hex2 + ")";
    color.textContent = "linear-gradient(" + hex + ", " + hex2 + ")";
  });
  //ROTATE GRADIENT
  rotateGradient.addEventListener("click", function () {
    let numD = random();
    document.body.style.background =
      "linear-gradient(" + num[numD] + ", " + hex + ", " + hex2 + ")";
  });
  //GENERATING RANDOM VALUES FOR GRADIENT ROTATION
  function random() {
    return Math.floor(Math.random() * num.length);
  }
}


