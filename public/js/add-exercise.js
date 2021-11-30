async function newFormHandler(event) {
  event.preventDefault();
  const exercise_name = document.querySelector("#exercise-name").value;
  const reps = document.querySelector("#exercise-reps").value;

  // Send fetch request to add a new post
  const response = await fetch(`/api/exercises`, {
    method: "POST",
    body: JSON.stringify({
      exercise_name,
      reps,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  //if the dish is added, the 'all' template will be rerendered
  if (response.ok) {
    document.location.replace("/fitnessplan");
  } else {
    alert("Failed to add post");
  }
}

document
  .querySelector(".exercise-form")
  .addEventListener("submit", newFormHandler);
