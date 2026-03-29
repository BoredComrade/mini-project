document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  try {
    const response = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

  
    if (response.ok) {
      document.getElementById("response").innerText = result.message;
    } else {
      document.getElementById("response").innerText = result.error;
    }

  } catch (error) {
    console.error(error);
    document.getElementById("response").innerText = "Something went wrong!";
  }
});