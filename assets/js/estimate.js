const FORM_ENDPOINT = "https://script.google.com/macros/s/AKfycbyIJJl8Udd0f5W7kZEwm-u1hg6CcPJGdXkgsV5yGkoQsYfD9wZwAE8Vu_PPhSwL3HjKsQ/exec";

const form = document.getElementById("estimateForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  message.textContent = "Sending your request...";
  message.className = "form-message";

  const data = Object.fromEntries(new FormData(form).entries());

  try {
    await fetch(FORM_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    form.reset();
    message.textContent = "Mission received. Sergeant’s Got Your Six™ — we’ll contact you soon.";
    message.className = "form-message success";
  } catch (error) {
    message.textContent = "Something went wrong. Please call or text (760) 906-1013.";
    message.className = "form-message error";
  }
});
