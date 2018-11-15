const body = document.querySelector("body");

const novoBotao = document.createElement("button");
const textoNovoBotao = document.createTextNode("Crie um Quadrado");
novoBotao.setAttribute("id", "criaQuadrado");
novoBotao.appendChild(textoNovoBotao);

body.appendChild(novoBotao);

const novoInput = document.createElement("input");
novoInput.setAttribute("name", "nome");

body.appendChild(novoInput);


const novoBotaoAdd = document.createElement("button");
const textoNovoBotaoAdd = document.createTextNode("Adicionar");
novoBotaoAdd.setAttribute("onclick", "adicionar()");
novoBotaoAdd.appendChild(textoNovoBotaoAdd);

body.appendChild(novoBotaoAdd);

novoBotao.onclick = function () {
    var novoQuadrado = document.createElement("span");
    novoQuadrado.style.width = "100px";
    novoQuadrado.style.height = "100px";
    novoQuadrado.style.marginBottom = "10px";
    novoQuadrado.style.marginRight = "10px";
    novoQuadrado.style.backgroundColor = '#f00';
    novoQuadrado.style.display = "inline-block";
    novoQuadrado.onmouseover = function () {
        novoQuadrado.style.backgroundColor = getRandomColor();
    };
    novoQuadrado.onmouseleave = function () {
        novoQuadrado.style.backgroundColor = '#f00';
    };

    body.appendChild(novoQuadrado);
};

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var nomes = ["Diego", "Gabriel", "Lucas"];

const ul = document.createElement("ul");
for (const nome of nomes) {
    const li = document.createElement("li");
    const textoLi = document.createTextNode(nome);
    li.appendChild(textoLi);
    ul.appendChild(li);
}

body.appendChild(ul);

function adicionar() {
    const input = document.querySelector("input[name=nome]");
    const valor = input.value;
    input.value = "";
    const textoLi = document.createTextNode(valor);
    const li = document.createElement("li");
    li.appendChild(textoLi);
    ul.appendChild(li);
}