var h1 = document.querySelector("h1");
h1.classList.toggle("red");

var p =document.querySelector("#last");
var text = p.innerHTML;
console.log(text);

var ul =document.querySelector("ul");
ul.innerHTML = "this text has just been replaced!";

var link = document.querySelector("img");
var bool = true;
setInterval(function(){
	if(bool==true){
		link.setAttribute("src","https://cdn.vox-cdn.com/thumbor/th5YNVqlkHqkz03Va5RPOXZQRhA=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/57358643/jbareham_170504_1691_0020.0.0.jpg");

	}
	else{
		link.setAttribute("src","https://pay.google.com/about/static/images/social/og_image.jpg");

	}
	bool = !bool;
},1000);


