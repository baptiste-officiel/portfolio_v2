import '../style/style.scss';
import { Chart } from 'chart.js/auto';
// import emailjs_key from './emailjs_key';

// -------------------------- menu ---------------------------- 
const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.item-menu');
const burger = document.querySelector('.burger-menu');
const burgerItems = document.querySelectorAll('.burger-menu-item');

function closeMenu(){
    menu.classList.remove('active');
    burgerItems.forEach(item => {
        item.classList.remove('active-item')
    })
}


burger.addEventListener('click', () => {
    menu.classList.toggle('active');

    burgerItems.forEach(item => {
        item.classList.toggle('active-item')
    })

    console.log(burgerItems);
})

menu.addEventListener('click', closeMenu);

menuItem.forEach(item => {
    item.addEventListener('click', closeMenu);
})


// ----------------------------------- Chart --------------------------- 
const chartCompetences = document.getElementById('competencesCanvas');

const labels = ['HTML', 'CSS / SASS', 'JavaScript', 'Typescript', 'React', 'Figma', 'GitHub', 'Bootstrap'];
const data = {
    labels: labels,
    datasets: [{
        label: 'Compétences',
        data: [90, 100, 95, 70, 45, 35, 30, 30],
        // backgroundColor: 'rgb(255, 99, 132)'
        backgroundColor: [
            'rgba(232, 46, 0, 0.4)',
            'rgba(0, 46, 232, 0.4)',
            'rgba(234, 212, 28, 0.4)',
            'rgba(0, 105, 175, 0.4)',
            'rgba(42, 209, 255, 0.4)',
            'rgba(136, 38, 255, 0.4)',
            'rgba(218, 218, 218, 0.4)',
            'rgba(95, 0, 227, 0.4)'
        ],
        borderColor: [
            'rgb(232, 46, 0)',
            'rgb(0, 46, 232)',
            'rgb(234, 212, 28)',
            'rgb(0, 105, 175)',
            'rgb(42, 209, 255)',
            'rgb(136, 38, 255)',
            'rgb(218, 218, 218)',
            'rgb(95, 0, 227)'
        ],
        borderWidth: 2,
        borderRadius: 2
        // hoverOffset: 40
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        responsive: true,
        maintainAspectRatio: true,
    }
};

new Chart(chartCompetences, config);



// ------------------------------------ projets -------------------------- 
let url = '../data/projets.json';
const projetsCards = document.querySelector('.projets-cards');

try{
fetch(url).then(response => response.json()).then(data => {
    afficherProjets(data);
})
} catch (err){
}

function afficherProjets(data){
    data.map(projet => {
        console.log(projet);

        createCard(projet)

        // titre.innerText = projet.titre;

    })
}

function createCard(projet){
    const card = document.createElement('div')
    card.classList.add('card');
    
    const imgDiv = document.createElement('div')
    imgDiv.classList.add('card-img-div');
    card.appendChild(imgDiv);

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    card.appendChild(cardContent);

    
    const image = document.createElement('img');
    image.classList.add('card-img');
    image.setAttribute("src", projet.image);
    image.setAttribute('alt', projet.titre);
    imgDiv.appendChild(image);
    // console.log(image.attributes);
    
    const titre = document.createElement('h3');
    titre.classList.add('card-title');
    titre.innerText = projet.titre;
    cardContent.appendChild(titre);

    const langages = document.createElement('p');
    langages.classList.add('card-langages');
    // console.log(projet.langages);
    let langagesArray = [];
    (projet.langages).forEach(langage => {
        langage = `<span>${langage}</span>`
        langagesArray.push(langage)
        // (langages.innerHTML).push(langage)
    })
    // console.log(langages);
    langages.innerHTML = langagesArray.join('');
    console.log("🚀 ~ file: main.js:110 ~ createCard ~ langages:", langages)
    cardContent.appendChild(langages);
    
    const description = document.createElement('p');
    description.classList.add('card-description');
    description.innerHTML = projet.description;
    cardContent.appendChild(description);
    
    const linksContent = document.createElement('div');
    linksContent.classList.add('links-content');
    cardContent.appendChild(linksContent);

    const lienSite = document.createElement('a');
    lienSite.classList.add('card-lien_site');
    lienSite.setAttribute("href", projet.site)
    lienSite.innerText = 'Voir le site';
    linksContent.appendChild(lienSite);

    const lienGithub = document.createElement('a');
    lienGithub.classList.add('card-lien_github');
    lienGithub.setAttribute("href", projet.github);
    lienGithub.innerText = 'Voir sur GitHub';
    linksContent.appendChild(lienGithub);
    
    projetsCards.appendChild(card);
    console.log("🚀 ~ file: main.js:101 ~ createCard ~ card:", card)

    
    // -------------------------------- fonction pour afficher les infos du projet au clic --------------------- 
    let heightIndex = 0;

    // console.log(card.style.);

    card.addEventListener('click', () => {
        // console.log(card.style.height);

        if (heightIndex === 0) {
            card.style.height = `${card.scrollHeight + 16}px`;
            heightIndex++;
        } else {
            card.style.height = `${(image.scrollHeight)}px`;
            heightIndex--;
        }
    })
}


