// ios-enforcer.js
(function(){
  if(!/iPhone|iPad|iPod/i.test(navigator.userAgent)) return;
  
  const enforce = () => {
    document.querySelectorAll('button[aria-label="+"], button[aria-label="−"]')
      .forEach(b => b.style.display = 'none');
      
    document.querySelectorAll('span.quantity, input[type="number"]')
      .forEach(e => {
        e.textContent = '1';
        e.style.cssText = 'color:#888!important; background:#eee!important; padding:4px;';
      });
  };

  document.addEventListener('DOMContentLoaded', enforce);
  new MutationObserver(enforce).observe(document.body, {
    childList: true,
    subtree: true
  });
})();
