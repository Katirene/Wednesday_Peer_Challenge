//step 1
var value = 42;
//step 2
if (value >= 53) {
	value += 42;
} else {
	value -= 13;
}
console.log(value);

//step 3 value is 29
var newString = '11'
value += newString
console.log(value);

//step 4 value is '2911'
var myArray = [];
for (var i = 0; i < value.length; i++) {
	myArray[i] = value.charAt(i);
}
console.log(myArray.toString());




//step 5  newArray should be [2,9,1,1]
// debugger;
myArray.shift();
myArray.pop();
console.log('step 5:' , myArray);



//step 6 - unclear newArray should be ['9','1']
//6. Create a new variable. Loop backwards through the array 
//and store each value into the new Variable, 
//combining each of the values of that array (backwards remember!)
var newAstorage = '';
for (var i = myArray.length-1; i >= 0; i--) {
	newAstorage += myArray[i];
	console.log('i: ' + i, newAstorage);
}
console.log('step 6:', newAstorage);


//step 7  - should be newAstorage = '19' and value = '2911'
var newAstorage = '19';
value = parseInt(value);
newAstorage = parseInt(newAstorage);
console.log('step 7 value:', value);
console.log('step 7 newAStorage:',newAstorage);

//step 8 newAstorage = 19 and value = 2911
value += newAstorage;
console.log('step 8:', value);

//step 9 value = 2930
if (value < 60) {
	value = 14;
} else if (value == 2930) {
	value = 27;
} else {
	value = 2;
}
console.log('step 9:',value);

//step 10 value = 27
var j = 10;
while(j > 0) {
	value++;
	j--;
}
console.log('step 10:', value);

//step 11 value should be = 37

//Create a function that accepts an argument 'val'. The function should convert 'val' to a String, 
//then drop the first character off the String, but only if there 
//is more than 1 character in the String. Return 'val' and set the 'value' to the returned value.
function stepEleven(val) {
	val = val.toString();
	if (val.length > 1) {
		return val.slice(1);
	} else {
		return val;
	} 

}

//step 12

console.log(stepEleven(value));




