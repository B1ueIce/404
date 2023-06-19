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
  document.body.style.overflow = "visible";
  var body = document.body;
  var childNodes = body.childNodes;
  for (var i = childNodes.length - 1; i >= 0; i--) {
    var node = childNodes[i];
    if (node.nodeName !== "SCRIPT" && node.nodeName !== "STYLE") {
      body.removeChild(node);
    }
  }

  document.body.style.backgroundColor = "#444444";

  var container1 = createContainer("10%");
  var container2 = createContainer("25%");
  var container3 = createContainer("40%");
  var container4 = createContainer("55%");
  var container5 = createContainer("70%");
  var container6 = createContainer("85%");

  var Mario = createContainer("270%");
  var Mario2 = createContainer("285%");
  var Mario3 = createContainer("300%");


  
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

  createButton(container1, "#0000ff", "Browser", "https://cloudflare.rammerhead.org");

  createButton(container2, "#0032ff", "Dino game", "https://chromedino.com/");
  createButton(container2, "#0032ff", "Are you kidding me?", "https://turbowarp.org/836226987/embed");
  createButton(container2, "#0032ff", "Clicker Heroes", "https://games-online.io/game/ClickerHeroes/");
  createButton(container2, "#0032ff", "FNF", "https://static.playunblocked.com/2021/04/friday-night-funkin/");
  createButton(container2, "#0032ff", "Chess", "https://toytheater.com/chess.php");
  createButton(container2, "#0032ff", "Checkers", "https://toytheater.com/checkers.php");
  createButton(container2, "#0032ff", "Run 3", "https://unblocked1889.github.io/R033/tn6pS9dCf37xAhkJv/");
  
  createButton(container3, "#0064ff", "Subway Surfers", "https://superteamxx.github.io/Subway-Surfers/");
  createButton(container3, "#0064ff", "GD", "https://turbowarp.org/105500895/embed");
  createButton(container3, "#0064ff", "Youtube bypass", "https://speedtesting.herokuapp.com/videodrive/?m=Video_To_Drive");
  createButton(container3, "#0064ff", "2d Minecraft", "https://turbowarp.org/10128407/embed");
  createButton(container3, "#0064ff", "Mario", "https://jcw87.github.io/c2-smb1/");
  createButton(container3, "#0064ff", "Bored button", "https://www.boredbutton.com/random");
  
  createButton(container4, "#0095ff", "Riddle School", "https://sz-games.github.io/games/ridd");
  createButton(container4, "#0095ff", "Riddle School 2", "https://sz-games.github.io/games/ridd2");
  createButton(container4, "#0095ff", "Riddle School 3", "https://sz-games.github.io/games/ridd3");
  createButton(container4, "#0095ff", "Riddle School 4", "https://sz-games.github.io/games/ridd4");
  createButton(container4, "#0095ff", "Riddle School 5", "https://sz-games.github.io/games/ridd5");
  createButton(container4, "#0095ff", "Riddle Transfer", "https://sz-games.github.io/games/ridd6");
  createButton(container4, "#0095ff", "Riddle Transfer 2", "https://sz-games.github.io/games/ridd7");
  
  createButton(container5, "#00c8ff", "Smash Karts", "https://mr-funkinguy.github.io/75/projects/smashkarts/index.html");
  createButton(container5, "#00c8ff", "Agar.io", "https://emupedia.net/emupedia-game-agar.io/");
  createButton(container5, "#00c8ff", "Stack", "https://sz-games.github.io/games/stack");
  
  createButton(container6, "#00faff", "Crossy Road", "https://sz-games.github.io/cr/");
  createButton(container6, "#00faff", "Fluids", "https://sz-games.github.io/storage3/1/");
  createButton(container6, "#00faff", "Temple Run 2", "https://mr-funkinguy.github.io/Abc6782/games/temple-run-2/index.html");
  createButton(container6, "#00faff", "Google Snake!", "https://mr-funkinguy.github.io/gfile/snake/index.html");
  
  createButton(Mario, "#ff0000", "Mario", "https://jcw87.github.io/c2-smb1/");
  createButton(Mario, "#ff0000", "Mario", "https://jcw87.github.io/c2-smb1/");
  createButton(Mario, "#ff0000", "Mario", "https://jcw87.github.io/c2-smb1/");
  createButton(Mario, "#ff0000", "Mario", "https://jcw87.github.io/c2-smb1/");
  createButton(Mario, "#ff0000", "Mario", "https://jcw87.github.io/c2-smb1/");
  createButton(Mario, "#ff0000", "Mario", "https://jcw87.github.io/c2-smb1/");
  createButton(Mario, "#ff0000", "Mario", "https://jcw87.github.io/c2-smb1/");
  createButton(Mario, "#ff0000", "Mario", "https://jcw87.github.io/c2-smb1/");

  createButton(Mario2, "#ff0000", "Mario", "https://jcw87.github.io/c2-smb1/");
  createButton(Mario2, "#ff0000", "Mario", "https://jcw87.github.io/c2-smb1/");
  createButton(Mario2, "#ff0000", "Mario", "https://jcw87.github.io/c2-smb1/");
  createButton(Mario2, "#ff0000", "Mario", "https://jcw87.github.io/c2-smb1/");

  createButton(Mario3, "#ff0000", "Mario", "https://jcw87.github.io/c2-smb1/");
  createButton(Mario3, "#ff0000", "Mario", "https://jcw87.github.io/c2-smb1/");
  createButton(Mario3, "#ff0000", "Mario", "https://jcw87.github.io/c2-smb1/");
  createButton(Mario3, "#ff0000", "Mario", "https://jcw87.github.io/c2-smb1/");
  createButton(Mario3, "#ff0000", "Mario", "https://jcw87.github.io/c2-smb1/");



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
  
  document.body.style.height = "300vh";

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
    button.style.backgroundColor = "#0095ff";
    button.style.color = "#DDDDDD";
    button.style.padding = "10px";
    button.style.borderRadius = "10px";
    button.style.border = "none";
    button.style.margin = "5px";
    button.style.cursor = "pointer";
    button.style.width = "17.25%";
    button.style.height = "3.45%";
    button.style.position = "fixed";
    button.style.bottom = "10px";
    button.style.left = "50%";
    button.style.transform = "translateX(-50%)";
    button.textContent = "Go back";
    button.onclick = function () {
      outWithTheOldInWithTheNew();
    };
  
    document.body.appendChild(button);
  }
}