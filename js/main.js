// UwU
console.log('%c~~~~~~~~~~~~~~~~~~~~~~~~~~~~~', 'background: #000; color: #ffe1ce');
console.log('%c##	  ##			  ##   ##', 'color: #69454f');
console.log('%c##	  ##			  ##   ##', 'color: #69454f');
console.log('%c##	  ##  %c\\\\  /\\  //  %c##   ##', 'color: #69454f', 'color: #ffe1ce', 'color: #69454f');
console.log('%c##	  ##   %c\\\\/  \\//   %c##   ##', 'color: #69454f', 'color: #ffe1ce', 'color: #69454f');
console.log('%c ##### 	    %c\\_/\\_/     %c#####', 'color: #69454f', 'color: #ffe1ce', 'color: #69454f');
console.log('%c~~~~~~~~~~~~~~~~~~~~~~~~~~~~~', 'background: #000; color: #ffe1ce');

// Hadouken!
function konami(callback) {
    let kkeys = [];
    const konami = '38,38,40,40,37,39,37,39,66,65';
    return event => {
        kkeys.push(event.keyCode);
        if (kkeys.toString().indexOf(konami) >= 0) {
            callback();
            kkeys = [];
        }
    };
}

window.addEventListener('keydown', konami(() => {
    var audio = new Audio('audio/ps2_startup.mp3');
    audio.play();
}));