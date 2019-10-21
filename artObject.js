// JavaScript Document

class artObject{
	constructor(name, price, image){
		this.name = name; 
		this.price = price;
		this.image = image;
	}
	
	returnName(){
		return this.name;
	}
	
	returnPrice(){
//		document.write("\n");
		return this.price;
	}
	
	returnImage(){
		var artImage = document.createElement("img");
		artImage.src = this.image;
		artImage.style.width = '70%';
		artImage.style.height = 'auto';
		return artImage;
	}
	
	returnImageLarge(){
		var artImageLarge = document.createElement("img");
		artImageLarge.src = this.image;
		artImageLarge.style.width = '150%';
		artImageLarge.style.height = 'auto';
		return artImageLarge;
	}
	
	
}