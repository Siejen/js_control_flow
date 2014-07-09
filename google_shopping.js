var data = require("./products.json")

//1.) The `kind` of results you're are dealing  are `shopping#products`. Go through the `items` and find all results that have `kind` of `shopping#product`. How many are there? Where else is this count information stored in the search results?

var items = data['items'];

var instances = 0;

for (i = 0; i < items.length; i += 1) {
	var item = items[i];
	var kind = item["kind"];
	if (kind === 'shopping#product') {
		instances += 1;
	}
}

console.log(instances);
//console.log(items);


//2.) Find all items with a `backorder` availability in `inventories`.

for (i = 0; i < items.length; i += 1) {
	var item = items[i];
	var product = item["product"];
	var inventories = product["inventories"];
	// console.log(inventories);
	for (var j = 0; j < inventories.length; j++) {
		var inventory = inventories[j];
		//console.log(inventory);
		var availability = inventory["availability"];
		// console.log(availability);
		if (availability === "backorder") {
			console.log(product["title"]);
		}
	}
}





















// var items = data['items'];

// var instances = 0;

// for (i = 0; i < items.length; i += 1) {
// 	for (var j = 0; j < items[i].product.inventories.length; j++) {
// 		if (items[i].product.inventories[j].availability === "backorder") {
// 			console.log(items[i]);
// 		}
// 	}
// 	instances += 1;
// }

// console.log(instances);
// //console.log(items);

