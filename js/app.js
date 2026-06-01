console.log("Site carregado.");
fetch("https://backloggd.com/u/Rafakkj0/rss/")
    .then(response => response.text())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });