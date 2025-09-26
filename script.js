const nav_links= document.querySelectorAll('.nav-link');
const sectionEls= document.querySelectorAll(".section");
let header = document.getElementById('header');
let headerHeight = header.offsetHeight;
let headertop= header.offsetTop;

let currentSection = sectionEls[0].id;


function scrollBy(){
  sectionEls.forEach(sectionEl=>{
    

    let currentPos= window.scrollY;

    if( window.scrollY>=(sectionEl.offsetTop -headerHeight)){
      currentSection=sectionEl.id;
    }
  });

  nav_links.forEach(nav_link=>{
    if(!currentSection.localeCompare(nav_link.innerText.toLowerCase())){
      nav_link.classList.add("active");
      nav_link.classList.remove("inactive");

    }else{
      nav_link.classList.add("inactive");
      nav_link.classList.remove("active");
    }
  })
  
}

document.addEventListener("scroll", () => {
        scrollBy();
      });

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

function sendmail(e) {
  const emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let name = document.getElementById("name").value;
  let from = document.getElementById("mailer").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;
  let params;
  if(name==""){
    alert("name is required");
  }else{

    if(from==""){
      alert("email is required");
    }
    else{
        if(!emailRegex.test(from)){
            alert("enter valid email");
          }else{      
          if( subject=="" ){
          alert("subject is required");
          }
          else{

              if(message==""){
            alert("message is required");
            }
            else{
        params={name:name,subject:subject,email:from,message:message};
          emailjs.send("service_mer1y3o","template_t8g3b28",params).then(alert("email has been sent"));
          document.getElementById("name").value="";
          document.getElementById("mailer").value="";
          document.getElementById("subject").value="";
          document.getElementById("message").value="";
      }
      }
      }
    }
  }
}


function scrolling(e) {
  // let nav= document.getElementById("navigation");
  // let nav_links= nav.getElementsByClassName("nav-link");
  for(i=0;i<nav_links.length;i++){
    
    if(nav_links[i].classList.contains("active")){
      nav_links[i].classList.remove("active");
      nav_links[i].classList.add("inactive");
    }
    
  }
  e.classList.remove("inactive");
  e.classList.add("active");
  let link_text = e.innerText;
  link_text = link_text.toLowerCase();

  let link = document.getElementById(link_text);

  let height =
    link.getBoundingClientRect().top +
    window.pageYOffset -
    document.getElementById("header").offsetHeight;

  window.scrollTo({ top: height, behavior: "smooth" });

}

function scrolledTo(){
  let height =
    document.getElementById("contact").getBoundingClientRect().top +
    window.pageYOffset -
    document.getElementById("header").offsetHeight;

  window.scrollTo({ top: height, behavior: "smooth" });
}









