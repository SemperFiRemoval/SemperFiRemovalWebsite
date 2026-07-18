
const menuButton=document.querySelector(".menu-button");
const nav=document.querySelector(".main-nav");
menuButton?.addEventListener("click",()=>{
  nav?.classList.toggle("open");
  document.body.classList.toggle("menu-open");
  menuButton.setAttribute("aria-expanded",nav?.classList.contains("open")?"true":"false");
});
document.querySelectorAll(".main-nav a").forEach(a=>a.addEventListener("click",()=>{
  nav?.classList.remove("open");document.body.classList.remove("menu-open");
}));
document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());
