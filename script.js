var inputText = "";
var buttonPress = 0;

function handleInput(event) {
  inputText += event.key;
  if (inputText === "sus") {
    outWithTheOldInWithTheNew()
  }
  if (inputText === "qwerty") {
    var button = document.getElementById("invisible-button");
    button.style.display = "block";
  }
  if (inputText === "qwertyuiop" && buttonPress === 1) {
    var button2 = document.getElementById("invis2");
    button2.style.display = "block";
  }
}

function stage2() {
  buttonPress = 1;
}
function clear() {
  var body = document.body;
  var childNodes = body.childNodes;
  for (var i = childNodes.length - 1; i >= 0; i--) {
    var node = childNodes[i];
    if (node.nodeName !== "SCRIPT" && node.nodeName !== "STYLE") {
      body.removeChild(node);
    }
  }
}
function outWithTheOldInWithTheNew() {
  document.title = "Blues Funny Things";
  var body = document.body;
  var childNodes = body.childNodes;
  for (var i = childNodes.length - 1; i >= 0; i--) {
    var node = childNodes[i];
    if (node.nodeName !== "SCRIPT" && node.nodeName !== "STYLE") {
      body.removeChild(node);
    }
  }

  scrollTo(0, 0)
  document.body.style.overflow = "visible";
  document.body.style.height = "300vh";


  document.body.style.backgroundColor = "#444444";
  var newObject = document.createElement('div');
  newObject.style.position = 'fixed';
  newObject.style.top = '0';
  newObject.style.left = '0';
  newObject.style.width = '100%';
  newObject.style.height = '100%';
  newObject.style.zIndex = '-999'; 
  newObject.style.backgroundImage = 'url(bg.jpg)';
  newObject.style.backgroundSize = 'cover';
  newObject.style.backgroundPosition = 'center';


  document.body.appendChild(newObject);

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
  
  function createContainer(top) {
    var container = document.createElement("div");
    container.style.position = "absolute";
    container.style.top = top;
    container.style.left = "0";
    container.style.right = "0";
    container.style.transform = "translateY(-50%)";
    container.style.display = "flex";
    container.style.alignItems = "center";
    container.style.justifyContent = "center";
    container.style.width = "100%";
    document.body.appendChild(container);
    return container;
  }
  window.addEventListener('beforeunload', function (e) {
    document.title = "Error 404 - Page Not Found.";
});
  createButton(container1, "rgb(0,250,255)", "Browser", "https://cloudflare.rammerhead.org");

  createButton(container2, "rgb(0,200,255)", "Dino game", "https://chromedino.com/");
  createButton(container2, "rgb(0,200,255)", "Slime Simulator", "https://turbowarp.org/688840478/embed");
  createButton(container2, "rgb(0,200,255)", "Clicker Heroes", "https://games-online.io/game/ClickerHeroes/");
  createButton(container2, "rgb(0,200,255)", "FNF", "https://static.playunblocked.com/2021/04/friday-night-funkin/");
  createButton(container2, "rgb(0,200,255)", "Chess", "https://toytheater.com/chess.php");
  createButton(container2, "rgb(0,200,255)", "Checkers", "https://toytheater.com/checkers.php");
  createButton(container2, "rgb(0,200,255)", "Run 3", "https://unblocked1889.github.io/R033/tn6pS9dCf37xAhkJv/");
  
  createButton(container3, "rgb(0,150,255)", "Subway Surfers", "https://superteamxx.github.io/Subway-Surfers/");
  createButton(container3, "rgb(0,150,255)", "GD", "https://turbowarp.org/105500895/embed");
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
  createButton(container9, "rgb(150,0,255)", "Retro Ping Pong", "https://www.gameszap.com/iframe/19682.html");
  createButton(container9, "rgb(150,0,255)", "Stupid Clicker", "https://turbowarp.org/774324107/embed");
  createButton(container9, "rgb(150,0,255)", "Lil Oasis", "https://turbowarp.org/859599778/embed");
  createButton(container9, "rgb(150,0,255)", "Lil Oasis Expanded", "https://turbowarp.org/860600597/embed");

  createButton(container10, "rgb(200,0,255)", "Are you kidding me?", "https://turbowarp.org/836226987/embed");
  createButton(container10, "rgb(200,0,255)", "AYKM Hard Mode", "https://turbowarp.org/846897438/embed");
  createButton(container10, "rgb(200,0,255)", "AYKM Easy Mode", "https://turbowarp.org/863130622/embed");
  createButton(container10, "rgb(200,0,255)", "AYKM Cursed Mode", "https://turbowarp.org/863109457/embed");
  

  function createButton(parent, backgroundColor, text, url) {
  var button = document.createElement("button");
  button.style.backgroundColor = backgroundColor;
  button.style.padding = "10px";
  button.style.borderRadius = "10px";
  button.style.border = "none";
  button.style.margin = "5px";
  button.style.cursor = "pointer";
  button.style.width = "100%";
  button.style.height = "120px";
  button.textContent = text;
  button.style.textAlign = "center";
  button.style.textAnchor = "middle";
  button.style.overflow = "hidden";
  button.style.whiteSpace = "nowrap";
  button.style.textOverflow = "ellipsis";
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
    var iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.position = "fixed";
    iframe.style.top = "0";
    iframe.style.left = "0";
    iframe.style.border = "none";
    document.body.appendChild(iframe);
  
    var button = document.createElement("button");
    button.id = "buttonback";
    button.style.backgroundColor = "rgb(0,150,255)";
    button.style.color = "#DDDDDD";
    button.style.padding = "10px";
    button.style.borderRadius = "10px";
    button.style.border = "none";
    button.style.margin = "5px";
    button.style.cursor = "pointer";
    button.style.width = "17.25%";
    button.style.height = "4.45%";
    button.style.position = "fixed";
    button.style.bottom = "10px";
    button.style.left = "50%";
    button.style.transform = "translateX(-50%)";
    button.textContent = "Go back";
    button.style.textAlign = "center";
    button.style.textAnchor = "middle";
    button.style.overflow = "hidden";
    button.style.whiteSpace = "nowrap";
    button.style.textOverflow = "ellipsis";
    button.onclick = function () {
      outWithTheOldInWithTheNew();
    };
  
    document.body.appendChild(button);
  }
}