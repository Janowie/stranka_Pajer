//        KONTAKTY                //

//  MAPA
function initMap() {
	var uluru = {lat: 48.184910, lng: 17.165696};
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 15,
	  center: uluru,
	  styles: [
		{elementType: 'geometry', stylers: [{color: '#ecf0f1'}]},//
		{elementType: 'labels.text.stroke', stylers: [{color: '#000000'}]},
		{elementType: 'labels.text.fill', stylers: [{color: '#ffffff'}]},//
		{
		  featureType: 'administrative.locality',
		  elementType: 'labels.text.fill',
		  stylers: [{color: '#000000'}]//
		},
		{
		  featureType: 'poi',
		  elementType: 'labels.text.fill',
		  stylers: [{color: '#e67e22'}]//firmy text vypln
		},
		{
		  featureType: 'poi.park',
		  elementType: 'geometry',
		  stylers: [{color: '#27ae60'}]// parky
		},
		{
		  featureType: 'poi.park',
		  elementType: 'labels.text.fill',
		  stylers: [{color: '#000000'}]//
		},
		{
		  featureType: 'road',
		  elementType: 'geometry',
		  stylers: [{
			color: '#7f8c8d',
		  }]//cesty
		},
		{
		  featureType: 'road',
		  elementType: 'geometry.stroke',
		  stylers: [{color: '#212a37'}] // NO IDEA
		},
		{
		  featureType: 'road',
		  elementType: 'labels.text.fill',
		  stylers: [{color: '#ecf0f1'}]//vypln nazov ulice
		},
		{
		  featureType: 'road.highway',
		  elementType: 'geometry',
		  stylers: [{color: '#2c3e50'}]//dialnica
		},
		{
		  featureType: 'road.highway',
		  elementType: 'geometry.stroke',
		  stylers: [{color: '#1f2835'}]
		},
		{
		  featureType: 'road.highway',
		  elementType: 'labels.text.fill',
		  stylers: [{color: '#f3d19c'}]
		},
		{
		  featureType: 'transit',
		  elementType: 'geometry',
		  stylers: [{color: '#f1c40f'}]//doprava
		},
		{
		  featureType: 'transit.station',
		  elementType: 'labels.text.fill',
		  stylers: [{color: '#d35400'}]
		},
		{
		  featureType: 'water',
		  elementType: 'geometry',
		  stylers: [{color: '#2980b9'}]//voda
		},
		{
		  featureType: 'water',
		  elementType: 'labels.text.fill',
		  stylers: [{color: '#000000'}]
		},
		{
		  featureType: 'water',
		  elementType: 'labels.text.stroke',
		  stylers: [{color: '#000000'}]
		}
	  ]
	});
	var marker = new google.maps.Marker({
	  position: uluru,
	  icon: {
		url: "../images/marker.png",
		scaledSize: new google.maps.Size(60,60)
	  },
	  map: map
	});
	
}



//        BYTY A PARKOVANIE        //

$(document).ready(function() {

	$(".area1").mouseover(function() {
		$(".area1").css("opacity","0.5");
		$(".area1Tag").css("opacity","1");
	});
	$(".area1").mouseout(function() {
		$(".area1").css("opacity","0");
		$(".area1Tag").css("opacity","0");
	});

	$(".area2").mouseover(function() {
		$(".area2").css("opacity","0.5");
		$(".area2Tag").css("opacity","1");
	});
	$(".area2").mouseout(function() {
		$(".area2").css("opacity","0");
		$(".area2Tag").css("opacity","0");
	});

	$(".area3").mouseover(function() {
		$(".area3").css("opacity","0.5");
		$(".area3Tag").css("opacity","1");
	});
	$(".area3").mouseout(function() {
		$(".area3").css("opacity","0");
		$(".area3Tag").css("opacity","0");
	});

	$(".area4").mouseover(function() {
		$(".area4").css("opacity","0.5");
		$(".area4Tag").css("opacity","1");
	});
	$(".area4").mouseout(function() {
		$(".area4").css("opacity","0");
		$(".area4Tag").css("opacity","0");
	});

	// Switch

	var clicked1 = true;
	var clicked2 = true;
	var clicked3 = true;

	$("#switchOne").click(function(){		
		var room = document.getElementsByClassName("oneRoom");
		
		if (clicked1) {
			for (var i = 0; i < room.length; i++) {
				
				room[i].classList.add('hideIt');
			};
			clicked1 = false;
		}
		else {
			for (var i = 0; i < room.length; i++) {
				room[i].classList.remove('hideIt');
			};
			clicked1 = true;
		}
		
	});

	

	$("#switchTwo").click(function(){
		var room = document.getElementsByClassName("twoRoom");

		
		if (clicked2) {
			for (var i = 0; i < room.length; i++) {
				
				room[i].classList.add('hideIt');
			};
			clicked2 = false;
		}
		else {
			for (var i = 0; i < room.length; i++) {
				room[i].classList.remove('hideIt');
			};
			clicked2 = true;
		}
	});

	

	$("#switchThree").click(function(){
		var room = document.getElementsByClassName("taken");
		
		if (clicked3) {
			for (var i = 0; i < room.length; i++) {
				
				room[i].setAttribute("id", "hideIt");
			};
			clicked3 = false;
		}
		else {
			for (var i = 0; i < room.length; i++) {
				room[i].removeAttribute("id");
			};
			clicked3 = true;
		}
	});
});







