(function(){
var d=document,nav=d.getElementById('nav'),b=d.getElementById('burger'),s=d.getElementById('scrim'),x=d.getElementById('close');
function set(o){nav.classList.toggle('open',o);s.classList.toggle('on',o);b.setAttribute('aria-expanded',o);d.body.classList.toggle('lock',o);(o?x:b).focus()}
b.addEventListener('click',function(){set(!nav.classList.contains('open'))});
s.addEventListener('click',function(){set(false)});x.addEventListener('click',function(){set(false)});
d.addEventListener('keydown',function(e){if(e.key==='Escape'&&nav.classList.contains('open'))set(false)});
window.addEventListener('resize',function(){if(innerWidth>980&&nav.classList.contains('open'))set(false)});
d.querySelectorAll('img[data-f]').forEach(function(i){i.addEventListener('error',function(){i.remove()})});
var t=d.querySelectorAll('.tabs button');t.forEach(function(k){k.addEventListener('click',function(){
 t.forEach(function(z){z.classList.toggle('on',z===k)});
 d.querySelectorAll('[data-lv]').forEach(function(c){c.style.display=(k.dataset.f==='all'||c.dataset.lv===k.dataset.f)?'':'none'})})});
var n=d.getElementById('nf');if(n)n.addEventListener('click',function(){var e=n.previousElementSibling;if(/^\S+@\S+\.\S+$/.test(e.value)){n.textContent='عضو شدید ✓';e.value=''}else{e.focus();e.style.outline='3px solid #f66'}});
var f=d.getElementById('cf');if(f)f.addEventListener('submit',function(e){e.preventDefault();var ok=true;
 f.querySelectorAll('[required]').forEach(function(i){var m=i.parentNode.querySelector('.err'),bad=!i.value.trim()||(i.type==='tel'&&!/^[0-9۰-۹]{10,11}$/.test(i.value.trim()));m.textContent=bad?(i.type==='tel'?'شماره تماس معتبر وارد کنید':'این فیلد الزامی است'):'';if(bad)ok=false});
 if(ok){d.getElementById('ok').style.display='block';f.reset()}});
})();
