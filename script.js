const container = document.querySelector('#container');

const paragrafo = document.createElement('p')
const textoP = document.createTextNode("Hey I'm RED!")
paragrafo.style.color = "red"
paragrafo.appendChild(textoP)

const header3 = document.createElement("h3");
const headerText = document.createTextNode("HEY I'm a BLUE h3");
header3.style.color = "blue"
header3.appendChild(headerText)

container.appendChild(paragrafo)
container.appendChild(header3)

const content = document.createElement('div');
const head1 = document.createElement("h1")
const h1text = document.createTextNode("I'm a DIV");
head1.appendChild(h1text);
const textoDiv = document.createElement("p");
const textoPDiv = documento.createTextNode("Me Too!");
textoDiv.appendChild(textoPDiv);
content.appendChild(head1)
content.appendChild(textoDiv)

container.appendChild(content)
