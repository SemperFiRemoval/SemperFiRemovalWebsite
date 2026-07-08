const FORM_ENDPOINT = "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";

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
