let file = document.querySelector(".input-file")
let img = document.querySelector("img")
let button = document.querySelector(".button");

file.onchange = (e) => {
    let selectedFile = file.files[0]
    if (selectedFile) {
        let objectURL = URL.createObjectURL(selectedFile)
        console.log(selectedFile, objectURL);
        img.src = objectURL
        img.classList.add("img")
    }
}
let email = document.querySelector(".email")
let name = document.querySelector(".name")
let tel = document.querySelector(".tel")
let snn = document.querySelector(".security")
let all = document.querySelectorAll(".all")

let alltext = document.querySelector(".all-text")
let needtext = document.querySelector(".need-text")
let successtext = document.querySelector(".success-text")
let errortext = document.querySelector(".error-text")
let block = document.querySelectorAll(".block")
let required = document.querySelectorAll(".required")

let inputValue = [email, name, tel, snn, ...all]


let regex = [
    //email
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    //name
    /^[a-zA-Z\s'-]+$/,
    //tel
    /^\+998[-\s]?\d{2}[-\s]?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/,
    //snn
    /^\d{3}-\d{2}-\d{4}$/,
]
alltext.textContent = "All: " + block.length
needtext.textContent = "Need: " + required.length

button.onclick = () => {
    inputValue.forEach((input, idx) => {
        let value = input.value
        let box = input.closest(".box")
        let error = 0
        let success = 0


        if (idx < regex.length) {

            if (value === "") {
                error++
                box.classList.add("error")
            } else if (regex[idx].test(value) === false) {
                error++
                box.classList.add("error")
            } else {
                box.classList.remove("error")
                success++
            }

        } else {

            if (value === "") {
                error++
                box.classList.add("error")
            } else {
                success++
                box.classList.remove("error")
            }
        }
        console.log(required.length - errortext.textContent);
        console.log(error);
        console.log(required.length);

        if (error === 0) {
            errortext.textContent = "Error: " + error + "/" + required.length
            successtext.textContent = "Success: " + required.length + "/" + required.length
        } else if (success === 0) {
            errortext.textContent = "Error: " + required.length + "/" + required.length
            successtext.textContent = "Success: " + success + "/" + required.length
        }else{
            if (error === 0) {
                errortext.textContent = "Error: " + error + "/" + required.length
                successtext.textContent = "Success: " + success + "/" + required.length
            }
        }



    })
}