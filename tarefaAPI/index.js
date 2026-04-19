// Correios API Example
const response = await fetch('https://cws.correios.com.br/ajuda', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
});

const data = await response.json();
console.log(data);