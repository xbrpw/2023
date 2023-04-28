console.clear();

const buttonElement = document.querySelector('button');
const codeElement = document.querySelector('pre code');
const statusElement = document.querySelector('[role="status"]');

// Either use the native clipboard API or use a little fallback
const clipboard = navigator.clipboard || {
    writeText(value) {
        
        // Create a textarea element and hide it
        const textAreaElem = document.createElement('textarea');
        textAreaElem.style.cssText = `
            opacity: 0;
            position: fixed;
            top: 50%;
        `;

        // Set its value to what we want to copy
        textAreaElem.value = value;
        
        // Stick it in the DOM
        document.body.appendChild(textAreaElem);
        
        // Use its native select method
        textAreaElem.select();
        
        // Copy that stuff to the clipboard!
        console.log(document.execCommand('copy'));

        // Remove it again
        document.body.removeChild(textAreaElem);

        return Promise.resolve();    
    }
};

buttonElement.addEventListener('click', evt => {
    
    evt.preventDefault();
    
    clipboard.writeText(codeElement.innerText)
        .then(() => {
            statusElement.innerHTML = '<span aria-hidden="true">🎉</span> Code copied to clipboard!';
        })
        .catch(() => {
            statusElement.innerHTML = '<span aria-hidden="true">🛑</span> There was an error copying the code. Try again!';
        });
});