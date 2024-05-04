import React, { useState, useMemo } from 'react';
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

export const Assignment3 = () => {
    const [items, setItems] = useState([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
        { name: 'Tomato', value: 100 },
        // Add more items as needed
    ]);

    // Your code starts here
    // reducer
    const totalValue = useMemo(() => {
        let totalValue = 0;
        for (let i = 0; i < items.length; i++) {
            totalValue = totalValue + items[i].value;
        }
        return totalValue    
    }, [items])
    
    // Your code ends here
    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - Price: ${item.value}</li> // es, that's correct! The map() function returns an array where each element corresponds to the result of applying the provided function to each element of the original array.

                    // In your case, the provided function generates a <li> element for each item in the items array. So, the array returned by map() consists of <li> elements, with each <li> element representing an item in the items array.
                    
                    // Therefore, the resulting array is indeed an array of <li> elements. This array of <li> elements is then rendered within the <ul> element in your JSX code.
                ))}
            </ul>
            <p>Total Value: {totalValue}</p>
        </div>
    );
};
