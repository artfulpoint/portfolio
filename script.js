let currentYear=new Date().getFullYear;
document.getElementById("year").innerHTML=currentYear;;



function clicked(e) {
  let theme_name = e.getAttribute("src");
  theme_name = theme_name.replace("images/", "");
  theme_name = theme_name.replace(".png", "");

  if (theme_name == "light") {
    e.setAttribute("src", "images/dark.png");
    let body_theme = document.getElementsByClassName("light");

    body_theme[0].setAttribute("class", "dark");
  } else {
    e.setAttribute("src", "images/light.png");
    let body_theme = document.getElementsByClassName("dark");
    body_theme[0].setAttribute("class", "light");
  }
}

// function scrolling(e) {
//   let header = document.getElementById("header");
//   let href = e.textContent;
//   //   e.getAttribute("href");
//   //   href = href.replace("#", "");
//   console.log(href);
//   let element = document.getElementById(href);
//   console.log(header);
//   console.log(element);
//   let headerOffSetHeight = header.offsetHeight;
//   let elementOffSetHeight = element.offsetHeight;
//   console.log(headerOffSetHeight);
//   console.log(elementOffSetHeight);
//   element.addEventListener("click", function (event) {
//     event.preventDefault();
//   });
//   elementOffSetHeight - headerOffSetHeight;
//   window.scrollTo({ top: elementOffSetHeight, behavior: "smooth" });
//   //   let links = document.getElementById("inner-body").addEventListener;
//   //   links.scrollTo({ top: 125, behavior: "smooth" });
// }

