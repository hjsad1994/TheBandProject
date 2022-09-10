const buyBtns = document.querySelectorAll('.js-place-buy-btn')
const modal = document.querySelector('.js-modal')
const closeModal = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')


for ( const buyBtn of buyBtns ) {
    buyBtn.addEventListener('click', function () {
    modal.classList.add('open')

    })
}
closeModal.addEventListener('click', function () {
    modal.classList.remove('open')
})
modal.addEventListener('click', function () {
    modal.classList.remove('open')
})
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})
