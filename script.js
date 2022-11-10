const botaoMeneu = document.querySelector('.cabecalho-menu')
const MenuLateral = document.querySelector('.menu-lateral')

botaoMeneu.addEventListener('click', mudarClasse)

function mudarClasse() {
    MenuLateral.classList.toggle('menu-lateral-ativo')
}