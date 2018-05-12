//		FRONT		//

function menuCollapse() {
	$("#navCollapse").toggle(300);
}




//        KONTAKTY                //

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
		  stylers: [{color: 'white'}]//
		},
		{
		  featureType: 'poi',
		  elementType: 'labels.text.fill',
		  stylers: [{color: 'white'}]//firmy text vypln
		},
		{
		  featureType: 'poi.park',
		  elementType: 'geometry',
		  stylers: [{color: '#27ae60'}]// parky
		},
		{
		  featureType: 'poi.park',
		  elementType: 'labels.text.fill',
		  stylers: [{color: 'white'}]
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
		  stylers: [{color: 'green'}] //MENIM1
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

	var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
        var icons = {
          parking: {
            icon: iconBase + 'parking_lot_maps.png'
          },
          library: {
            icon: iconBase + 'library_maps.png'
          },
          info: {
            icon: iconBase + 'info-i_maps.png'
          }
        };

        var features = [
          {
            position: new google.maps.LatLng(-33.91721, 151.22630),
            type: 'info'
          }, {
            position: new google.maps.LatLng(-33.91539, 151.22820),
            type: 'info'
          }, {
            position: new google.maps.LatLng(-33.91747, 151.22912),
            type: 'info'
          }, {
            position: new google.maps.LatLng(-33.91910, 151.22907),
            type: 'info'
          }, {
            position: new google.maps.LatLng(-33.91725, 151.23011),
            type: 'info'
          }, {
            position: new google.maps.LatLng(-33.91872, 151.23089),
            type: 'info'
          }, {
            position: new google.maps.LatLng(-33.91784, 151.23094),
            type: 'info'
          }, {
            position: new google.maps.LatLng(-33.91682, 151.23149),
            type: 'info'
          }, {
            position: new google.maps.LatLng(-33.91790, 151.23463),
            type: 'info'
          }, {
            position: new google.maps.LatLng(-33.91666, 151.23468),
            type: 'info'
          }, {
            position: new google.maps.LatLng(-33.916988, 151.233640),
            type: 'info'
          }, {
            position: new google.maps.LatLng(-33.91662347903106, 151.22879464019775),
            type: 'parking'
          }, {
            position: new google.maps.LatLng(-33.916365282092855, 151.22937399734496),
            type: 'parking'
          }, {
            position: new google.maps.LatLng(-33.91665018901448, 151.2282474695587),
            type: 'parking'
          }, {
            position: new google.maps.LatLng(-33.919543720969806, 151.23112279762267),
            type: 'parking'
          }, {
            position: new google.maps.LatLng(-33.91608037421864, 151.23288232673644),
            type: 'parking'
          }, {
            position: new google.maps.LatLng(-33.91851096391805, 151.2344058214569),
            type: 'parking'
          }, {
            position: new google.maps.LatLng(-33.91818154739766, 151.2346203981781),
            type: 'parking'
          }, {
            position: new google.maps.LatLng(-33.91727341958453, 151.23348314155578),
            type: 'library'
          }
        ];

        // Create markers.
        features.forEach(function(feature) {
          var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
          });
        });
	
}




//		O PROJEKTE		//

function copy() {
	var copyText = "mail@bytyjurajovdvor.sk";
	document.execCommand("copy");
	alert("Email skopírovaný");
  }	
var change = 1;
function showText(i) {
	var openText = document.getElementsByClassName("toBeOpened");
	var changeThis = document.getElementsByClassName("changeThis");
	
	$(openText[i]).toggle("slow");
	if (change) {
		changeThis.innerHTML = " - ";
		change = 0;
	}
	else {
		changeThis.innerHTML = " + ";
		change = 1;
	}
	
}

var mapOPR;
var markers = [];

