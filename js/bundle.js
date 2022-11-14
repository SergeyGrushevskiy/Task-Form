/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((module) => {

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

		const request = new XMLHttpRequest();
		request.open('POST', 'server.php');

		const formData = new FormData(form);

		request.send(formData);

		request.addEventListener('load', () => {
			if (request.status === 200){
				console.log(request.response);
				statusMessage.textContent = message.success;
				form.reset();
				setTimeout(() => {  
					statusMessage.remove()
				}, 3000);
			} else{
				statusMessage.textContent = message.failure;
			}
		});

	});
}
}

module.exports = tabs;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
window.addEventListener('DOMContentLoaded', () => {
	const tabs = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
	tabs();
});



})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map