var somePromise = new Promise((resolve, reject) => {
	//resolve('It has worked');
	reject('It didn work');
});


somePromise.then((message) => {
console.log('Success:', message);

}, (errorMessage) => {
	console.log('Error:', errorMessage);

});