const payments = document.querySelectorAll(".payment");

payments.forEach(function (pay) {
const btn = pay.querySelector(".dropdown");
  // console.log(btn);

btn.addEventListener("click", function () {
    // console.log(question);

    payments.forEach(function (item) {
        if (item !== pay) {
        item.classList.remove("show-text");
        }
    });

    pay.classList.toggle("show-text");
});
});

//flutter wave payment code
const registration = document.querySelector(".registration")
const schoolFee = document.querySelector(".school-fee")
const wears = document.querySelector(".wears")
const donate = document.querySelector(".donate")
const newRef = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

registration.addEventListener("click", ()=>{
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const phoneNumber = document.getElementById("telephone").value
    const amount = 0
    //random ref id
    let ref = "";
    for (let i = 0; i < 20; i++) {
    ref += newRef[getRandomNumber()];
    }
    // payment initiation
    FlutterwaveCheckout({
        public_key: "",
        tx_ref: `${ref}`,
        amount: `${amount}`,
        currency: "NGN",
        payment_options: "card, banktransfer, ussd",
        redirect_url: "",
        customer:{
            email: `${email}`,
            phone_number: `${phoneNumber}`,
            name: `${name}`
        }
    })

})
schoolFee.addEventListener("click", ()=>{
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const phoneNumber = document.getElementById("telephone").value
    const amount = 0
    //random ref id
    let ref = "";
    for (let i = 0; i < 20; i++) {
    ref += newRef[getRandomNumber()];
    }
    // payment initiation
    FlutterwaveCheckout({
        public_key: "",
        tx_ref: `${ref}`,
        amount: `${amount}`,
        currency: "NGN",
        payment_options: "card, banktransfer, ussd",
        redirect_url: "",
        customer:{
            email: `${email}`,
            phone_number: `${phoneNumber}`,
            name: `${name}`
        }
    })
})
wears.addEventListener("click", ()=>{
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const phoneNumber = document.getElementById("telephone").value
    const amount = 0
    //random ref id
    let ref = "";
    for (let i = 0; i < 20; i++) {
    ref += newRef[getRandomNumber()];
    }
    // payment initiation
    FlutterwaveCheckout({
        public_key: "",
        tx_ref: `${ref}`,
        amount: `${amount}`,
        currency: "NGN",
        payment_options: "card, banktransfer, ussd",
        redirect_url: "",
        customer:{
            email: `${email}`,
            phone_number: `${phoneNumber}`,
            name: `${name}`
        }
    })
})
donate.addEventListener("click", ()=>{
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const phoneNumber = document.getElementById("telephone").value
    const amount = 0
    //random ref id
    let ref = "";
    for (let i = 0; i < 20; i++) {
    ref += newRef[getRandomNumber()];
    }
    // payment initiation
    FlutterwaveCheckout({
        public_key: "FLWPUBK_TEST-32193bba8dab84e3d9c4525c85ea7a12-X",
        tx_ref: `${ref}`,
        amount: `${amount}`,
        currency: "NGN",
        payment_options: "card, banktransfer, ussd",
        redirect_url: "",
        customer:{
            email: `${email}`,
            phone_number: `${phoneNumber}`,
            name: `${name}`
        }
    })
})

function getRandomNumber() {
    return Math.floor(Math.random() * newRef.length);
}

//
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
    }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
        setCookie("username", user, 365);
    }
    }
}