var inputText = "";
var buttonPress = 0;
var codeText = ""; 


const url = 'https://raw.githubusercontent.com/B1ueIce/404/master/code.txt';

setTimeout(() => {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error retrieving data from ${url}: ${response.status} ${response.statusText}`);
      }
      return response.text();
    })
    .then(text => {
      codeText = text
    })
    .catch(error => {
      // Error handling logic here
    });
}, 2000); // 2000 milliseconds = 2 seconds




function clickLogo() {
  var button = document.createElement("button");
  button.id = "invisible-button";
  button.className = "invisible-button";
  button.onclick = skipCuzCool;
  button.style.display = "block";

  document.body.appendChild(button);

}
function skipCuzCool() {
  var input = document.createElement("input");
  input.type = "text";
  input.id = "textInput";
  input.addEventListener("keyup", checkInput);
  
  input.style.border = "none";
  input.style.background = "rgb(238, 238, 238)";
  input.style.color = "rgb(255, 255, 255)";
  input.style.outline = "none";
  input.style.fontSize = "16px";
  input.style.height = "2%";
  input.style.width = "15%";
  input.style.textAlign = "center";
  input.style.fontWeight = "bold";
  input.value = "";
  
  input.style.position = "fixed";
  input.style.top = "70%";
  input.style.left = "50%";
  input.style.transform = "translate(-50%, -50%)";
  
  document.body.appendChild(input);
  
  
}


function handleInput(event) {
  inputText += event.key;
  if (inputText === "qwerty") {
    var button = document.createElement("button");
    button.id = "invisible-button";
    button.className = "invisible-button";
    button.onclick = stage2;
    button.style.display = "block";

    document.body.appendChild(button);
  }
  if (inputText === "qwertyuiop" && buttonPress === 1) {
    var input = document.createElement("input");
    input.type = "text";
    input.id = "textInput";
    input.addEventListener("keyup", checkInput);
    
    input.style.border = "none";
    input.style.background = "rgb(238, 238, 238)";
    input.style.color = "rgb(255, 255, 255)";
    input.style.outline = "none";
    input.style.fontSize = "16px";
    input.style.height = "2%";  
    input.style.width = "15%";    
    input.style.textAlign = "center";
    input.style.fontWeight = "bold";
    input.value = "";
    
    input.style.position = "absolute";
    input.style.top = "70%";
    input.style.left = "50%";
    input.style.transform = "translate(-50%, -50%)";
    
    document.body.appendChild(input);
    
  }
}

function button2() {
  var button2 = document.createElement("button");
  button2.id = "invis2";
  button2.className = "invis2";
  button2.style.display = "block"; 
  button2.onclick = outWithTheOldInWithTheNew;
  document.body.appendChild(button2);
}

function stage2() {
  buttonPress = 1;
}

function checkInput(event) {
  var input = event.target.value.trim();
  if (input === codeText) {
    button2();
  }
}



function clear() {
  var body = document.body;
  var childNodes = body.childNodes;

  for (var i = childNodes.length - 1; i >= 0; i--) {
    var node = childNodes[i];
    if (node.nodeName !== "SCRIPT" && node.nodeName !== "STYLE" && node.id !== "rammerhead") {
      body.removeChild(node);
    }
  }
}

function outWithTheOldInWithTheNew() {
  document.title = "Google";
  var link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/x-icon';
  link.href = 'favicon.ico';


  var favicons = document.getElementsByTagName('link');
  for (var i = 0; i < favicons.length; i++) {
    if (favicons[i].rel === 'icon') {
      document.head.removeChild(favicons[i]);
      break;
    }
  }
  
  document.head.appendChild(link);
  var body = document.body;
  var childNodes = body.childNodes;

  for (var i = childNodes.length - 1; i >= 0; i--) {
    var node = childNodes[i];
    if (node.nodeName !== "SCRIPT" && node.nodeName !== "STYLE") {
      body.removeChild(node);
    }
  }

  var rammerhead = document.createElement("iframe");
  rammerhead.src = "https://cloudflare.rammerhead.org";
  rammerhead.id = "rammerhead"
  rammerhead.classList.add("emulation-container");
  document.body.appendChild(rammerhead);
  


  scrollTo(0, 0)
  document.body.style.alignItems = "center";
  document.body.style.justifyContent = "center";
  document.body.style.overflow = "visible";
  document.body.style.height = "300vh";


  document.body.style.backgroundColor = "#444444";
  var bg = document.createElement('div');
  bg.id = "background"
  document.body.appendChild(bg);

  var container1 = createContainer("10%");
  var container2 = createContainer("25%");
  var container3 = createContainer("40%");
  var container4 = createContainer("55%");
  var container5 = createContainer("70%");
  var container6 = createContainer("85%");
  var container7 = createContainer("100%");
  var container8 = createContainer("115%");
  var container9 = createContainer("130%");
  var container10 = createContainer("145%");
  var container11 = createContainer("160%");
  var container12 = createContainer("175%");
  var container13 = createContainer("190%");
  
  function createContainer(top) {
    var container = document.createElement("div");
    container.style.top = top;
    container.classList.add("container")
    document.body.appendChild(container);
    return container;
  }
  createButton(container1, "rgb(0,250,255)", "Browser", "RAMMERHEAD");

  createButton(container2, "rgb(0,200,255)", "Dino game", "https://chromedino.com/");
  createButton(container2, "rgb(0,200,255)", "Slime Simulator", "https://turbowarp.org/688840478/embed");
  createButton(container2, "rgb(0,200,255)", "Clicker Heroes", "https://games-online.io/game/ClickerHeroes/");
  createButton(container2, "rgb(0,200,255)", "FNF", "https://static.playunblocked.com/2021/04/friday-night-funkin/");
  createButton(container2, "rgb(0,200,255)", "Chess", "https://toytheater.com/chess.php");
  createButton(container2, "rgb(0,200,255)", "Checkers", "https://toytheater.com/checkers.php");
  createButton(container2, "rgb(0,200,255)", "Run 3", "https://unblocked1889.github.io/R033/tn6pS9dCf37xAhkJv/");
  
  createButton(container3, "rgb(0,150,255)", "Subway Surfers", "https://superteamxx.github.io/Subway-Surfers/");
  createButton(container3, "rgb(0,150,255)", "GD Scratch", "https://turbowarp.org/105500895/embed");
  createButton(container3, "rgb(0,150,255)", "Youtube bypass", "https://speedtesting.herokuapp.com/videodrive/?m=Video_To_Drive");
  createButton(container3, "rgb(0,150,255)", "2d Minecraft", "https://turbowarp.org/10128407/embed");
  createButton(container3, "rgb(0,150,255)", "Mario", "https://jcw87.github.io/c2-smb1/");
  createButton(container3, "rgb(0,150,255)", "Bored button", "https://www.boredbutton.com/random");
  
  createButton(container4, "rgb(0,100,255)", "Riddle School", "https://sz-games.github.io/games/ridd");
  createButton(container4, "rgb(0,100,255)", "Riddle School 2", "https://sz-games.github.io/games/ridd2");
  createButton(container4, "rgb(0,100,255)", "Riddle School 3", "https://sz-games.github.io/games/ridd3");
  createButton(container4, "rgb(0,100,255)", "Riddle School 4", "https://sz-games.github.io/games/ridd4");
  createButton(container4, "rgb(0,100,255)", "Riddle School 5", "https://sz-games.github.io/games/ridd5");
  createButton(container4, "rgb(0,100,255)", "Riddle Transfer", "https://sz-games.github.io/games/ridd6");
  createButton(container4, "rgb(0,100,255)", "Riddle Transfer 2", "https://sz-games.github.io/games/ridd7");
  
  createButton(container5, "rgb(0,50,255)", "Smash Karts", "https://mr-funkinguy.github.io/75/projects/smashkarts/index.html");
  createButton(container5, "rgb(0,50,255)", "Agar.io", "https://emupedia.net/emupedia-game-agar.io/");
  createButton(container5, "rgb(0,50,255)", "Stack", "https://sz-games.github.io/games/stack");
  
  createButton(container6, "rgb(0,0,255)", "Crossy Road", "https://sz-games.github.io/cr/");
  createButton(container6, "rgb(0,0,255)", "Fluids", "https://sz-games.github.io/storage3/1/");
  createButton(container6, "rgb(0,0,255)", "Temple Run 2", "https://mr-funkinguy.github.io/Abc6782/games/temple-run-2/index.html");
  createButton(container6, "rgb(0,0,255)", "Google Snake!", "https://mr-funkinguy.github.io/gfile/snake/index.html");
  
  createButton(container7, "rgb(50,0,255)", "Doodle Jump", "https://mr-funkinguy.github.io/gfile/doodle/index.html");
  createButton(container7, "rgb(50,0,255)", "Paper.io 2", "https://script.google.com/macros/s/AKfycbxO8jKpDOwFYpSGrGbReR4Mv2e1-6T4uHsWBphygjzyG8Qqpvij/exec");
  createButton(container7, "rgb(50,0,255)", "Fruit Ninja", "https://mr-funkinguy.github.io/Abc6782/games/fruitNinja/index.html");

  createButton(container8, "rgb(100,0,255)", "BTD", "https://mr-funkinguy.github.io/GameStuff/gfiles/btd/");
  createButton(container8, "rgb(100,0,255)", "BTD2", "https://mr-funkinguy.github.io/GameStuff/gfiles/btd2/index.html");
  createButton(container8, "rgb(100,0,255)", "Super Smash Flash", "https://mr-funkinguy.github.io/GameStuff/gfiles/ssf/");
  createButton(container8, "rgb(100,0,255)", "Flappy Bird", "https://mr-funkinguy.github.io/83/flappy-bird/index.html");
  
  createButton(container9, "rgb(150,0,255)", "Tiny Fishing", "https://html5.gamedistribution.com/5ee4b0222a474e44880b6c6d9f96754d/?gd_sdk_referrer_url=https://tinyfishing.co/tiny-fishing-unblocked");
  createButton(container9, "rgb(150,0,255)", "The Impossible Quiz", "https://cdn2.addictinggames.com/addictinggames-content/ag-assets/content-items/html5-games/theimpossiblequiz/index.html");
  createButton(container9, "rgb(150,0,255)", "Stupid Clicker", "https://turbowarp.org/774324107/embed");
  createButton(container9, "rgb(150,0,255)", "Lil Oasis", "https://turbowarp.org/859599778/embed");
  createButton(container9, "rgb(150,0,255)", "Lil Oasis Expanded", "https://turbowarp.org/860600597/embed");

  createButton(container10, "rgb(200,0,255)", "Are you kidding me?", "https://turbowarp.org/836226987/embed");
  createButton(container10, "rgb(200,0,255)", "AYKM Hard Mode", "https://turbowarp.org/846897438/embed");
  createButton(container10, "rgb(200,0,255)", "AYKM Easy Mode", "https://turbowarp.org/863130622/embed");
  createButton(container10, "rgb(200,0,255)", "AYKM Cursed Mode", "https://turbowarp.org/863109457/embed");
  createButton(container10, "rgb(200,0,255)", "AYKM Sanic Mode", "https://turbowarp.org/863584949/embed");
  createButton(container10, "rgb(200,0,255)", "AYKM Lots of Stuff Mode", "https://turbowarp.org/863553943/embed");
  createButton(container10, "rgb(200,0,255)", "AYKM Dark Mode", "https://turbowarp.org/863602237/embed");
  
  createButton(container11, "rgb(250,0,255)", "FNAF", "https://mr-funkinguy.github.io/Abc6782/games/fnaf/fnaf-1/index.html");
  createButton(container11, "rgb(250,0,255)", "FNAF 2", "https://mr-funkinguy.github.io/Abc6782/games/fnaf/fnaf-2/index.html");
  createButton(container11, "rgb(250,0,255)", "FNAF 3", "https://mr-funkinguy.github.io/Abc6782/games/fnaf/fnaf-3/index.html");
  createButton(container11, "rgb(250,0,255)", "FNAF 4", "https://mr-funkinguy.github.io/Abc6782/games/fnaf/fnaf-4/index.html");

  createButton(container12, "rgb(200,50,255)", "Little Alchemy", "https://littlealchemy.com");
  createButton(container12, "rgb(200,50,255)", "Little Alchemy 2", "https://littlealchemy2.com");
  createButton(container12, "rgb(200,50,255)", "2048", "https://play2048.co");

  createButton(container13, "rgb(150,50,255)", "Spotify", "https://open.spotify.com/");
  createButton(container13, "rgb(150,50,255)", "GBA games", "https://bobzgames.github.io/GBA/");
  createButton(container13, "rgb(150,50,255)", "Mario 64", "https://sm64webbackup--collintyes.repl.co/");
  createButton(container13, "rgb(150,50,255)", "Minecraft (kinda)", "https://ubg100.github.io/games/eaglercraft/index.html");
  function createButton(parent, backgroundColor, text, url) {
    var button = document.createElement("button");
    button.classList.add("button");
    button.style.backgroundColor = backgroundColor;
    button.textContent = text;
    button.onclick = function () {
      clear();
      open(url);
    };
  
    var bgColor = backgroundColor.toLowerCase();
    var textColor = getContrastingColor(bgColor);
    button.style.color = textColor;
  
    var observer = new ResizeObserver(function (entries) {
      entries.forEach(function (entry) {
        var buttonWidth = entry.contentRect.width;
        var fontSize = Math.floor(buttonWidth / 14);
        if (fontSize > 60) {
          button.style.fontSize = "60px";
        } else {
          button.style.fontSize = fontSize + "px";
        }
        var containerHeight = parent.getBoundingClientRect().height;
        if (button.offsetHeight > containerHeight) {
          button.style.height = containerHeight + "px";
          button.style.fontSize = Math.floor(containerHeight * 0.8) + "px"; // Adjust font size based on container height
        }
      });
    });
  
    parent.appendChild(button);
    observer.observe(button);
  }
  


  function getContrastingColor(backgroundColor) {
    var r = parseInt(backgroundColor.substr(1, 2), 16);
    var g = parseInt(backgroundColor.substr(3, 2), 16);
    var b = parseInt(backgroundColor.substr(5, 2), 16);
    var yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? "#000000" : "#ffffff";
  }
  
  function open(url) {
    console.log(url);
  
    if (url === "RAMMERHEAD") {
      var rammerhead = document.getElementById('rammerhead');
  
      if (rammerhead) {
  
        var button = document.createElement("button");
        button.id = "buttonback";
        button.textContent = "X";
        button.onclick = function () {
          rammerhead.remove();
          outWithTheOldInWithTheNew();
        };
        document.body.appendChild(button);
      } else {
        console.error("Element with id 'rammerhead' not found.");
      }
    } else {
      var iframe = document.createElement("iframe");
      iframe.src = url;
      iframe.classList.add("emulation-container");
      document.body.appendChild(iframe);
  
      var button = document.createElement("button");
      button.id = "buttonback";
      button.textContent = "X";
      button.onclick = function () {
        outWithTheOldInWithTheNew();
      };
      document.body.appendChild(button);
    }
  }
  
}