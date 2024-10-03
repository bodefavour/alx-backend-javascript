function getResponseFromAPI() {
return new Promise((resolve, reject) => {
	const success = true;
	if (success) {
		resolve("API Call Succedd!");
	}
	else {
		reject("API Call Rejected");
	}
});
}

getResponseFromAPI()
.then((response) => {
	console.log(response);
}
.catch((error) => {
	console.log(error);
}
