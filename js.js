/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var button = document.querySelector('div > button'); //formulier laten open klappen en dicht.
var main = document.querySelector('section > form');

main.classList.add('close');

button.addEventListener('click', function() {
    main.classList.toggle('close');
 
    if form.close { /* Javascript form closen*/
    display: none;
}

    else {
        button.textContent = "Filter X"
    }
});