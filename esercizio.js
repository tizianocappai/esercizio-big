let a, b;

// pure function
function sum(a, b) {
	return a + b;
}

const somma = (a, b) => {
	return a + b;
};

a = 10;
b = 7;

// async await
async function pippo() {
	try {
		const requestData = await fetch(
			'https://jsonplaceholder.typicode.com/posts/1',
		);

		const res = await requestData.json();
		console.log('data1', res);
	} catch (error) {}
}
pippo();

// then()
fetch('https://jsonplaceholder.typicode.com/posts/1')
	.then((res) => {
		console.log('res', res);
		res.json().then((data) => {
			console.log('data', data);
		});
	})
	.catch((err) => console.err(err))
	.finally(() => console.log('FINE!'));

// Esempio Promise
let fakeFecth = new Promise((resolve, reject) => {
	const status = 200;

	if (status === 200) {
		const temp = {
			name: 'Tiziano',
			surname: 'Cappai',
		};
		resolve(temp);
	} else {
		reject();
	}
});

fakeFecth
	.then((data) => {
		console.log('then', data);
	})
	.catch((err) => {
		console.log('catch', err);
	})
	.finally(() => {
		console.log('finally');
	});

// una Promise può avere una callback di resolve(data) se i dati sono ok,
// altrimenti può avere una callback di reject(data).
// I dati passati a queste due callback possono essere intercettati attraverso il then() oppure l async await.
