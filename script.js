var mode = window.localStorage.getItem("mode");

if (mode != null) {
  if (mode == "dark") {
    changeModeToDark();
    document.getElementById("checkbox").checked = true;
  }
}

// function to switch mode when our checkbox (switch) is clicked
function switchMode(e) {
  if (e.checked) {
    window.localStorage.setItem("mode", "dark");
    changeModeToDark();
  } else {
    window.localStorage.setItem("mode", "light");
    changeModeToLight();
  }
}

//  these functions (changeModeToDark & changeModeToLight) changes the src of our link tags to css files of corresponding theme
function changeModeToDark() {
  var maincss = document.getElementById("maincss");
  var leftcss = document.getElementById("leftcss");
  var rightcss = document.getElementById("rightcss");
  maincss.setAttribute("href", "css/dark/portfolio.css");
  leftcss.setAttribute("href", "css/dark/left_side.css");
  rightcss.setAttribute("href", "css/dark/right_side.css");
  document.getElementById("education-table").classList.add("table-dark");
}
function changeModeToLight() {
  var maincss = document.getElementById("maincss");
  var leftcss = document.getElementById("leftcss");
  var rightcss = document.getElementById("rightcss");
  maincss.setAttribute("href", "css/portfolio.css");
  leftcss.setAttribute("href", "css/left_side.css");
  rightcss.setAttribute("href", "css/right_side.css");
  document.getElementById("education-table").classList.remove("table-dark");
}
