$(document).ready(function () {

	$('.owl-carousel').owlCarousel({
		loop: true, //Зацикливаем слайдер
		margin: 10, //Отступ от картино если выводите больше 1
		nav: false, //Подключим навигацию
		autoplay: true, //Автозапуск слайдера
		smartSpeed: 1000, //Время движения слайда
		autoplayTimeout: 5000, //Время смены слайда
		responsive: { //Адаптация в зависимости от разрешения экрана
			0: {
				items: 1
			},
			450: {
				items: 1
			},
			660: {
				items: 1
			},
			1000: {
				items: 2
			}
		}
	});

	// TIME REMAIN
	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date());
		let seconds = Math.floor((t / 1000) % 60);
		let minutes = Math.floor((t / 1000 / 60) % 60);
		let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
		let days = Math.floor(t / (1000 * 60 * 60 * 24));
		return {
			total: t,
			days: days,
			hours: hours,
			minutes: minutes,
			seconds: seconds
		};
	}

	function initializeClock(id, endtime) {
		function updateClock() {
			var t = getTimeRemaining(endtime);

			if (t.total <= 0) {
				clearInterval(timeinterval);
				var deadline = new Date(Date.parse(new Date()) + 13500 * 1000);
				initializeClock('clockdiv', deadline);
			}

			let clock = document.querySelectorAll('.landing__countdown').forEach(item => {
				item.querySelector(".hours").innerHTML = ("0" + t.hours).slice(-2);
				item.querySelector(".minutes").innerHTML = ("0" + t.minutes).slice(-2);
				item.querySelector(".seconds").innerHTML = ("0" + t.seconds).slice(-2);
			});
		}
		updateClock();
		var timeinterval = setInterval(updateClock, 1000);
	}
	var deadline = new Date(Date.parse(new Date()) + 13500 * 1000);
	initializeClock("clockdiv", deadline);


	// COPYRIGHT
	document.querySelector('.privacy .copyright-year').innerHTML = new Date().getFullYear();

	// DECREMENT PRODUCT PACKAGE
	function decrementProducts() {
		var products = 23;

		var decrementsInterval = setInterval(function () {
			if (products <= 17) {
				products = products;
				clearInterval(decrementsInterval);
			} else {
				products = --products;
				
				document.querySelectorAll('.landing__lastpack').forEach(function (item) {
					item.textContent = products;
				})
			}
		}, 5000);
	}
	decrementProducts();

});
