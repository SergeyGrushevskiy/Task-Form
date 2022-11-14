// function tabs(){
    
//     // Forms

// const forms = document.querySelectorAll('form');

// const message = {
// 	loading: 'Загрузка',
// 	success: 'Спасибо! Скоро мы с вами свяжемся',
// 	failure: 'Что-то пошло не так...'
// };

// forms.forEach(item => {
// 	postData(item);
// });

// function postData(form) {
// 	form.addEventListener('submit', (e) =>{
// 		e.preventDefault();

// 		const statusMessage = document.createElement('div');
// 		statusMessage.classList.add('status'); // Описать класс в css
// 		statusMessage.textContent = message.loading;
// 		form.append(statusMessage);

// 		const request = new XMLHttpRequest();
// 		request.open('POST', 'server.php');

// 		const formData = new FormData(form);

// 		request.send(formData);

// 		request.addEventListener('load', () => {
// 			if (request.status === 200){
// 				console.log(request.response);
// 				statusMessage.textContent = message.success;
// 				form.reset();
// 				setTimeout(() => {  
// 					statusMessage.remove()
// 				}, 3000);
// 			} else{
// 				statusMessage.textContent = message.failure;
// 			}
// 		});
// 	});
// }
// }

// module.exports = tabs;

function tabs(){
    // Forms

const forms = document.querySelectorAll('form');

const message = {
	loading: 'Загрузка',
	success: 'Спасибо! Скоро мы с вами свяжемся',
	failure: 'Что-то пошло не так...'
};

forms.forEach(item => {
	postData(item);
});

function postData(form) {
	form.addEventListener('submit', (e) =>{
		e.preventDefault();

		const statusMessage = document.createElement('div');
		statusMessage.classList.add('status'); // Описать класс в css
		statusMessage.textContent = message.loading;
		form.append(statusMessage);

		const formData = new FormData(form);

		const object = {};
		formData.forEach(function(value,key){
			object[key] = value;
		});

		fetch('server.php',{
			method: 'POST',
			headers:{
				'Content-type': 'application/json'
			},
			body: JSON.stringify(object)
		})
		.then(data => data.text())
		.then(data =>{
			console.log(data);
			statusMessage.textContent = message.success;
			setTimeout(() => {  
							statusMessage.remove()
						}, 3000);
		}).catch(() =>{
			statusMessage.textContent = message.failure;
		}).finally(() => {
			form.reset();
		})

		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: "POST",
			body: JSON.stringify({name: 'Sergey'}),
			headers:{
				'Content-type': 'application/json'
			}
		})
			// .then(response => response.json())
			// .then(json => console.log(json));
	});

		fetch('db.json')
		.then(data => data.json())
		.then(res => console.log(res));
}
}