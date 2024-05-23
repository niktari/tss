// I didn't kern, sorry!

const elements = document.querySelectorAll('.effect');

elements.forEach((element) => {
    let content = element.textContent;
    let words = content.split(' ');

    let wordWrapper = '';
    wordWrapper = words.map(word => `<div class="effect--div">${word}</div>`).join(' ');

    element.innerHTML = wordWrapper;

    let divs = document.querySelectorAll('.effect--div');

    divs.forEach((div) => {
        let text = div.innerText;
        let spanWrapper = '';

        for (let i = 0; i < text.length; i++) {
            spanWrapper += `<span class="effect--span">${text.charAt(i)}</span>`;
            div.innerHTML = spanWrapper;
        }
    })
})

const spans = document.querySelectorAll('.effect--span');
const spanElements = Array.from(spans);

spans.forEach((span) => {

    span.onmouseenter = function() {

        span.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        span.style.color = `transparent`;
        span.style.borderRadius = `100%`

        setTimeout(function() {
            span.style.backgroundColor = "transparent";
            span.style.color = "black";
          }, 1000);
    }


    
})