function AddingAndRemovingArray() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];
    numberArray1.push(6);         // adding new items
    stringArray1.push('string3');

    numberArray1.unshift(0);      // adding new items at the beginning
    stringArray1.unshift('string0'); // adding string0 to the beginning
    numberArray1.splice(2, 1);  // remove 1 item starting at 2
    stringArray1.splice(1, 1);  // remove 1 item starting at 1
    // numberArray1.pop();          remove last item
    // stringArray1.slice(1, 1);    remove 1 item starting at 1

    const list = [<ul>, <li> Assignment 1</li>, <li>Assigment2</li> </ul>
    ];

    return (
        <div>
            <h2>Adding and Removing Data to/from Arrays</h2>
            numberArray1 = {numberArray1} <br />
            stringArray1 = {stringArray1} <br />
        </div>
    )
}

export default AddingAndRemovingArray;