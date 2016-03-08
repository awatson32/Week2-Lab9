document.addEventListener('DOMContentLoaded', function() {
    var addNodeButton = document.createElement('button');
    var buttonContainer = document.createElement('div');  
    
    buttonContainer.id = 'button-container';
    addNodeButton.innerText = 'Button';
    buttonContainer.appendChild(addNodeButton);  			
    document.body.appendChild(buttonContainer);
    
    addNodeButton.addEventListener('click', function() {
        alert("You are doing so well in this class! Don't worry!");
    });
    
})

function showMessage() {
    var text = document.getElementById('message').nodeValue;
    alert(text);
    // return false;
}