window.addEventListener("load",()=>setTimeout(()=>document.getElementById("loader").classList.add("hide"),800));
const menu=document.getElementById("menu"), navLinks=document.getElementById("navLinks");
menu.onclick=()=>navLinks.classList.toggle("show");
document.querySelectorAll("#navLinks a").forEach(a=>a.onclick=()=>navLinks.classList.remove("show"));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.15});
document.querySelectorAll(".reveal").forEach(r=>io.observe(r));
const canvas=document.getElementById("stars"),ctx=canvas.getContext("2d");let w,h,stars=[];
function resize(){w=canvas.width=innerWidth;h=canvas.height=innerHeight;stars=Array.from({length:120},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*2+0.5,v:Math.random()*0.7+0.2}))}
resize();addEventListener("resize",resize);
function draw(){ctx.clearRect(0,0,w,h);for(const s of stars){s.y+=s.v;if(s.y>h)s.y=0;ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fillStyle="rgba(255,255,255,.8)";ctx.fill()}requestAnimationFrame(draw)}draw();
function blast(){const colors=["#ff28cc","#00d9ff","#fff176","#ff8a80","#a78bfa"];for(let i=0;i<140;i++){const c=document.createElement("div");c.className="confetti";c.style.left=Math.random()*100+"vw";c.style.background=colors[Math.floor(Math.random()*colors.length)];c.style.animationDelay=Math.random()*0.8+"s";document.body.appendChild(c);setTimeout(()=>c.remove(),4200)}}
const blastBtn=document.getElementById("blast"); if(blastBtn) blastBtn.onclick=blast;