function initMapOPR() {
	var uluru = {lat: 48.180744, lng: 17.164731};
	mapOPR = new google.maps.Map(document.getElementById('mapOPR'), {
	  zoom: 15,
	  center: uluru,
	  styles: [
		{elementType: 'geometry', stylers: [{color: '#ecf0f1'}]},//
		{elementType: 'labels.text.stroke', stylers: [{visibility: "off"}]},
		{elementType: 'labels.text.fill', stylers: [{visibility: "off"}]},//
		{
		  featureType: 'administrative.locality',
		  elementType: 'labels.text.fill',
		  stylers: [{visibility: "off"}]//
		},
		{
		  featureType: 'poi',
		  elementType: 'labels.text.fill',
		  stylers: [{color: 'black'}]//firmy text vypln
		},
		{
		  featureType: 'poi.park',
		  elementType: 'geometry',
		  stylers: [{color: '#27ae60'}]// parky
		},
		{
		  featureType: 'poi.park',
		  elementType: 'labels.text.fill',
		  stylers: [{color: 'white'}]
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
		  stylers: [{color: 'green'}] //MENIM1
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
	

	var iconBase = "../images/markers/"

    var features = [
        {
						position: new google.maps.LatLng(48.175863, 17.159855),
            type: 'Food'
        },{
						position: new google.maps.LatLng(48.181033, 17.169321),
						type: 'Food'
				}, {
						position: new google.maps.LatLng(48.175973, 17.165859),
            type: 'Food'
        }, {
						position: new google.maps.LatLng(48.182151, 17.160428),
            type: 'Food'
        }, {
						position: new google.maps.LatLng(48.176853, 17.156598),
            type: 'Food'
				}, {
						position: new google.maps.LatLng(48.182384, 17.172108),
							type: 'Food'
				},{
							position: new google.maps.LatLng(48.182939, 17.172516),
							type: 'Food'
				},{
							position: new google.maps.LatLng(48.186004, 17.178815),
							type: 'Food'
				},{
            position: new google.maps.LatLng(48.187392, 17.167035),
            type: 'Doctor'
        }, {
						position: new google.maps.LatLng(48.186262, 17.176863),
						type: 'Doctor'
				},{
            position: new google.maps.LatLng(48.189348, 17.169328),
            type: 'Shop'
        },{
						position: new google.maps.LatLng(48.186704, 17.165664),
						type: 'Shop'
				},{
						position: new google.maps.LatLng(48.186720, 17.177743),
						type: 'Shop'
				},{
						position: new google.maps.LatLng(48.167457, 17.153745),
						type: 'Shop'
				},{
						position: new google.maps.LatLng(48.166844, 17.152163),
						type: 'Shop'
				},{
						position: new google.maps.LatLng(48.167792, 17.182818),
						type: 'Shop'
				},{
						position: new google.maps.LatLng(48.169109, 17.165337),
						type: 'Shop'
				},{
						position: new google.maps.LatLng(48.164632, 17.147088),
						type: 'Shop'
				},{
						position: new google.maps.LatLng(48.173949, 17.158528),
						type: 'School'
				},{
						position: new google.maps.LatLng(48.172951, 17.166765),
						type: 'School'
				},{
						position: new google.maps.LatLng(48.171180, 17.169058),
						type: 'School'
				},{
						position: new google.maps.LatLng(48.170532, 17.154926),
						type: 'ATM'
				},{
						position: new google.maps.LatLng(48.169587, 17.164753),
						type: 'ATM'
				},{
						position: new google.maps.LatLng(48.176427, 17.169431),
						type: 'ATM'
				},{
						position: new google.maps.LatLng(48.186414, 17.179259),
						type: 'ATM'
				},{
						position: new google.maps.LatLng(48.170154, 17.169950),
						type: 'Sport'
				},{
						position: new google.maps.LatLng(48.164001, 17.149903),
						type: 'Sport'
				},{
						position: new google.maps.LatLng(48.171336, 17.177828),
						type: 'Sport'
				}
    ];

		// Create markers.
		
	var marker = new google.maps.Marker({
		position: uluru,
		icon: {
		  url: "../images/marker.png",
		  scaledSize: new google.maps.Size(60,60)
		},
		map: mapOPR
	});

    features.forEach(function(feature) {
      	var customMarker = new google.maps.Marker({
			position: feature.position,
			icon: {
				url: iconBase + "newMarker" + [feature.type] + ".png",
				scaledSize: new google.maps.Size(50,60),
			},
			type: feature.type,
			map: mapOPR
		});
		markers.push(customMarker); 
	});	
}
var toggleClickBoolShop = true;
var toggleClickBoolDoctor = true;
var toggleClickBoolSchool = true;
var toggleClickBoolFood = true;
var toggleClickBoolSport = true;
var toggleClickBoolATM = true;
var toggleClickBoolSport = true;

function toggleClick(string) {
	if ((toggleClickBoolShop) && (string == "Shop")) {
		clearMarkers(string);
		toggleClickBoolShop = false;
	}
	else if ((toggleClickBoolDoctor) && (string == "Doctor")) {
		clearMarkers(string);
		toggleClickBoolDoctor = false;
	}
	else if ((toggleClickBoolSchool) && (string == "School")) {
		clearMarkers(string);
		toggleClickBoolSchool = false;
	}
	else if ((toggleClickBoolFood) && (string == "Food")) {
		clearMarkers(string);
		toggleClickBoolFood = false;
	}
	else if ((toggleClickBoolATM) && (string == "ATM")) {
		clearMarkers(string);
		toggleClickBoolATM = false;
	}
	else if ((toggleClickBoolSport) && (string == "Sport")) {
		clearMarkers(string);
		toggleClickBoolSport = false;
	}
	else if ((!toggleClickBoolShop) && (string == "Shop")) {
		showMarkers(string);
		toggleClickBoolShop = true;
	}
	else if ((!toggleClickBoolDoctor) && (string == "Doctor")) {
		showMarkers(string);
		toggleClickBoolDoctor = true;
	}
	else if ((!toggleClickBoolSchool) && (string == "School")) {
		showMarkers(string);
		toggleClickBoolSchool = true;
	}
	else if ((!toggleClickBoolFood) && (string == "Food")) {
		showMarkers(string);
		toggleClickBoolFood = true;
	}
	else if ((!toggleClickBoolSport) && (string == "Sport")) {
		showMarkers(string);
		toggleClickBoolSport = true;
	}
	else if ((!toggleClickBoolATM) && (string == "ATM")) {
		showMarkers(string);
		toggleClickBoolATM = true;
	}
	else if ((!toggleClickBoolSport) && (string == "Sport")) {
		showMarkers(string);
		toggleClickBoolSport = true;
	}
}

function clearMarkers(string) {
	for (var i = 0; i < markers.length; i++) {
		if (markers[i].type == string) {
			markers[i].setMap(null);
		}
	}
}

function showMarkers(string) {
	for (var i = 0; i < markers.length; i++) {
		if (markers[i].type == string) {
			markers[i].setMap(mapOPR);
		}
	}
}


//        BYTY A PARKOVANIE        //

function scrollDown(n) {
	if (n == 1) {
		$('html, body').animate({
			scrollTop: $(".smallNav").offset().top
		}, 1000);
	}
	else if (n == 2) {
		$('html, body').animate({
			scrollTop: $("#scrollDown2").offset().top
		}, 1000);
	}
	else if (n == 3) {
		$('html, body').animate({
			scrollTop: $("#scrollDown3").offset().top
		}, 1000);
	}
	else if (n == 4) {
		$('html, body').animate({
			scrollTop: $("#scrollDown4").offset().top
		}, 1000);
	}
}


	// Switch

	$(document).ready(function() {

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


// Zobrazenie podorysu poschodia
function showFloor(n) {
	$(".bytyPoschodia").hide();
	$("#showFloorBack").show();
	$(".poschodie").show();
	$("#poschodie" + n).show();
	$("#showFloorBack").attr("onclick","showFloorBack(" + n + ")");
}

function showFloorBack(n) {
	$(".bytyPoschodia").show();
	$("#showFloorBack").hide();
	$("#poschodie" + n).hide();
}

//    SVG map floor click
$(document).ready(function(){
	$("#poschodie1D1").click(function(){
		transform(1);
	});
	$("#poschodie1D2").click(function(){
		transform(2);
	});
	$("#poschodie1J3").click(function(){
		transform(3);
	});
	$("#poschodie1J4").click(function(){
		transform(4);
	});
	$("#poschodie1J5").click(function(){
		transform(5);
	});
	$("#poschodie1J6").click(function(){
		transform(6);
	});
	$("#poschodie1J7").click(function(){
		transform(7);
	});
	$("#poschodie2D1").click(function(){
		transform(8);
	});
	$("#poschodie2D2").click(function(){
		transform(9);
	});
	$("#poschodie2J3").click(function(){
		transform(10);
	});
	$("#poschodie2J4").click(function(){
		transform(11);
	});
	$("#poschodie2J5").click(function(){
		transform(12);
	});
	$("#poschodie2J6").click(function(){
		transform(13);
	});
	$("#poschodie2J7").click(function(){
		transform(14);
	});
	$("#poschodie2J8").click(function(){
		transform(15);
	});
	$("#poschodie3D1").click(function(){
		transform(16);
	});
	$("#poschodie3D2").click(function(){
		transform(17);
	});
	$("#poschodie3J3").click(function(){
		transform(18);
	});
	$("#poschodie3J4").click(function(){
		transform(19);
	});
	$("#poschodie3J5").click(function(){
		transform(20);
	});
	$("#poschodie3J6").click(function(){
		transform(21);
	});
	$("#poschodie3D7").click(function(){
		transform(22);
	});
	$("#poschodie4D1").click(function(){
		transform(23);
	});
	$("#poschodie4D2").click(function(){
		transform(24);
	});
	$("#poschodie4J3").click(function(){
		transform(25);
	});
	$("#poschodie4J4").click(function(){
		transform(26);
	});
	$("#poschodie4J5").click(function(){
		transform(27);
	});
	$("#poschodie4J6").click(function(){
		transform(28);
	});
	$("#poschodie4D7").click(function(){
		transform(29);
	});
});

// Generovanie stranky bytu
function transform(n) {
	var flatInfo = document.getElementById(n).querySelectorAll(".flat" + n);
	var flatID = flatInfo[1].innerHTML;
	var flatFloor = parseInt(flatID[0]);
	
	// Show / hide
	$("#bytyBody").hide();
	$(".detailBox").show();
	$("#additionalException").show();

	

	// Flat information
	document.getElementById("thisFlatHeadline").innerHTML = "BYT <b>" + flatID + "</b>";
	document.getElementById("thisfloor").innerHTML= "<b>Podlažie:</b> " + flatID[0] + ".";
	document.getElementById("thisroomID").innerHTML= "<b>Kód bytu:</b> " + flatInfo[1].innerHTML;
	document.getElementById("thisnumberOfRooms").innerHTML= "<b>Počet izieb:</b> " + flatInfo[2].innerHTML;
	document.getElementById("thissize").innerHTML= "<b>Plocha loggie:</b> " + flatInfo[3].innerHTML;
	document.getElementById("thissizeLoggia").innerHTML= "<b>Plocha loggia:</b> " + flatInfo[4].innerHTML;
	document.getElementById("thistotalSize").innerHTML= "<b>Celková plocha:</b> " + flatInfo[5].innerHTML;
	document.getElementById("thisprice").innerHTML= "<b>Cena s DPH:</b> " + flatInfo[6].innerHTML;

	// Flat image
	$("#thisImg").attr("src", "../images/podorysy/byt" + flatID + ".png"); 
	
	// Set position
	for (var i = 1; i < 5; i++) {
		$("#pos" + i).removeAttr("class","thisOne");
	}
	$("#pos" + flatFloor).attr("class","thisOne");

	for (var i = 1; i < 10; i++) {
		$("#ukazkaByt" + i).removeAttr("class","thisOne");
	}
	if ((n == 1) || (n == 8) || (n == 16) || (n == 23)) {
		$("#ukazkaByt4").attr("class","thisOne");
	}
	else if ((n == 2) || (n == 9) || (n == 17) || (n == 24)) {
		$("#ukazkaByt2").attr("class","thisOne");
	}
	else if ((n == 3) || (n == 10) || (n == 18) || (n == 25)) {
		$("#ukazkaByt1").attr("class","thisOne");
	}
	else if ((n == 4) || (n == 11) || (n == 19) || (n == 26)) {
		$("#ukazkaByt3").attr("class","thisOne");
	}
	else if ((n == 5) || (n == 12) || (n == 20) || (n == 27)) {
		$("#ukazkaByt5").attr("class","thisOne");
	}
	else if ((n == 6) || (n == 13) || (n == 21) || (n == 28)) {
		$("#ukazkaByt6").attr("class","thisOne");
	}
	else if ((n == 7) || (n == 14) || (n == 24)) {
		$("#ukazkaByt7").attr("class","thisOne");
	}
	else if (n == 15) {
		$("#ukazkaByt8").attr("class","thisOne");
	}
	else if ((n == 22) || (n == 29)) {
		$("#ukazkaByt7").attr("class","thisOne");
		$("#ukazkaByt8").attr("class","thisOne");
	}




	// kopka add + exception
	$("#thisImgKopka").attr("src", "../images/podorysy/byt" + flatID[1] + flatID[2] + "Kopka.png");
	if ((flatID[2] == '4') || ((flatID[0] == 1) && (flatID[2] == 7)) || (flatID[2] == '8'))
	{
		$("#additionalException").hide();
	}

	// Scroll to top
	$('html, body').animate({
        window:scrollTo(0,0)
	}, 1000);

	// Add margin-bottom
	$(".detailBox").css("margin-bottom","300px");
}

function backByty() {
	$("#bytyBody").show();
	$(".detailBox").hide();
	$('html, body').animate({
        scrollTop: $(".scrollHere").offset().top
	}, 1000);
}

function showKopka() {
	$("#thisImg").toggle();
	$("#thisImgKopka").toggle();
}


$("#videoFront").click(function(){
	this.pause();
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

// FINANCOVANIE

var sliderA = document.getElementById("myRangeA");
var outputA = document.getElementById("demoA");

var sliderB = document.getElementById("myRangeB");
var outputB = document.getElementById("demoB");

var sliderC = document.getElementById("myRangeC");
var outputC = document.getElementById("demoC");


outputA.innerHTML = sliderA.value;
outputB.innerHTML = sliderB.value;
outputC.innerHTML = sliderC.value;

sliderA.oninput = function() {
  outputA.innerHTML = this.value;
}
sliderB.oninput = function() {
  outputB.innerHTML = this.value / 10;
}
sliderC.oninput = function() {
  outputC.innerHTML = this.value;
}

function nOw() {
	document.ten.submit();
}

function calculate() {
	var result = document.getElementById("result");
	var outputFunction = 0;
	outputFunction = (sliderA.value * 12 * (Math.pow(1 + sliderB.value / 100, 1/12) - 1) / (12 * (1 - Math.pow(1 + sliderB.value / 100, -sliderC.value))));
	result.innerHTML = Math.round(outputFunction * 100) / 100;
}





