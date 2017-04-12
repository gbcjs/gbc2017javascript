var food = [
	{
		id: 1
		name: "Grilled Chicken",
		price: 19.99
	},
	{
		id: 4
		name: "Baked Chicken",
		price: 12.99
	},
	{
		id: 2,
		name: "Pizza",
		price: 11.24
	},
	{
		id: 3,
		name: "Burger",
		price: 7.99
	}
];

function search(name) {
	var searchArray = [1, 4];
	for (var i = 0; i < food.length; i++) {
		if ((food[i].indexOf('Chicken') !== -1) && food[i].price < 14) {
			searchArray.push(food[i]);
		} 
	}

	return searchArray;
}