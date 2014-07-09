var data = require("./products.json")

//1.) The `kind` of results you're are dealing  are `shopping#products`. Go through the `items` and find all results that have `kind` of `shopping#product`. How many are there? Where else is this count information stored in the search results?
console.log(" ")
console.log("Question 1")

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
console.log(" ")
console.log("Question 2")

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

//3. ) Find all items with more than one image link.
console.log(" ")
console.log("Question 3")

for (i = 0; i < items.length; i += 1) {
	var item = items[i];
	var product = item["product"];
	var images = product["images"];

	if (images.length > 1) {
		console.log(product["title"]);
	}
}

//4.) Find all `canon` products in the items (careful with case sensitivity).
console.log(" ")
console.log("Question 4")

for (i = 0; i < items.length; i += 1) {
	var item = items[i];
	var product = item["product"];
	var brand = product["brand"];

	if (brand === "Canon") {
		console.log(product["title"]);
	}
}

//5.) Find all `items` that have **product** **author** **name** of "eBay" and are brand "Canon".
console.log(" ")
console.log("Question 5")

for (i = 0; i < items.length; i += 1) {
	var item = items[i];
	var product = item["product"];
	var brand = product["brand"];

	var author = product["author"];
	var name = author["name"];

	if (brand === "Canon" && name === "eBay") {
		console.log(product["title"]);
	}
}


// 6.) Print all the products with their **brand**, **price**, and a **image link**
console.log(" ")
console.log("Question 6")

for (i = 0; i < items.length; i += 1) {
	var item = items[i];
	var product = item["product"];
	var brand = product["brand"];
	var images = product["images"];
	var image0 = images[0]
	var link = image0["link"];
	var inventories = product["inventories"];
	var inventory0 = inventories[0];
	var price = inventory0["price"];

	console.log(price + " " + brand + " " + product["title"] + " " + link);

}






