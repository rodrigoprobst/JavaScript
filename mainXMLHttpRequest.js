

const minhaPromisse = function () {
    return new Promise(function (resolve, reject) {
        const ajax = new XMLHttpRequest();
        ajax.open('GET', 'https://api.github.com/users/rodrigoprobst');
        ajax.send(null);

        ajax.onreadystatechange = function () {
            if (ajax.readyState === 4) {
                if (ajax.status === 200) {
                    resolve(JSON.parse(ajax.responseText));
                } else {
                    reject("Erro na requisição");
                }
            }
        }
    });
}

minhaPromisse()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.warn(error);
    });
