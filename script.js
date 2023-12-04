const buttons = document.getElementsByClassName("botaoAnimacao");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(event) {
        event.preventDefault();

        this.style.transition = "transform 0.3s ease";
        this.style.transform = "scale(1.1)";

        const clickedButton = this;

        setTimeout(function() {
            clickedButton.style.transform = "scale(1)";
            console.log("Botão 'TripU' animação concluída!");

        
            const link = clickedButton.getAttribute("href");
            if (link) {
                window.location.href = link;
            }
        }, 300);
    });
}



document.getElementById('items').addEventListener('change', function() {
    var selectedOption = this.options[this.selectedIndex];

    var allOptions = document.querySelectorAll('#items option');
    allOptions.forEach(function(option) {
        option.innerHTML = option.innerHTML.replace(' &#10003;', '');
    });

    selectedOption.innerHTML += ' &#10003;';
});

document.getElementById('items1').addEventListener('change', function() {
    var selectedOption = this.options[this.selectedIndex];
    

    var allOptions = document.querySelectorAll('#items1 option');
    allOptions.forEach(function(option) {
        option.innerHTML = option.innerHTML.replace(' &#10003;', '');
    });
    
    selectedOption.innerHTML += ' &#10003;';
});
