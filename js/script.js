var txt1 = "If you want to go quickly, go alone.";
var txt2 = "If you want to go far, go together.";
var speed = 90; /* The speed/duration of the effect in milliseconds */

function typeWriter(text, id, i = 0) {
	if (i < text.length) {
		document.getElementById(id).innerHTML += text.charAt(i);
		i++;
		setTimeout(() => typeWriter(text, id, i), speed);
	}
}

setTimeout(() => typeWriter(txt1, "subtext1"), 1000);

setTimeout(() => typeWriter(txt2, "subtext2"), 1500 + speed * txt1.length);
