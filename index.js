const resetBtn = document.getElementById("resetBtn")
const error = document.getElementById("error")
const card = document.getElementById("card")
const successCard = document.getElementById("successCard")
const userEmail = document.getElementById("userEmail")
const form = document.getElementById("form")
const email = document.getElementById("email")
let data;
const handleSubmit = (e) => {

    e.preventDefault(e);

    const formData = new FormData(e.target);
    data = formData.get("email")
    const indexOfAt = data.search("@")
    const perPart = data.slice(0,indexOfAt)
    const regex = /^([a-zA-Z0-9_.$+-]+)@([a-zA-Z0-9-])+.([a-z]+)(.[a-z]+)(.[a-z]+)?$/

    if (regex.test(data) == false || data.includes("..") || perPart.slice(0,1) == "." || perPart.slice(-1) == "." || data.slice(-1) == ".") {
        error.style.display = "inline"
        email.setAttribute("aria-invalid", "true")
    }
    else if (regex.test(data) == true){
        card.style.display = "none"
        successCard.style.display = "flex"
        userEmail.innerHTML = data
    }
}
form.addEventListener("submit", handleSubmit)

resetBtn.addEventListener("click", () => {
    card.style.display = "flex"
    successCard.style.display = "none"
})
















