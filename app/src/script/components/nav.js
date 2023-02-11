class Nav {
    constructor(data) {
        if (data.nav instanceof HTMLElement)
            this.nav = data.nav
        else if (typeof data.nav === 'string')
            this.nav = document.querySelector(data.nav)

        if (data.btn instanceof HTMLElement)
            this.btn = data.btn
        else if (typeof data.btn === 'string')
            this.btn = document.querySelector(data.btn)

        this.navName = data.nav
        this.btnName = data.btn

        this.class = data.toggleClass
            
        this.btn.onclick = e => this.open()
        window.onclick = e => this.close(e)

    }

    open(){
        this.nav.classList.add(this.class)  
    }

    close(event) {
        this.nav.classList.contains(this.class) /* contains qoshilgan classni borligini tekshiradi */
        && event.targen !== this.btn /*  bosilgan joy btn ga teng bo'masa */
        && event.target.closest(this.btnName) !== this.btn /* closest eng yaqin ona roditeli */
        && event.targen !== this.nav /* bosilgan joy nav ga teng bo'masa */
        && event.target.closest(this.navName) !== this.nav
        ? this.nav.classList.remove(this.class) /* shunaqa bosa remove qil  */
        :''
    }

}

const nav = new Nav({
    nav: '.header__nav-list',
    btn: '.header__nav-btn',
    toggleClass: 'active'
})


// const headerNavTotal = document.querySelector('.header__nav-btn')
// const headerNavClick = document.querySelector('.header__nav-list')
// const headerNavLink = document.querySelector('.header__nav-link')

// headerNavTotal.addEventListener('click', function(){
//     headerNavClick.classList.add('active')
//     window.onclick = e => this.close(e)

// })


