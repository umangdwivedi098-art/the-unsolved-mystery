// Smooth Fade Animation

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

sections.forEach(section=>{

observer.observe(section);

});


// Sticky Navbar Shadow

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.boxShadow="0 0 25px gold";

}else{

header.style.boxShadow="0 0 10px rgba(255,215,0,.2)";

}

});


// Active Navigation

const navLinks=document.querySelectorAll("nav ul li a");

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

navLinks.forEach(item=>item.classList.remove("active"));

link.classList.add("active");

});

});


// Typing Effect

const text="Stories Beyond Imagination";

const heading=document.querySelector(".hero h2");

heading.textContent="";

let i=0;

function typing(){

if(i<text.length){

heading.textContent+=text.charAt(i);

i++;

setTimeout(typing,90);

}

}

typing();


// Back To Top Button

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="20px";
topBtn.style.bottom="20px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.background="gold";
topBtn.style.color="black";
topBtn.style.border="none";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.fontSize="22px";
topBtn.style.fontWeight="bold";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
