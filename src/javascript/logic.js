/* VARIABLES */
var json_url = 'http://prost.herokuapp.com/api/v1';
var cerveza_01_url = 'http://prost.herokuapp.com/api/v1/beer/guinness';
var cerveza_02_url = 'http://prost.herokuapp.com/api/v1/beer/brooklynlager';
var cerveza_03_url = 'http://prost.herokuapp.com/api/v1/beer/corona';
var cerveza_04_url = 'http://prost.herokuapp.com/api/v1/beer/ottakringerhelles';

var cerveza_random_url = 'http://prost.herokuapp.com/api/v1/beer/rand';

// Tabs Carrousel
var car_menu_01 = document.getElementById('car-menu-01');
var car_menu_02 = document.getElementById('car-menu-02');
var car_menu_03 = document.getElementById('car-menu-03');

// Productos Carrousel
var text_product_name_01 = document.getElementById('text-product-name-01');
var text_product_alcohol_01 = document.getElementById('text-product-alcohol-01');
var text_product_brewer_01 = document.getElementById('text-product-brewer-01');

var text_product_name_02 = document.getElementById('text-product-name-02');
var text_product_alcohol_02 = document.getElementById('text-product-alcohol-02');
var text_product_brewer_02 = document.getElementById('text-product-brewer-02');

var text_product_name_03 = document.getElementById('text-product-name-03');
var text_product_alcohol_03 = document.getElementById('text-product-alcohol-03');
var text_product_brewer_03 = document.getElementById('text-product-brewer-03');

var text_product_name_04 = document.getElementById('text-product-name-04');
var text_product_alcohol_04 = document.getElementById('text-product-alcohol-04');
var text_product_brewer_04 = document.getElementById('text-product-brewer-04');


/*
	INIT
*/
window.onload = function() {
	getRandom();
	console.log("Random Lanzado");
};

/* EJEMPLO JSON
{	"key":"shinerkosmosrerserve",
	"title":"Shiner Kosmos Rerserve",
	"synonyms":null,
	"abv":"5.0",
	"srm":null,
	"og":null,
	"tags":["lager"],
	"brewery":
	{	"key":"spoetzl",
		"title":"Spoetzl Brewery"
	},

	"country":
	{	"key":"us",
		"title":"United States"
	}
}
*/
function getRandom() {

	// Cerveza 01
	$.getJSON(cerveza_random_url, function(data) {
    console.log("Cerveza Random 01");
    if (data.title != null) text_product_name_01.innerHTML = data.title.toString();
    if (data.abv != null) text_product_alcohol_01.innerHTML = data.abv.toString();
    if (data.brewery.title != null) text_product_brewer_01.innerHTML = data.brewery.toString();
	});

	// Cerveza 02
	$.getJSON(cerveza_random_url, function(data) {
    console.log("Cerveza Random 02");
    if (data.title != null) text_product_name_02.innerHTML = data.title.toString();
    if (data.abv != null) text_product_alcohol_02.innerHTML = data.abv.toString();
    if (data.brewery.title != null) text_product_brewer_02.innerHTML = data.brewery.toString();
	});

	// Cerveza 03
	$.getJSON(cerveza_random_url, function(data) {
    console.log("Cerveza Random 03");
    if (data.title != null) text_product_name_03.innerHTML = data.title.toString();
    if (data.abv != null) text_product_alcohol_03.innerHTML = data.abv.toString();
    if (data.brewery.title != null) text_product_brewer_03.innerHTML = data.brewery.toString();
	});

	// Cerveza 04
	$.getJSON(cerveza_random_url, function(data) {
    console.log("Cerveza Random 04");
    if (data.title != null) text_product_name_04.innerHTML = data.title.toString();
    if (data.abv != null) text_product_alcohol_04.innerHTML = data.abv.toString();
    if (data.brewery.title != null) text_product_brewer_04.innerHTML = data.brewery.toString();
	});
}


/*
	for (var i = 1; i < 5; i++) {
		console.log("La I vale: " + i);

		if (i = 1) {
			console.log("PRIMERO");
			var text_product_name = text_product_name_01;
			var text_product_alcohol = text_product_alcohol_01;
			var text_product_brewer = text_product_brewer_01; 
			console.log(text_product_name);
			console.log(text_product_alcohol);
			console.log(text_product_brewer);
		} else if (i = 2) {
			console.log("SEGUNDO");
			var text_product_name = text_product_name_02;
			var text_product_alcohol = text_product_alcohol_02;
			var text_product_brewer = text_product_brewer_02; 
		} else if (i = 3) {
			console.log("TERCERO");
			var text_product_name = text_product_name_03;
			var text_product_alcohol = text_product_alcohol_03;
			var text_product_brewer = text_product_brewer_03; 
		} else if (i = 4) {
			console.log("CUARTO");
			var text_product_name = text_product_name_04;
			var text_product_alcohol = text_product_alcohol_04;
			var text_product_brewer = text_product_brewer_04; 
		};

		$.getJSON(cerveza_random_url, function(data) {

    	if (data.title != null) text_product_name.innerHTML = data.title.toString();
    	if (data.abv != null) text_product_alcohol.innerHTML = data.abv.toString();
    	if (data.brewery.title != null) text_product_brewer.innerHTML = data.brewery.toString();
		});
	}
}*/

/*
$.getJSON(jsonURL, function(response) {
	$(response.breweries).each(function() {
		$("example-breweries").append($("<li>", { text : this.name }));
	});
});
*/



/* NO JQUERY
var getJSON = function(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.responseType = 'json';
	xhr.onload = function() {
		var status = xhr.status;
		if ( status == 200 ) {
			callback(null, xhr.response);
		} else {
			callback(status, xhr.response);
		}
	};
	xhr.send();
};
*/

/*
getJSON(jsonURL ,
function(err, data) {
  if (err !== null) {
    alert('Error, algo fue mal: ' + err);
  } else {
    alert('Correcot: ' + data.query.count);
  }
});
*/




