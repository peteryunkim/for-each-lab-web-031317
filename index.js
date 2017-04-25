function iterativeLog(array) {
	array.forEach((element, index) => {
		console.log(`${index}: ${element}`)
	})
}


function iterate(callback) {
	a = ['peter', 'joyce', 'steve', 'justine']
	a.forEach(callback)
	return a
}

function doToArray(array, callback) {
	array.forEach(callback)
}