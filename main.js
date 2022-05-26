// Mobile nav burger
let burger = document.getElementById('burger'),
	 nav    = document.getElementById('mod-nav');

burger.addEventListener('click', function(e){
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});
$(burger).keyup(function(event){
	if (event.keyCode == 27){
		// Close the menu
		$(burger).closeElement();
}});

// Darkmode Friendly
// Check to see if Media-Queries are supported
if (window.matchMedia) {
    // Check if the dark-mode Media-Query matches
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      // Dark
    } else {
      // Light
    }
  } else {
    // Default (when Media-Queries are not supported)
  }
  // Update Color Scheme
  function setColorScheme(scheme) {
    switch(scheme){
      case 'dark':
        // Dark
        break;
      case 'light':
        // Light
        break;
      default:
        // Default
        break;
    }
  }
  
  function getPreferredColorScheme() {
    if (window.matchMedia) {
      if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        return 'dark';
      } else {
        return 'light';
      }
    }
    return 'light';
  }
  
  if(window.matchMedia){
    var colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    colorSchemeQuery.addEventListener('change', setColorScheme(getPreferredColorScheme()));
  }