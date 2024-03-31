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
        // console.log(boxes[i]);
    }
    currentItem += 6;
}

// ---------------------btn..................

const button = document.getElementById('btn');
button.addEventListener('click', () => {
    // alert('Message successfull send...')
})


