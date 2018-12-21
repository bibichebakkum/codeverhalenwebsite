/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var zoekknop = document.querySelector('#zoeke');
var header = document.querySelector('body > form');

zoekknop.addEventListener('click',function() {
		header.classList.toggle('showform')
						  
 });