function todoList() {
    let check = false;
    let input;
    document.getElementById("input").addEventListener('keydown', function (e) {
        if (e.keyCode === 13) {
            let style = window.getComputedStyle(document.getElementsByTagName('main')[0]).height;
            let height = parseInt(style);

            document.getElementsByTagName('main')[0].style.height = (height + 40) + 'px';
            let li = document.getElementById("todoL").appendChild(document.createElement('li'));

            let label = li.appendChild(document.createElement('label'));
            input = label.appendChild(document.createElement('input'));

            input.setAttribute('type', 'checkbox');
            input.id = 'inp';
            let span = li.appendChild(document.createElement('span'));
            span.appendChild(document.createTextNode(this.value));


            let but = li.appendChild(document.createElement('a'));
            but.setAttribute('href', '#');
            but.append(document.createTextNode("Delete"));
            check = true;

            input.addEventListener('click', function () {
                span.classList.toggle('inp');
            })

            but.addEventListener('click', function () {
                let style = window.getComputedStyle(document.getElementsByTagName('main')[0]).height;
                let height = parseInt(style);
                this.parentNode.remove();
                document.getElementsByTagName('main')[0].style.height = (height - 40) + 'px';
                
            })
        }
    });
}

todoList();