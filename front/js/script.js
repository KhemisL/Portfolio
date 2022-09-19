
main()
function main() {
    animText();
    animeSocial();
    animeImgRight();
    parallax();
    sendEmail();
    smoothScroll()
    AOS.init();
    activeMenu()
    
}



//animation du etxt avec typeWriter
function animText() {
const animeText = document.querySelector(".animation-text")
new Typewriter(animeText, {
    loop: true,
    deleteSpeed: 50
})
.changeDelay(50)
.typeString("Développeur front end")
.pauseFor(700)
.deleteChars(9)
.typeString("web")
.pauseFor(700)
.start()
}


function animeSocial() {
    const email = document.querySelector(".link1")
    const gitHub = document.querySelector(".link2")
    const  linkedIn = document.querySelector(".link3")
    
    const TL = new TimelineMax({paused: false});

    TL
    .from(email, 1, {opacity: 0, x: -400})
    .from(gitHub, 1, {opacity: 0, y: -300})
    .from(linkedIn, 1, {opacity: 0, x: 200})
}

function animeImgRight() {
    const logoHtml = document.querySelector(".logo1")
    const logoJs = document.querySelector(".logo2")
    const  logoNode = document.querySelector(".logo3")
    const  logoReact = document.querySelector(".logo4")
    
    const TL = new TimelineMax({paused: false});

    TL
    .from(logoHtml, 1, {opacity: 0, x: -400})
    .from(logoJs, 1, {opacity: 0, y: -300}, "-=0.4")
    .from(logoNode, 1, {opacity: 0, y: 300}, "-=0.8")
    .from(logoReact, 1, {opacity: 0, x: 250}, "-=2")
}


function parallax() {
    const image = document.querySelector(".img-parallax")
    console.log("heellooooo");
    new simpleParallax(image);
    
}



function smoothScroll() {
    const navLink = [...document.querySelectorAll("nav a")]
    const section = [...document.querySelectorAll("section")]

    let sectionPosition;
        sectionPosition = section.map( section => section.offsetTop)
        console.log(sectionPosition);
    
        navLink.forEach(link => link.addEventListener("click", (e)=>{
            const linkIndex = navLink.indexOf(e.target)
            console.log(linkIndex);

            window.scrollTo({
                top: sectionPosition[linkIndex],
                behavior: "smooth"
            })
        }))
    
}

function sendEmail() {
    const btn =document.querySelector(".send");

btn.addEventListener("click", (e)=>{
    e.preventDefault()
    const params ={
        from_name : document.querySelector("#fullname").value,
        email_id: document.querySelector("#email_id").value,
        message : document.querySelector("#message").value

    }
    emailjs.send("service_sbjhqq8","template_t27gnlu", params).then(function (res){
        console.log("ok");
    })
})
}


function activeMenu() {
    const nav = document.querySelector(".container-nav");
    const hamburger = document.querySelector(".burger")

    hamburger.addEventListener("click", ()=>{
        nav.classList.toggle("active")
    })
}