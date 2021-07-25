let inputs = document.querySelectorAll(".field-input__input");

for(let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", function() {
        this.value = this.value.toUpperCase();
    });
}