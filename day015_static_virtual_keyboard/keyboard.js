var str = "";

var container = document.getElementById('container');

var display = document.getElementById('display')

for (let i = 0; i< container.children.length; i++){

    
    container.children[i].addEventListener('click', printValue);
    function printValue(event) {
        
        str += event.target.textContent;
        display.textContent = str;
    }    
}
    
