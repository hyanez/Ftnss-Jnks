const signupFormHandler = async (event) => {
  event.preventDefault();
  console.log("before fetch");
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const height = document.querySelector("#height-signup").value.trim();
  const weight = document.querySelector("#weight-signup").value.trim();
  const age = document.querySelector("#age-signup").value.trim();
  const gender = "male";

  if (email && password && height && weight && age && gender) {
    console.log("three");
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ email, password, height, weight, age, gender }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up.");
    }
  }
};
document
  .querySelector("#user-form")
  .addEventListener("submit", signupFormHandler);
