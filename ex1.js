var endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP"
};

function exibe(endereco) {
  return (
    "O usuário mora em " +
    endereco.cidade +
    " / " +
    endereco.uf +
    ", no bairro " +
    endereco.bairro +
    ', na rua "' +
    endereco.rua +
    '" com nº ' +
    endereco.numero +
    "."
  );
}

console.log(exibe(endereco));

function pares(x, y) {
  for (let i = x; i < y; i++) {
    if (i % 2 == 0) console.log(i);
  }
}

pares(32, 321);

function temHabilidade(skills) {
  return skills.indexOf("Javascript") >= 0 ? true : false;
}

var skills = ["Javascript", "ReactJS", "React Native"];

console.log(temHabilidade(skills));

function experiencia(anos) {
  if (anosEstudo <= 1) return "Iniciante";
  else if (anosEstudo <= 3) return "Intermediário";
  else if (anosEstudo <= 6) return "Avançado";
  else return "Jedi Master";
}

var anosEstudo = 7;

console.log(experiencia(anosEstudo));
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master

var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

console.log(usuarios);

function retornaHabilidades(usuarios) {
  for (const usuario of usuarios)
    console.log(
      "O " +
        usuario.nome +
        " possui as habilidades: " +
        usuario.habilidades.join(", ") +
        "\n"
    );
}
retornaHabilidades(usuarios);
