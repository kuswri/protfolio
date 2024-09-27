var btn2 = document.querySelector("#btn2");
var btn1 = document.querySelector("#btn1");

btn1.addEventListener("touchstart",function(){
btn1.style.backgroundColor="#2ecc71";
})

btn1.addEventListener("touchend",function(){
btn1.style.backgroundColor="#333";
})

btn2.addEventListener("touchstart",function(){
btn2.style.backgroundColor="#2ecc71";
})

btn2.addEventListener("touchend",function(){
btn2.style.backgroundColor="#333";
})
var links = document.querySelectorAll(".links");

links.forEach(function(em){
em.addEventListener("touchstart",function(){
em.style.backgroundColor="#2ecc71";
})

em.addEventListener("touchend",function(){
em.style.backgroundColor="#333";
})

})

var project = document.querySelectorAll(".project");

project.forEach(function(e){

e.addEventListener("touchstart",function(){
e.style.scale="1.1";
e.style.boxShadow="0px 0px 5px 1px aqua";
})


e.addEventListener("touchend",function(){
e.style.boxShadow="none";
e.style.scale="1";

})

})


var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");
var img3 = document.querySelector(".img3");


img1.addEventListener("touchstart",function(){
img1.style.boxShadow="0px 0px 5px 1px aqua";
img1.style.zIndex="2";
img1.style.scale="1.05";
img2.style.opacity=".5";
img3.style.opacity=".5";

})

img1.addEventListener("touchend",function(){
img1.style.boxShadow="none";
img1.style.zIndex="0";
img1.style.scale="1";
img2.style.opacity="1";
img3.style.opacity="1";
})



img2.addEventListener("touchstart",function(){
img2.style.boxShadow="0px 0px 5px 1px aqua";
img2.style.zIndex="2";
img2.style.scale="1.05";
img1.style.opacity=".5";
img3.style.opacity=".5";
})

img2.addEventListener("touchend",function(){

img2.style.boxShadow="none";
img2.style.zIndex="0";
img2.style.scale="1";
img1.style.opacity="1";
img3.style.opacity="1";
})



img3.addEventListener("touchstart",function(){
img3.style.boxShadow="0px 0px 5px 1px aqua";
img3.style.zIndex="2";
img3.style.scale="1.05";
img2.style.opacity=".5";
img1.style.opacity=".5";
})

img3.addEventListener("touchend",function(){

img3.style.boxShadow="none";
img3.style.zIndex="0";
img3.style.scale="1";
img2.style.opacity="1";
img1.style.opacity="1";
})



const elements = [ 
"#bio",
"#contact",
".fa-person-skiing",
"#service-help",
"#feat",
"#works",
".fa-arrow-down",
".project1",
".project2",
".project3",
".project4",
".project5",
"#btn1",
"#btn2",
"#heading1",
"#heading2",
"#heading3",
"#heading4",
"#heading5",
".link1",
".link2",
".link3",
".link4",
".link5",
".link6",
".certificate1",
".certificate2",
"#c3",
];

elements.forEach(el => {
  gsap.from(el, {
  y: 50,
  duration: 0.5,
  scrollTrigger: { 
  trigger: el,
  toggleActions: "play none none reset"

  } 
  
  }); 
  
  });
  
  


const parent = document.getElementById('img-cont');
const children = parent.children;

window.addEventListener('scroll', () => {
  const top = parent.getBoundingClientRect().top;
  const scrollY = window.scrollY;

  if (top < window.innerHeight / 2) {
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      child.style.transform = translateY(${scrollY /6}px);

    }
  } 
  else {
    for (let i = 0; i < children.length; i++)
    {
      const child = children[i];
      child.style.transform = '';
    }
  }
});