let bold = document.querySelectorAll('strong');

function highlight() {
    bold.forEach(function (element) {
		element.style.color = 'rgb(0, 128, 0)';
    });
}

function return_normal() {
	bold.forEach(function (element) {
	   	element.style.color = 'rgb(0, 0, 0)';
   })
}
