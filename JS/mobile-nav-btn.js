class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `animacaonavbtn 0.5s ease forwards ${index / 7 + 0.3
                    }s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();

        document.body.style.overflox = this.navList.classList.contains(this.activeClass)
        ? "hidden"
        : "auto";
    }
    
    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    closeMenuOnClick() {
    this.navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            this.navList.classList.remove(this.activeClass);
            this.mobileMenu.classList.remove(this.activeClass);
            document.body.style.overflow = "auto"; // reativa o scroll
        });
    });
}

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}



const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();

