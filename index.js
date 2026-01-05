const input = document.getElementById("input")

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        check();
    }
});

function reverseString(str) {
    return str.split("").reverse().join("")

}

function check() {
    const value = input.value;

    if (value.trim() === "") {
        alert("Not Today")
        input.value = "";
        return;
    }
    
    const reverse = reverseString(value)

    if (value === reverse) {
        alert(" P A L I N D R O M E")
    } else {
        alert("Not Today")
    }

    input.value = ""
}