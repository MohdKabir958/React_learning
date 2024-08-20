//  Inner working of react of elements rendering on web page 
//we have build function to render Element on web page like react


function customRender(reactElement,container){
    /*
const domElement=document.createElement(reactElement.type)
domElement.innerHTML=reactElement.children
domElement.setAttribute('href',reactElement.props.href);
domElement.setAttribute('target',reactElement.props.target);

container.appendChild(domElement);
*/


const domElement=document.createElement(reactElement.type)
domElement.innerHTML=reactElement.children
for (const prop in reactElement.props) {
if(prop === 'children') continue;
domElement.setAttribute(prop,reactElement.props
    [prop])
}

container.appendChild(domElement);
}


/* this is how react make tree of each element internally and understand 
the element in the following format */

const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}

const mainConatiner=document.getElementById('root');

customRender(reactElement,mainConatiner)