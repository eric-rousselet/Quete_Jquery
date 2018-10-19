
$(document).ready(function(){
	s=new slider("#galerie");
});

var slider=function(id){
	self=this;
	this.div=$(id);
	this.slider=this.div.find(".slider");
	this.largeurCache=this.div.width();
	this.largeur=0;
	this.div.find('a').each(function(){
	});
	this.prec=this.div.find(".prec");
	this.suiv=this.div.find(".suiv");
	this.saut=300;
	this.nbEtapes=10;
	this.courant=0;

	this.suiv.click(function(){
		if(self.courant<self.nbEtapes){
			self.courant++;
			self.slider.animate({
				left:-self.courant*self.saut
			},1000);
		}
	});

	this.prec.click(function(){
		if(self.courant>0){
			self.courant--;
			self.slider.animate({
				left:-self.courant*self.saut
			},1000);
		}
	});

	setInterval(function(){
		if(self.courant<self.nbEtapes){
			self.courant++;
			self.slider.animate({
				left:-self.courant*self.saut
			},1000);
		}
		if(self.courant>=self.nbEtapes){
			self.courant=0;
			self.slider.animate({
				left:-self.courant*self.saut
			},1000);
		}
	},3000);
}