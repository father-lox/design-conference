let inputs = document.querySelectorAll(".field-input__input");

for(let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", function() {
        this.value = this.value.toUpperCase();
    });

    inputs[i].addEventListener("focus", function() {
        if(this.classList.length === 1) {
            this.classList.add("field-input__input_hidden-promt");
        }
    });

    inputs[i].addEventListener("blur", function() {
        if(this.value.length === 0) {
            this.classList.remove("field-input__input_hidden-promt");
        }
    });
}