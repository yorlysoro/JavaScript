const apiKey = "72EATf7hXjzsGcng67DOzax6zB9FN6ol";

// fetch

fetch('https://api.giphy.com/v1/gifs/random?api_key=' + apiKey)
  .then(response => response.json())
  .then(data => console.log(data));

