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

// registration form
const reg = document.getElementById("redirect")
reg.addEventListener("click", () =>{
    location.href= "enroll.html"
})

//flutter wave payment code

const schoolFee = document.querySelector("#schoolFee")
const wears = document.querySelector("#wears")
const donate = document.querySelector("#donations")
const newRef = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


schoolFee.addEventListener("submit", (e)=>{
    e.preventDefault()
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const phoneNumber = document.getElementById("telephone").value
    const classPayment = document.getElementById("class").value
    let amount = 0
      let price = document.getElementById("amount")
    if (classPayment == 1) {
        amount = 15000
        price.value = `${amount}`
    } else if (classPayment == 2) {
        amount = 20000
        price.value = `${amount}`
    } else if (classPayment == 3) {
        amount = 30000
        price.value = `${amount}`
    }

    console.log(amount)
    // range of price
    
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
wears.addEventListener("submit", (e)=>{
    e.preventDefault()
    const name = document.getElementById("wearsName").value
    const email = document.getElementById("wearsEmail").value
    const phoneNumber = document.getElementById("wearsTelephone").value
    const amount = 5000
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
donate.addEventListener("submit", (e)=>{
    e.preventDefault()
    const name = document.getElementById("donatorName").value
    const email = document.getElementById("donatorEmail").value
    const phoneNumber = document.getElementById("donatorTelephone").value
    const amount = document.getElementById("donatorAmount").value
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
