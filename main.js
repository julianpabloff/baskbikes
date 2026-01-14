let scrollY = window.scrollY;
const header = document.getElementById('header');
const topColor = '#002e414f';
const bottomColor = 'rgba(0, 46, 65, 0.57)';

window.addEventListener('scroll', event => {
	scrollY = window.scrollY;
    if (scrollY) header.style.backgroundColor = bottomColor;
    else header.style.backgroundColor = topColor;
});
