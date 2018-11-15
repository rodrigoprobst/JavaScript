function checaIdade(idade) {  
    return new Promise(function(resolve, reject) {
		if (idade >= 18) {
			resolve();
		} else {
			reject();
		}
	});
} 

checaIdade(5)  
    .then(function() {
        console.log("Maior que 18");
    })
    .catch(function() {
        console.log("Menor que 18");
	});

const listElement = document.querySelector("#app ul");
const inputElement = document.querySelector("#app input");
const buttonElement = document.querySelector("#app button");

buttonElement.onclick = function() {

	listElement.innerHTML = "";

	const LoadingText = document.createTextNode("Carregando...");

	const liLoading = document.createElement("li");
	liLoading.appendChild(LoadingText);
	listElement.appendChild(liLoading);
	
	const user = inputElement.value;
	inputElement.value = "";
	axios
		.get("https://api.github.com/users/" + user + "/repos")
		.then(function(response) {
			mostraRepositorios(response);
		})
		.catch(function(error) {
		console.log("Erro na requisição: " + error);
		});
};

function mostraRepositorios(response) {
	listElement.innerHTML = "";
	for (const listItem of response.data) {
		const todosText = document.createTextNode(listItem.name);

		const li = document.createElement("li");
		li.appendChild(todosText);

		listElement.appendChild(li);
	}
}
