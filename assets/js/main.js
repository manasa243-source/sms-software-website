// Main script: menu, tabs, demo interactions, scroll-spy, form validation. No external dependencies.
(function(){
 var $=function(s,c){return(c||document).querySelector(s)},$$=function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))};
 $('#yr').textContent=new Date().getFullYear();
 var nav=$('#menu'),bg=$('.burger');
 bg.addEventListener('click',function(){var o=nav.classList.toggle('open');bg.setAttribute('aria-expanded',o)});
 $$('#menu a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('open');bg.setAttribute('aria-expanded','false')})});
 $$('[data-inquiry]').forEach(function(a){a.addEventListener('click',function(){$('#type').value=a.getAttribute('data-inquiry')})});
 var tabs=$$('[role=tab]');
 tabs.forEach(function(t){t.addEventListener('click',function(){tabs.forEach(function(x){x.setAttribute('aria-selected',x===t);$('#'+x.getAttribute('aria-controls')).hidden=x!==t})})});
 // Demo only: nothing is stored or sent
 $$('.reg').forEach(function(b){b.addEventListener('click',function(){var d=b.textContent.indexOf('Registered')<0;b.textContent=d?'Registered (demo) ✓':'Register (demo)'})});
 $('#demoReg').addEventListener('submit',function(e){e.preventDefault();$('#demoMsg').textContent='Demo only: no data was saved or sent.'});
 var names=['Student B','Student D','Student E'],ni=0;
 $('#certBtn').addEventListener('click',function(){ni=(ni+1)%names.length;$('#certName').textContent=names[ni]});
 var top=$('#top');top.addEventListener('click',function(){window.scrollTo({top:0})});
 var secs=$$('main section[id]');
 window.addEventListener('scroll',function(){top.hidden=window.scrollY<500;var y=window.scrollY+120,cur='';secs.forEach(function(s){if(s.offsetTop<=y)cur=s.id});$$('#menu a').forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+cur)})},{passive:true});
 // Contact form: validate, then open the visitor's email app (mailto).
 var EMAIL='YOUR-EMAIL@example.com'; // TODO: replace with your real email
 var f=$('#form'),st=$('#status');
 f.addEventListener('submit',function(e){
  e.preventDefault();var bad=[];
  ['name','org','email','msg'].forEach(function(id){var el=$('#'+id),v=el.value.trim(),ok=v&&(id!=='email'||/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));el.classList.toggle('bad',!ok);el.removeAttribute('aria-invalid');if(!ok){el.setAttribute('aria-invalid','true');bad.push(el)}});
  if(bad.length){st.className='err';st.textContent='Please correct the highlighted fields.';bad[0].focus();return}
  var p=$('#phone').value.trim(),body='Name: '+$('#name').value+'\nOrganization: '+$('#org').value+'\nEmail: '+$('#email').value+(p?'\nPhone: '+p:'')+'\n\n'+$('#msg').value;
  window.location.href='mailto:'+EMAIL+'?subject='+encodeURIComponent($('#type').value+' - '+$('#org').value)+'&body='+encodeURIComponent(body);
  st.className='ok';st.textContent='Your email app should open. Please press send there to deliver your inquiry.';
 });
})();
