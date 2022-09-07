const payments = document.querySelectorAll(".payment");

payments.forEach(function (pay) {
const btn = pay.querySelector(".dropdown");
  // console.log(btn);

btn.addEventListener("click", () => {
    // console.log(question);

    payments.forEach(function (item) {
        if (item !== pay) {
        item.classList.remove("show-text");
        }
    });

    pay.classList.toggle("show-text");
});
});

const primary = document.querySelector("#primaryForm")
const secondary = document.querySelector("#secondaryForm")
const newRef = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


primary.addEventListener("submit", (e)=>{
    e.preventDefault()
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const phoneNumber = document.getElementById("telephone").value
    const amount = 29000
    //random ref id
    let ref = "";
    for (let i = 0; i < 20; i++) {
    ref += newRef[getRandomNumber()];
    }
    FlutterwaveCheckout({
        public_key: "FLWPUBK_TEST-53153e88384c416b228ffb431b095132-X",
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
secondary.addEventListener("submit", (e)=>{
    e.preventDefault()
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const phoneNumber = document.getElementById("telephone").value
    const amount = 29000
    //random ref id
    let ref = "";
    for (let i = 0; i < 20; i++) {
    ref += newRef[getRandomNumber()];
    }
    FlutterwaveCheckout({
        public_key: "FLWPUBK_TEST-53153e88384c416b228ffb431b095132-X",
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