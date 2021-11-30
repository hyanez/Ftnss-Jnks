const workoutList = document.getElementById("workoutList");
const searchBar = document.getElementById("searchBar");

woRoutines = [];

searchBar.addEventListener("keyup", (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredExercises = woRoutines.filter((exercises) => {
        return (
            exercises.name.toLowerCase().includes(searchString) ||
            exercises.primaryMuscles.toLowerCase().includes(searchString) ||
            exercises.force.toLowerCase().includes(searchString) ||
            exercises.instructions.toLowerCase().includes(searchString)
        );
    });
    displayWorkouts(filteredExercises);
});

const loadWorkouts = async () => {
    try {
        const res = await fetch("/json/exercises.json");
        woRoutines = await res.json();
        console.log(woRoutines);
        displayWorkouts(woRoutines);
    } catch (err) {
        console.error(err);
    }
};

const displayWorkouts = (exercises) => {
    const htmlString = exercises.map((exercises) => {
            return `
            <li class="workout">
                <h2>${exercises.name}</h2>
                <p>Muscle Group: ${exercises.primaryMuscles}</p>
                <p>Force: ${exercises.force}</p>
                <p>Instructions: ${exercises.instructions}</p>
                
            </li>
        `;
        })
        .join("");
    workoutList.innerHTML = htmlString;
};

loadWorkouts();
// https://mocki.io/v1/c7f45e54-ebce-4e92-af0f-5df2e278d7cc