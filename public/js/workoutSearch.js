const workoutList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
const exercises = require('.../seeds/exercises.json')
let woRoutines = [];


searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredExercises = woRoutines.filter((exercies) => {
        return (
            exercises.name.toLowerCase().includes(searchString) ||
            exercises.house.toLowerCase().includes(searchString)
        );
    });
    displayWorkouts(filteredExercises);
});

const displayWorkouts = (exercies) => {
    const htmlString = characters
        .map((exercies) => {
            return `
            <li class="character">
                <h2>${exercises.name}</h2>
                <p>Muscle Group: ${character.house}</p>
            </li>
        `;
        })
        .join('');
    workoutList.innerHTML = htmlString;
};



loadCharacters();