const h3 = document.createElement('h3');
const h3Text = document.createTextNode("Buy high quality organic fruits online");

h3.appendChild(h3Text);
h3.style.fontStyle = 'italic';

const divs = document.getElementsByTagName('div');
const div1 = divs[0];
div1.appendChild(h3);
const div2 = divs[1];
const para = document.createElement('p');
const paraText = document.createTextNode("Total fruits:4");
para.appendChild(paraText);
const ul = document.querySelector('.fruits');
div2.insertBefore(para, ul);
para.id = 'fruits-total';