//          BYTY - DVOJIZBOVY      //

// PRVY ROW FUNKCIE

var slideIndex1 = 0;
var counter1 = 0;

changeSlide1(1);

function changeSlide1(n) {
	var slides = document.getElementsByClassName("slides1");
	var i;

	slideIndex1 += n;

	$(".slides1Rozmery").hide();

	if (slideIndex1 == 3) {
		slideIndex1 = 1;
	}

	for (i = 0; i < slides.length; i++) {
		if (i == (slideIndex1-1)) {
			$(slides[slideIndex1-1]).show();
		}
		else {
			$(slides[i]).hide();
			$(slides[i]).animate({
				opacity: '1'
			});
			counter1 = 0;
		}	
	}
}

function showRozmery1() {
	var rozmeryImg = document.getElementsByClassName("slides1Rozmery");
	var slides = document.getElementsByClassName("slides1");		
	
	counter1++;

	if (slideIndex1 == 1) {
		animateToggle(counter1, slideIndex1, slides[slideIndex1-1]);	
		$(rozmeryImg[0]).toggle();
	}
	if (slideIndex1 == 2) {
		animateToggle(counter1, slideIndex1, slides[slideIndex1-1]);	
		$(rozmeryImg[1]).toggle();
	}		
}

// DRUHY ROW FUNCKIE

var slideIndex2 = 0;
var counter2 = 0;

changeSlide2(1);

function changeSlide2(n) {
	var slides = document.getElementsByClassName("slides2");
	var i;

	slideIndex2 += n;

	$(".slides2Rozmery").hide();

	if (slideIndex2 == 3) {
		slideIndex2 = 1;
	}

	for (i = 0; i < slides.length; i++) {
		if (i == (slideIndex2-1)) {
			$(slides[slideIndex2-1]).show();
		}
		else {
			$(slides[i]).hide();
			$(slides[i]).animate({
				opacity: '1'
			});
			counter2 = 0;
		}	
	}
}

function showRozmery2() {
	var rozmeryImg = document.getElementsByClassName("slides2Rozmery");
	var slides = document.getElementsByClassName("slides2");		
	
	counter2++;

	if (slideIndex2 == 1) {
		animateToggle(counter2, slideIndex2, slides[slideIndex2-1]);	
		$(rozmeryImg[0]).toggle();
	}
	if (slideIndex2 == 2) {
		animateToggle(counter2, slideIndex2, slides[slideIndex2-1]);	
		$(rozmeryImg[1]).toggle();
	}		
}

// TRETI ROW FUNCKIE

var slideIndex3 = 0;
var counter3 = 0;

changeSlide3(1);

function changeSlide3(n) {
	var slides = document.getElementsByClassName("slides3");
	var i;

	slideIndex3 += n;

	$(".slides3Rozmery").hide();

	if (slideIndex3 == 3) {
		slideIndex3 = 1;
	}

	for (i = 0; i < slides.length; i++) {
		if (i == (slideIndex3-1)) {
			$(slides[slideIndex3-1]).show();
		}
		else {
			$(slides[i]).hide();
			$(slides[i]).animate({
				opacity: '1'
			});
			counter3 = 0;
		}	
	}
}

function showRozmery3() {
	var rozmeryImg = document.getElementsByClassName("slides3Rozmery");
	var slides = document.getElementsByClassName("slides3");		
	
	counter3++;

	if (slideIndex3 == 1) {
		animateToggle(counter3, slideIndex3, slides[slideIndex3-1]);	
		$(rozmeryImg[0]).toggle();
	}
	if (slideIndex3 == 2) {
		animateToggle(counter3, slideIndex3, slides[slideIndex3-1]);	
		$(rozmeryImg[1]).toggle();
	}		
}

// STRVTY ROW FUNKCIE

var slideIndex4 = 0;
var counter4 = 0;

changeSlide4(1);

