/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {

  const map1 = new Map();
  transactions.forEach((element) => {
    const { category, price } = element;
    if (map1.has(category)) {
      map1.set(category, map1.get(category) + price);
    } else {
      map1.set(category, price);
    }
  });
  const result=[];
  map1.forEach((totalSpent,category)=>{ // syntax is map.forEach(value,key);
      result.push({category,totalSpent});
  })
    return result;

}

module.exports = calculateTotalSpentByCategory;
