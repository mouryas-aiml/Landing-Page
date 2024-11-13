document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const responseMessage = document.getElementById("form-response");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); 
  
      const name = document.getElementById("name").value;
      const number = document.getElementById("number").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
  
      if (name && email && number &&message) {
        responseMessage.textContent = Thank you, ${name}! We have received your message.;
        responseMessage.classList.remove("error");
        responseMessage.classList.add("success");
  
        form.reset();
      } else {
        responseMessage.textContent = "Please fill out all fields.";
        responseMessage.classList.remove("success");
        responseMessage.classList.add("error");
      }
    });
  });  