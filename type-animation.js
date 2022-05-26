var i = 0;
var txt = 'Hey, I&aposm Zach Varga<br>Front End Engineer'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("hero").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}