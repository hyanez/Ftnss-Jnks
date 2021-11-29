const workoutList = document.getElementById('workoutList');
const searchBar = document.getElementById('searchBar');
const data = require('/json/exercises.json');
console.log(data);
let woRoutines = [];

console.log('test');


searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredExercises = woRoutines.filter((exercises) => {
        return (
            exercises.name.toLowerCase().includes(searchString) ||
            exercises.house.toLowerCase().includes(searchString)
        );
    });
    displayWorkouts(filteredExercises);
});

const loadWorkouts = async () => {
    try {
        const res = await fetch('/json/exercises.json');
        woRoutines = await res.json();
        displayWorkouts(woRoutines);
    } catch (err) {
        console.error(err);
    }
};

const displayWorkouts = (exercises) => {
    const htmlString = exercises
        .map((exercises) => {
            return `
            <li class="workout">
                <h2>${exercises.name}</h2>
                <p>Muscle Group: ${exercises.primaryMuscles}</p>
                <p>Force: ${exercises.force}</p>
                <p>Level: ${exercises.level}</p>
                <p>Equipment: ${exercises.equipment}</p>
                <p></p>
                <p>Instructions: ${exercises.instructions}</p>
                
            </li>
        `;
        })
        .join('');
    workoutList.innerHTML = htmlString;
};



loadWorkouts();