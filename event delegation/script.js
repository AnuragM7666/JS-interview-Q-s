//Evnet Delegation-It allows us to manage events by using a single event listener on a parent element to handle events for its child elements

const parent = document.getElementById('parent');

parent.addEventListener('click', (e) => {
    if (e.target.classList.contains('child')) {
        console.log(`${e.target.textContent} clicked!`)
    }
})


//JS modules allow us to organize code into reusable files using 'import' and 'export' 