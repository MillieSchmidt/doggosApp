const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";
const select = document.querySelector('.dropdown');

    fetch(BREEDS_URL).then(function(response) {
        return(response.json());
    })
    .then(function(data) {
        const listOfBreeds = Object.keys(data.message);
        
        for (let i = 0; i < listOfBreeds.length; i++) {
            let option = document.createElement('option');
            option.value = listOfBreeds[i];
            option.innerText = listOfBreeds[i];
            select.appendChild(option);
        }
    });

select.addEventListener('change', function(event) {
    let spinner = document.querySelector('.spinner').style.display = "block";
    let breedPics = "https://dog.ceo/api/breed/" + event.target.value + "/images/random";
    fetch(breedPics).then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const img = document.createElement('img');
        img.id = "formerImg";
        img.src = data.message;
        img.alt = event.target.value;

        let spinner = document.querySelector('.spinner').style.display = "none";
        document.querySelector('.doggos').appendChild(img);
        document.querySelector('body').style.backgroundImage = 'url(' + data.message + ')';

        let formerImg = document.getElementById('formerImg');
        document.querySelector('.doggos').replaceChild(img, formerImg);
    })
});





// const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";

// function addDoggo() {
//     fetch(BREEDS_URL).then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         const img = document.createElement('img');
//         img.src = data.message;
//         img.alt = "Cute Doggo";

//         document.querySelector('.doggos').appendChild(img);
//     });
// }

// document.querySelector('.add-doggo').addEventListener('click');