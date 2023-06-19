var inputText = "";
var buttonPress = 0;
var scrollLocked = true;

function handleInput(event) {
  inputText += event.key;
  if (inputText === "amongus") {
    outWithTheOldInWithTheNew()
  }
  if (inputText === "qwerty") {
    var button = document.getElementById("invisible-button");
    button.style.display = "block";
  }
  if (inputText === "qwertyuiop" && buttonPress === 1) {
    var button2 = document.getElementById("invis2");
    button2.style.display = "block";
    scrollLocked = false;
    
  }

  if (scrollLocked) {
    event.preventDefault(); // Prevent scrolling until unlocked
  }
}

function stage2() {
  buttonPress = 1;
  
}
function clear() {
  document.body.style.overflow = ""; // Unlock scroll wheel
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
  var body = document.body;
  var childNodes = body.childNodes;
  for (var i = childNodes.length - 1; i >= 0; i--) {
    var node = childNodes[i];
    if (node.nodeName !== "SCRIPT" && node.nodeName !== "STYLE") {
      body.removeChild(node);
    }
  }
  
  // Change background to a darker shade
  document.body.style.backgroundColor = "#333333";
  
  // Create buttons
  var container1 = document.createElement("div");
  container1.style.position = "fixed";
  container1.style.top = "10%";
  container1.style.left = "0";
  container1.style.right = "0";
  container1.style.transform = "translateY(-50%)";
  container1.style.display = "flex";
  container1.style.alignItems = "center";
  container1.style.justifyContent = "center";
  container1.style.width = "100%";
  document.body.appendChild(container1);

  var container2 = document.createElement("div");
  container2.style.position = "fixed";
  container2.style.top = "25%";
  container2.style.left = "0";
  container2.style.right = "0";
  container2.style.transform = "translateY(-50%)";
  container2.style.display = "flex";
  container2.style.alignItems = "center";
  container2.style.justifyContent = "center";
  container2.style.width = "100%";
  document.body.appendChild(container2);

  var container3 = document.createElement("div");
  container3.style.position = "fixed";
  container3.style.top = "40%";
  container3.style.left = "0";
  container3.style.right = "0";
  container3.style.transform = "translateY(-50%)";
  container3.style.display = "flex";
  container3.style.alignItems = "center";
  container3.style.justifyContent = "center";
  container3.style.width = "100%";
  document.body.appendChild(container3);

  var container4 = document.createElement("div");
  container4.style.position = "fixed";
  container4.style.top = "55%";
  container4.style.left = "0";
  container4.style.right = "0";
  container4.style.transform = "translateY(-50%)";
  container4.style.display = "flex";
  container4.style.alignItems = "center";
  container4.style.justifyContent = "center";
  container4.style.width = "100%";
  document.body.appendChild(container4);

  var container5 = document.createElement("div");
  container5.style.position = "fixed";
  container5.style.top = "70%";
  container5.style.left = "0";
  container5.style.right = "0";
  container5.style.transform = "translateY(-50%)";
  container5.style.display = "flex";
  container5.style.alignItems = "center";
  container5.style.justifyContent = "center";
  container5.style.width = "100%";
  document.body.appendChild(container5);

  var container6 = document.createElement("div");
  container6.style.position = "fixed";
  container6.style.top = "85%";
  container6.style.left = "0";
  container6.style.right = "0";
  container6.style.transform = "translateY(-50%)";
  container6.style.display = "flex";
  container6.style.alignItems = "center";
  container6.style.justifyContent = "center";
  container6.style.width = "100%";
  document.body.appendChild(container6);

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
        var fontSize = Math.floor(buttonWidth / 14); // Adjust the division factor to scale the font size
        button.style.fontSize = fontSize + "px";
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