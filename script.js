let text = `It's time to relax.....                     Choose your favorite sound....                `; 
let i = 0;
let speed =100;
function type (){
    if (i < text.length){
        document.querySelector('#header').textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
        if (i >= text.length) {
            document.querySelector('#header').textContent = '';
            i = 0;
        }
    }
}
type();