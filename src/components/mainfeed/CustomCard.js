import ReactDOM from 'react-dom'
(function() {
class myCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
        this.innerHTML = `<h1>Loading</h1>`
        console.log("Hello")
    }

    connectedCallback() {
        this.innerHTML('<h1>Testing</h1>')
        // const title = document.createElement('div');
        // title.innerHTML('Hello');
        // this.appendChild(title);
        
        // const content = document.createElement('div');
        // this.appendChild(content);

        // ReactDOM.render(title, content);
    }

}
window.customElements.define('my-card', myCard , { extends: 'div' });
})();