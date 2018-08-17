var h1 = document.querySelector("h1");
h1.addEventListener("click", function(){
	alert("H1 was clicked");
	h1.style.background="orange";
});

var button = document.querySelector("#ClickMe");
button.addEventListener("click",Fbutton);


function Fbutton(){
	var p = document.querySelector("#last");
	p.textContent = "Well You clicked me!";
	p.style.color = "red";
}
var p =document.querySelector("#last");
var text = p.innerHTML;
console.log(text);

var lis = document.querySelectorAll("li");
console.log(lis[0]);

for(var i=0;i<lis.length;i++){
	lis[i].addEventListener("click",function(){
			alert("Hey u just clicked");
			console.log(lis);
			this.style.color = "purple";
			// lis[i].textContent = "this content is replaced on clicking.";
	});

}

// ul.addEventListener("click",function(){

// 	alert("The list was clicked !");
// 	ul.textContent = "This list was changed on a click";

// });
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


