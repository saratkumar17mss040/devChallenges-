function highlight(strings, ...values) {
	let str = '';
    strings.forEach((string, i) => {
        console.log(string,values[i]);
		str += string + (values[i] || '');
	});
	return str;
}
const name = 'Snickers';
const age = '100';
const sentence = highlight`My dog's name is ${name} and he is ${age} years old`;
console.log(sentence);
