let cards = document.querySelectorAll('.card');
let titlesCard = document.querySelectorAll('.title-card');
let titleModal = document.getElementById('title-modal');
let subtitlesCard = document.querySelectorAll('.subtitle-card');
let subtitleModal = document.getElementById('subtitle-modal');
let close = document.getElementById('fechar');
let modalContainer = document.getElementsByClassName('modal-container')[0];
let imagemModal = document.getElementById('imagem-modal');

let i = 0;
for (card of cards) {
    card.setAttribute('id', `${i}`);
    let position = card.getAttribute('id');

    card.addEventListener('click', () => {
        modalContainer.classList.remove('close');
        document.getElementsByTagName('main')[0].classList.add('blur');
        let textTitle = titlesCard[position].textContent;
        let textSubtitle = subtitlesCard[position].textContent;
        titleModal.innerText = `${textTitle}`;
        subtitleModal.innerText = `${textSubtitle}`;
        imagemModal.setAttribute('src', `layouts/assets/${position}.png`);
    })
    i++;
}
close.addEventListener('click', () => {
    modalContainer.classList.add('close');
    document.getElementsByTagName('main')[0].classList.remove('blur');
})

