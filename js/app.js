fetch("https://backloggd.com/u/Rafakkj0/reviews/rss/")
    .then(response => response.text())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });