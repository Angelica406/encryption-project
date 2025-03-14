document.addEventListener("DOMContentLoaded", function () {
    const textInput = document.getElementById("textInput");
    const shiftInput = document.getElementById("shiftInput");
    const encryptBtn = document.getElementById("encryptBtn");
    const decryptBtn = document.getElementById("decryptBtn");
    const output = document.getElementById("output");
    const outputLabel = document.getElementById("outputLabel");

    encryptBtn.addEventListener("click", () => {
        const text = textInput.value;
        const shift = parseInt(shiftInput.value, 10);

        if (isNaN(shift)) {
            output.textContent = "Invalid shift value! Please enter a number.";
            outputLabel.style.display = "block";
            return;
        }
        output.textContent = encrypt(text, shift);
        outputLabel.style.display = "block";
    });

    decryptBtn.addEventListener("click", () => {
        const text = textInput.value;
        const shift = parseInt(shiftInput.value, 10);

        if (isNaN(shift)) {
            output.textContent = "Invalid shift value! Please enter a number.";
            outputLabel.style.display = "block";
            return;
        }
        output.textContent = decrypt(text, shift);
        outputLabel.style.display = "block";
    });
});

function encrypt(text, shift) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);
            let shiftAmount = shift % 26;
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + shiftAmount) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + shiftAmount) % 26) + 97);
            }
        }
        result += char;
    }
    return result;
}

function decrypt(text, shift) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);
            let shiftAmount = shift % 26;
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 - shiftAmount + 26) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 - shiftAmount + 26) % 26) + 97);
            }
        }
        result += char;
    }
    return result;
}
