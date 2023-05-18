







const contactForm = document.querySelector("#contact-form")
const submitBtn = document.querySelector(".submit-btn")
const nameInput = document.querySelector("#user_name")
const emailInput = document.querySelector("#user_email")
const messageInput = document.querySelector("#message")

const publickKey = "MMk7KL_OOuoP3wiha"
const serviceID = "service_647uw6a"
const templateID = "template_uvivc4g"

emailjs.init(publickKey)

contactForm.addEventListener("submit", e =>{
	e.preventDefault();
	submitBtn.innerText = "Just a moment..."

	const inputFields = {
		name: nameInput.value,
		email: emailInput.value,
		message: messageInput.value
	}

	emailjs.send(serviceID, templateID, inputFields)
	.then(()=>{
		// submitBtn.innerText = "Message sent successfully"
		nameInput.value = ""
		emailInput.value = ""
		messageInput.value = ""
		success()
	}, (error) =>{
		console.log(error)
		// submitBtn.innerText = "Something went wrong"
		error()
	})
	
})

// sweetalart

function success(){
	swal({
		title: "Good job!",
		icon: "success",
		text: "Message sent successfully"
	});
}

function error(){
	swal({
		title: "oooops",
		icon: "error",
		text: "Something went wrong"
	});
}
