// GIPHY API Variables

// const apiQuery = 'q=${}'

// let giphyApi = url + apiQuery + key;

// fetch(giphyApi)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//     })
const key = '&api_key=dXaNGdPm1U5hj6e7CTbGEhd0FqUFMHmR'
const url = 'http://api.giphy.com/v1/gifs/search?q=lebron+james&api_key=dXaNGdPm1U5hj6e7CTbGEhd0FqUFMHmR&limit=30'
const giphyApiUrl = url 

fetch(giphyApiUrl)
    .then(function(res){
        return res.json()
    }).then(function(json){
        console.log(json.data[0].images.fixed_width.url) 
        let results = document.getElementById('gif-images')
        let resultsText = ''


        json.data.forEach(function(image){
            console.log(image.images.fixed_width.url);
            
        })

        results.innerHTML = resultsText
        
  
    })