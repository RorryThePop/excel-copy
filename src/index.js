import './module';
import './styles/index.scss';

console.log('Working!');

const val = document.getElementById('root');
const text = document.createElement('p');
const textValue = document.createTextNode('assalam');
const a = val.appendChild(text);
a.appendChild(textValue);
