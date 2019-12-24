function initialize() {
    const root = document.querySelector('#root');

    const content = document.createElement('p');
    content.innerText = 'AWS';
    root.appendChild(content);
}

document.addEventListener('DOMContentLoaded', initialize);
