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