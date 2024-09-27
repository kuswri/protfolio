document.querySelectorAll('.projects a').forEach(link => {
  link.addEventListener('click', function(event) {
      alert('You are navigating to: ' + this.href);
  });
});
