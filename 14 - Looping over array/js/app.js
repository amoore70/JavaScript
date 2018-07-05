var names = ['Alex', 'Billy', 'Dale', 'Ashley', 'Joshua'];

// Uncertain method
for(name in names) {
	console.log(names[name]);
}

// Certain to output in correct order
for(var x = 0; x <= names.length - 1; x = x + 1) {
	console.log(names[x]);
}