
const menuBtn=document.querySelector(".menu-btn");
const mobileNav=document.querySelector(".mobile-nav");
menuBtn?.addEventListener("click",()=>{
  mobileNav?.classList.toggle("open");
  document.body.classList.toggle("menu-open");
});
document.querySelectorAll(".mobile-nav a").forEach(a=>a.addEventListener("click",()=>{
  mobileNav?.classList.remove("open");document.body.classList.remove("menu-open");
}));
document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());
