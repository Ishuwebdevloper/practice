let text = document.querySelector('.text');
let increase = document.querySelector('.increase');
let decrease = document.querySelector('.decrease')



let textSize = 20;

                    // increase

increase.addEventListener('click',()=> {
    textSize = textSize + 5;
    text.style.fontSize = textSize + 'px';
})


                    // decrease
decrease.addEventListener('click',()=> {
    textSize = textSize - 5;
    text.style.fontSize = textSize + 'px';
})
