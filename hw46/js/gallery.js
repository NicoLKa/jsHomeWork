class Gallery {
    count = 0;
    srcAll = [];
    children = document.getElementsByClassName("images")[0].children;
    slideShow;

    constructor() {
        this.allSrc();
    }

    allSrc() {
        this.children[this.count].firstChild.classList.add('currentPicture');

        for (let i = 0; i < this.children.length; i++) {
            this.srcAll[i] = this.children[i].firstChild.getAttribute('src');
        }
    }

    clickNext() {
        this.children[this.count].firstChild.classList.remove('currentPicture');
        if (this.count === this.children.length - 1) {
            this.count = this.children.length - 1;
        } else {
            document.getElementById("globImg").style.background = `url(${this.srcAll[++this.count]})`;
            document.getElementById("globImg").style.backgroundSize = "100%";
            document.getElementById("globImg").style.backgroundRepeat = "no-repeat";
            document.getElementById("globImg").classList.add('globImg');
            this.children[this.count].firstChild.classList.add('currentPicture');

        }

    }

    clickPrev() {
        this.children[this.count].firstChild.classList.remove('currentPicture');
        if (this.count === 0) {
            this.count = 0;
            document.getElementById("globImg").style.background = `url(${this.srcAll[this.count]})`;
            document.getElementById("globImg").style.backgroundSize = "100%";
            document.getElementById("globImg").style.backgroundRepeat = "no-repeat";
            this.children[this.count].firstChild.classList.add('currentPicture');
        } else {
            document.getElementById("globImg").style.background = `url(${this.srcAll[--this.count]})`;
            document.getElementById("globImg").style.backgroundSize = "100%";
            document.getElementById("globImg").style.backgroundRepeat = "no-repeat";
            this.children[this.count].firstChild.classList.add('currentPicture');
        }
    }

    startSlide() {
        let time = document.getElementsByClassName('timeInp')[0].value;

        this.slideShow = setInterval(this.clickNext.bind(gallery), time * 1000);
    }

    stopSlide() {
        clearInterval(this.slideShow);
    }

    expand() {
        document.getElementById('gal').classList.toggle('gallery');
        if (document.getElementById('gal').classList.contains('gallery')) {
            document.getElementById('expand').innerHTML = '&#9660;Разверенуть Галерею&#9660;';
        } else {
            document.getElementById('expand').innerHTML = '&#9650;Свернуть галерею &#9650;';
        }
    }
}

let gallery = new Gallery();

document.getElementById("nextPhoto").addEventListener('click', () => gallery.clickNext());
document.getElementById("prevPhoto").addEventListener('click', () => gallery.clickPrev());
document.getElementById("startSlide").addEventListener('click', () => gallery.startSlide());
document.getElementById("stopSlide").addEventListener('click', () => gallery.stopSlide());
document.getElementById("expand").addEventListener('click', () => gallery.expand());