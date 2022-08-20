const navSlide = () => {
	const burger = document.querySelector('.nav-burger');
	const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');
	    navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/4 + 0.5}s`;
            }
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();

const thumbnailImage = document.querySelectorAll(".div-work");
const title = document.querySelector(".ngoac-title");
for (let i = 0; i < thumbnailImage.length; i++) {
    thumbnailImage[i].addEventListener("mouseover", e => {
        title.style.opacity = 0;
    })
    thumbnailImage[i].addEventListener("mouseleave", e => {
        title.style.opacity = 1;
    })   
}