function changeSlide4(n) {
	var slides = document.getElementsByClassName("slides4");
	var i;

	slideIndex4 += n;

	$(".slides4Rozmery").hide();

	if (slideIndex4 == 5) {
		slideIndex4 = 1;
	}

	for (i = 0; i < slides.length; i++) {
		if (i == (slideIndex4-1)) {
			$(slides[slideIndex4-1]).show();
		}
		else {
			$(slides[i]).hide();
			$(slides[i]).animate({
				opacity: '1'
			});
			counter4 = 0;
		}	
	}
}

function showRozmery4() {
	var rozmeryImg = document.getElementsByClassName("slides4Rozmery");
	var slides = document.getElementsByClassName("slides4");		
	
	counter4++;

	if (slideIndex4 == 1) {
		animateToggle(counter4, slideIndex4, slides[slideIndex4-1]);	
		$(rozmeryImg[0]).toggle();
	}
	if (slideIndex4 == 2) {
		animateToggle(counter4, slideIndex4, slides[slideIndex4-1]);	
		$(rozmeryImg[1]).toggle();
	}
	if (slideIndex4 == 3) {
		animateToggle(counter4, slideIndex4, slides[slideIndex4-1]);	
		$(rozmeryImg[2]).toggle();
	}
	if (slideIndex4 == 4) {
		animateToggle(counter4, slideIndex4, slides[slideIndex4-1]);	
		$(rozmeryImg[3]).toggle();
	}		
}


//          funkcia ANIMACIE        //
function animateToggle(number, index, img) {
	var x = 0;

	x = number % 2;

	if (x) {
		$(img).animate({
			opacity: '0.5'
		});
	}
	else {
		$(img).animate({
			opacity: '1'
		});
	}
}














//  H
//		Y
//			P
//				O
//					T
//						E
//							K
//								A




urok = new Array(9,9,9,9,9,9,9,9,9,9,9,9,9,9,9);

function nOw() {
	document.ten.submit();
}

function pocitej() {
aa = parseInt(document.ten.a01.value);
ab = parseInt(document.ten.a02.value);
ac = parseInt(document.ten.a04.value);	//dlzka v rokoch
ad = parseInt(document.ten.a05.value); //options[document.ten.a05.selectedIndex].
ae = "0"; //parseInt(document.ten.a09.value);
ai = parseInt(document.ten.a12.value);
aj = parseInt(document.ten.a13.value);
ak = parseInt(document.ten.a14.value);
al = parseInt(document.ten.a15.value);
am = parseInt(document.ten.a16.value);
ar = parseInt(document.ten.a17.value);
as = parseInt(document.ten.a18.value);
av = parseInt(document.ten.a21.value);
document.ten.a03.value = Math.round((ab/70)*100);

af = document.ten.a06.value;
af = af.replace(",",".");
//if (document.ten.a09.options[document.ten.a09.selectedIndex].value == 0)
//ae = 0;

// - vypocet A
za = (((af/100) / 12 * (365.25 / 360))+1);
zb = ac * 12;
zc = Math.pow(za,zb);
ag = Math.round(ab * zc * (1-za) / (1-zc));
document.ten.a07.value = ag;
document.ten.askk.value = Math.round(ag*30.126);

// - SFP
if (ae < ab)
au = ae;
else
au = ab;
zd = (((af/100) / 12) + 1);
ze = Math.pow(zd,zb);
zf = (au * ze * (1-zd) / (1-ze));
zg = ((((af - 0)/100) / 12) + 1);   // vyska statneho prispevku
zh = Math.pow(zg,zb);
zi = (au * zh * (1-zg) / (1-zh));
zj = Math.round(zf - zi);
document.ten.a08.value = zj;

// - efektivni splatka
zk = ag - zj;
//document.ten.a11.value = zk;
document.ten.a11.value = zk*ac*12;


// - rozpocet rodiny
an = (ai*2190) + (aj*1600) + (ak*1780) + (al*2110) + (am*2310);
ao = ai + aj + ak + al + am;
ap = 0;
if (ao == 1)
ap = 1580;
if (ao == 2)
ap = 2060;
if ((ao > 2) && (ao < 5))
ap = 2560;
if (ao > 4 )
ap = 2870;
aq = (((an + ap)*1.2) + ar + as);
document.ten.a19.value = aq;

// - minimalni vydej domacnosti
at = Math.round(aq + (ag / 90 * 100));
document.ten.a20.value = at;

// - kolik muze ziskat
ba = av - at;
document.ten.a22.value = ba;
bb = ba + zj;
document.ten.a23.value = bb;

// - MAX HU
bc = (((af/100) / 12 * (365.25 / 360))+1);
bd = ac * 12;
be = Math.pow(bc,bd);
bf = (av - aq)/100 * 90;
bg = Math.round(bf/(be * (1-bc)/(1-be)));
document.ten.a24.value = bg;
bh = Math. round(bg / 70 * 100);
document.ten.a25.value = bh;

}
// -->

