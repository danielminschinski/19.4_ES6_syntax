console.log('Task-3');

const average = (...args) =>
	console.log(args.reduce((total, arg) => total + arg) / args.length);

average(1);
average(2, 3);
console.log('\n\n')

