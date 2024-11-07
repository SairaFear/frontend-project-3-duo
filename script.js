function itel() {
    gsap.registerPlugin(ScrollTrigger);



    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    window.addEventListener('load', () => {
      scroll.update();
  });
    
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, 
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    
    
    
    
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    ScrollTrigger.refresh();
    
    
}
itel()
let page=document.querySelector("body")
let cursor=document.querySelector("#cursor")
page.addEventListener("mousemove",function(dets){
gsap.to(cursor,{
  opacity:1,
  x:dets.x+20,
  y:dets.y+20
})
})
var tl=gsap.timeline({
  scrollTrigger:{
    trigger:"#page1 h1",
    scroller:"#main",
   
    start:"top 30%",
    end:" top 0",
    scrub:2
}
})
tl.to("#page1 h1",{
    x:-90,
    filter:"blur(10px)",
    ease: "power2.out" ,
 
},"anim")

tl.to("#page1 h2",{
  x:90,
  filter:"blur(10px)",
  ease: "power2.out" ,

},"anim")
tl.to("#page1 #vedio",{
  width:"90%"
  

},"anim")
var tl2=gsap.timeline({
  scrollTrigger:{
    trigger:"#page1 h1",
    scroller:"#main",
   
    start:"top -110%",
    end:" top -130",
    scrub:2
}
})

tl2.to("#main",{
  backgroundColor:"#fff",
  color:"black"
})

let tl3=gsap.timeline({
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
   
    start:"top -80%",
    end:" top -100",
    scrub:2
}
})
tl3.to("#main",{
  backgroundColor:"#0F0D0D",
  color:"#fff"
})
let a=document.querySelector("#ele1")
a.addEventListener("mouseenter",function(){
  cursor.innerHTML=`<img src="${"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlfGVufDB8fDB8fHww"}" width="400" style="border-radius:15px; z-index:7; cursor:none;"/>`
  cursor.style.backgroundColor="transparent"
})

a.addEventListener("mouseleave",function(){
  cursor.innerHTML=""
    cursor.style.backgroundColor="pink"
})
let b=document.querySelector("#ele2")
b.addEventListener("mouseenter",function(){
  cursor.innerHTML=`<img src="${"https://images.unsplash.com/photo-1720293315632-37efe958d5ec?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}" width="400" style="border-radius:15px; z-index:7; cursor:none;"/>`
  cursor.style.backgroundColor="transparent"
})

b.addEventListener("mouseleave",function(){
  cursor.innerHTML=""
    cursor.style.backgroundColor="pink"
})
let c=document.querySelector("#ele3")
c.addEventListener("mouseenter",function(){
  cursor.innerHTML=`<img src="${"https://images.unsplash.com/photo-1719166922691-ac506e6bf36e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG9iamVjdHN8ZW58MHx8MHx8fDA%3D"}" width="400" style="border-radius:15px; z-index:7; cursor:none;"/>`
  cursor.style.backgroundColor="transparent"
})

c.addEventListener("mouseleave",function(){
  cursor.innerHTML=""
    cursor.style.backgroundColor="pink"
})
let d=document.querySelector("#ele4")
d.addEventListener("mouseenter",function(){
  cursor.innerHTML=`<img src="${"https://images.unsplash.com/photo-1597187495130-6b7cf324e97f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fG9iamVjdHN8ZW58MHx8MHx8fDA%3D"}" width="400" style="border-radius:15px; z-index:7; cursor:none;"/>`
  cursor.style.backgroundColor="transparent"
})

d.addEventListener("mouseleave",function(){
  cursor.innerHTML=""
    cursor.style.backgroundColor="pink"
})
let e=document.querySelector("#ele5")
e.addEventListener("mouseenter",function(){
  cursor.innerHTML=`<img src="${"https://images.unsplash.com/photo-1531790802278-dc1baeea3013?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}" width="400" style="border-radius:15px; z-index:7; cursor:none;"/>`
  cursor.style.backgroundColor="transparent"
})

e.addEventListener("mouseleave",function(){
  cursor.innerHTML=""
    cursor.style.backgroundColor="pink"
})





