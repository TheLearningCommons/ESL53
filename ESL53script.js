// Resize image map.

window.onload = function () {
    var ImageMap = function (map) {
            var n,
                areas = map.getElementsByTagName('area'),
                len = areas.length,
                coords = [],
                previousWidth = 1366;
            for (n = 0; n < len; n++) {
                coords[n] = areas[n].coords.split(',');
            }
            this.resize = function () {
                var n, m, clen,
                    x = document.body.clientWidth / previousWidth;
                for (n = 0; n < len; n++) {
                    clen = coords[n].length;
                    for (m = 0; m < clen; m++) {
                        coords[n][m] *= x;
                    }
                    areas[n].coords = coords[n].join(',');
                }
                previousWidth = document.body.clientWidth;
                return true;
            };
            window.onresize = this.resize;
        },
        imageMap = new ImageMap(document.getElementById('breakfastMap'));
    imageMap.resize();
}

// Modal for kitchen slide.


var kitchen = document.getElementById('foodModal'); // Div variable.

var foodImg0 = document.getElementById('jimmyDean'); // FoodImg0-20 are the variables for each individual areas.
var foodImg1 = document.getElementById('banquet');
var foodImg2 = document.getElementById('smartones');
var foodImg3 = document.getElementById('breakfastBowl');
var foodImg4 = document.getElementById('devour');
var foodImg5 = document.getElementById('eggos');
var foodImg6 = document.getElementById('burrito');
var foodImg7 = document.getElementById('hashbrowns');
var foodImg8 = document.getElementById('eggs');
var foodImg9 = document.getElementById('pizza');
var foodImg10 = document.getElementById('muffin');
var foodImg11 = document.getElementById('milk');
var foodImg12 = document.getElementById('coke');
var foodImg13 = document.getElementById('juice');
var foodImg14 = document.getElementById('water');
var foodImg15 = document.getElementById('pancakes');
var foodImg16 = document.getElementById('trix');
var foodImg17 = document.getElementById('donuts');
var foodImg18 = document.getElementById('total');
var foodImg19 = document.getElementById('wheatbread');
var foodImg20 = document.getElementById('apple');
var modalImg = document.getElementById("kitchen1"); // Variable for the class of the image inside the modal.
var captionText = document.getElementById("captionModal"); // Div variable for the caption.

//  Function to make modal visable and activate animations of image and caption.

foodImg0.onclick = function(){
	kitchen.style.display = "block";
	modalImg.src = "https://libapps.s3.amazonaws.com/accounts/283153/images/jimmydean.jpeg";
	captionText.innerHTML = this.alt;
}

foodImg1.onclick = function(){
	kitchen.style.display = "block";
	modalImg.src = "https://libapps.s3.amazonaws.com/accounts/283153/images/banquet.png";
	captionText.innerHTML = this.alt;
}

foodImg2.onclick = function(){
	kitchen.style.display = "block";
	modalImg.src = "https://libapps.s3.amazonaws.com/accounts/283153/images/smartones.png";
	captionText.innerHTML = this.alt;
}

foodImg3.onclick = function(){
	kitchen.style.display = "block";
	modalImg.src = "https://libapps.s3.amazonaws.com/accounts/283153/images/breakfastbowl.png";
	captionText.innerHTML = this.alt;
}

foodImg4.onclick = function(){
	kitchen.style.display = "block";
	modalImg.src = "https://libapps.s3.amazonaws.com/accounts/283153/images/devour.png";
	captionText.innerHTML = this.alt;
}	

foodImg5.onclick = function(){
	kitchen.style.display = "block";
	modalImg.src = "https://libapps.s3.amazonaws.com/accounts/283153/images/eggos.png";
	captionText.innerHTML = this.alt;
}

foodImg6.onclick = function(){
	kitchen.style.display = "block";
	modalImg.src = "https://libapps.s3.amazonaws.com/accounts/283153/images/burrito.png";
	captionText.innerHTML = this.alt;
}

foodImg7.onclick = function(){
	kitchen.style.display = "block";
	modalImg.src = "https://libapps.s3.amazonaws.com/accounts/283153/images/hashbrowns.png";
	captionText.innerHTML = this.alt;
}

foodImg8.onclick = function(){
	kitchen.style.display = "block";
	modalImg.src = "https://libapps.s3.amazonaws.com/accounts/283153/images/eggs.png";
	captionText.innerHTML = this.alt;
}

foodImg9.onclick = function(){
	kitchen.style.display = "block";
	modalImg.src = "https://libapps.s3.amazonaws.com/accounts/283153/images/pizza.png";
	captionText.innerHTML = this.alt;
}

foodImg10.onclick = function(){
	kitchen.style.display = "block";
	modalImg.src = "https://libapps.s3.amazonaws.com/accounts/283153/images/muffin.png";
	captionText.innerHTML = this.alt;
}

foodImg11.onclick = function(){
	kitchen.style.display = "block";
	modalImg.src = "https://libapps.s3.amazonaws.com/accounts/283153/images/milk.png";
	captionText.innerHTML = this.alt;
}

foodImg12.onclick = function(){
	kitchen.style.display = "block";
	modalImg.src = "https://libapps.s3.amazonaws.com/accounts/283153/images/coke.png";
	captionText.innerHTML = this.alt;
}

foodImg13.onclick = function(){
	kitchen.style.display = "block";
	modalImg.src = "https://libapps.s3.amazonaws.com/accounts/283153/images/juice.png";
	captionText.innerHTML = this.alt;
}

foodImg14.onclick = function(){
	kitchen.style.display = "block";
	modalImg.src = "https://libapps.s3.amazonaws.com/accounts/283153/images/water.png";
	captionText.innerHTML = this.alt;
}

foodImg15.onclick = function(){
	kitchen.style.display = "block";
	modalImg.src = "https://libapps.s3.amazonaws.com/accounts/283153/images/pancakes.png";
	captionText.innerHTML = this.alt;
}

foodImg16.onclick = function(){
	kitchen.style.display = "block";
	modalImg.src = "https://libapps.s3.amazonaws.com/accounts/283153/images/trix.png";
	captionText.innerHTML = this.alt;
}

foodImg17.onclick = function(){
	kitchen.style.display = "block";
	modalImg.src = "https://libapps.s3.amazonaws.com/accounts/283153/images/donuts.png";
	captionText.innerHTML = this.alt;
}

foodImg18.onclick = function(){
	kitchen.style.display = "block";
	modalImg.src = "https://libapps.s3.amazonaws.com/accounts/283153/images/total.png";
	captionText.innerHTML = this.alt;
}

foodImg19.onclick = function(){
	kitchen.style.display = "block";
	modalImg.src = "https://libapps.s3.amazonaws.com/accounts/283153/images/wheatbread.png";
	captionText.innerHTML = this.alt;
}

foodImg20.onclick = function(){
	kitchen.style.display = "block";
	modalImg.src = "https://libapps.s3.amazonaws.com/accounts/283153/images/apple.png";
	captionText.innerHTML = this.alt;
}

//  Create the X button.

var span = document.getElementsByClassName("exit")[0];

span.onclick = function(){
	kitchen.style.display = "none";
}