var contactForm = document.contact 

console.log('hello')

contactForm.addEventListener("submit", function (e) {
    e.preventDefault()
    //clear container back to empty
    container.innerHTML = ""
    var nameInputFirst = contact.first.value
    var nameInputLast = contact.last.value 
    var phoneInput = contact.phone.value 
    console.log(phoneInput)

    var finalPrint = ("Name: " + nameInputFirst + nameInputLast + "Phone Number: " + phoneInput)
    //clear input
    nameInputFirst.value = ""
    nameInputLast.value = ""
    phoneInput.value = ""

    var h1Thing = document.createElement('h1')
    //give element content: Text, attributes, classes, eventListeners
    h1Thing.textContent = finalPrint
   
    container.appendChild(h1Thing)
})