const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSection = document.querySelector('.main-content');

// document.querySelectorAll(".text").style.display = "inline-block";

function pageTransitions() {
    // button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }
}

pageTransitions()



// section active
allSection.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
        // remove selected from the other btns
        sectBtns.forEach((btn) => {
            btn.classList.remove('active')
        })
        e.target.classList.add('active')

        // hide other sections
        sections.forEach((section) => {
            section.classList.remove('active')
        })

        const element = document.getElementById(id);
        element.classList.add('active');
    }
})


// ------------------ load more -----------------
let loadMoreBtn = document.querySelector('#load');
let currentItem = 6;

loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.portfolios .portfolio-item')];
    for (var i = currentItem; i < currentItem + 6; i++) {
        boxes[i].style.display = 'inline-block';
        
    }
    currentItem += 6;
}

const projects = [
    {
        name: 'Portfolio',
        image: './images/Screenshot-portfoli.png',
        desc: 'This is project that showcase my project I have done with only html,css and javascript',
        linkOne: 'https://github.com/Frelly0/personal_portfolio',
        linkTwo: 'https://frelly0.github.io/personal_portfolio/',
    },
    {
        name: 'Rock-Paper-Scissor',
        image: './images/rock-paper.png',
        desc: 'A rock_paper_scissor game',
        linkOne: 'https://github.com/Frelly0/rock-paper-scissor',
        linkTwo: 'https://frelly0.github.io/rock-paper-scissor/',
    }
];


const boxi = document.querySelector('.portfolios');

window.addEventListener('DOMContentLoaded', ()=> {
    let all = projects.map((item) => 
        `
        <div class="portfolio-item">
                    <div class="image">
                        <img src="${item.image}" alt="">
                    </div>
                    <div class="hover-item">
                        <h1>${item.name}</h1>
                        <small>${item.desc}</small>
                        <h3>Project Source</h3>
                        <div class="icons">
                            <a href="${item.linkOne}" target="_blank">View Code <i
                                    class="fa-brands fa-github"></i></a>
                            <a href="${item.linkTwo}" target="_blank">Live Preview <i
                                    class="fas fa-eye"></i></a>
                        </div>
                    </div>
                </div>
        `
    ).join('');
    boxi.innerHTML = all;
})


