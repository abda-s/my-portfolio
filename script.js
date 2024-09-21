const menuIcon = document.querySelector("#menu-icon");
const navLinks  = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
};

var typed = new Typed(".auto-typed",{
    strings:[
        'Front-end Developer',
        "Back-end Developer",
        "UX/UI Designer",
        "Freelancer",
        "Electrical Engineering Student"
    ],
    typeSpeed:50,
    backSpeed:50,
    loop:true

})
