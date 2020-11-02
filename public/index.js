// GIPHY API Variables

// const apiQuery = 'q=${}'

// let giphyApi = url + apiQuery + key;

// fetch(giphyApi)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//     })

// I broke this up so I can use one variable to fetch
// const key = 'dXaNGdPm1U5hj6e7CTbGEhd0FqUFMHmR'
// const searchTerm = 'dogs'
// const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${searchTerm}`


const gifForm = document.getElementById('gif-form')
const gifInput = document.getElementById('gif-search')
const resultsElement = document.getElementById('results')

gifForm.addEventListener('submit', function(event){
    event.preventDefault()
    const searchTerm = gifInput.value
    gifSearch(searchTerm)
})
//! Wrap fetch in a function and pass through query
//! You need to put fetch in a function so the fetch doesn't automatically pop up first
function gifSearch(searchTerm)
{
//!Defining the api key and url
    const key = 'dXaNGdPm1U5hj6e7CTbGEhd0FqUFMHmR'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${searchTerm}`
 
//!fetching the url and return json results
    fetch(url)
        .then(function(res) {
        return res.json()
        }) .then(function(json){
//! JSON data is an arrary, so you have to call on a item in the array call the items you want
//! Fixed width so all the images are the same width
        console.log(json.data[0].images.fixed_width.url);
        let resultsHTML = ''
//!for each function and create variables to tabulate images in window
    json.data.forEach(function(object){
        console.log(object)
        const apiUrl = object.images.fixed_width.url
        const apiWidth = object.images.fixed_width.width
        const apiHeight = object.images.fixed_width.height
        const apiTitle = object.title
//! appending to image tag from variable to display the images. 
        resultsHTML+= `<img 
            src="${apiUrl}" 
            width="${apiWidth}" 
            height="${apiHeight}"
            alt="${apiTitle}"
            >`
        })

    resultsElement.innerHTML = resultsHTML
        }) .catch(function(err){
        console.log(err.message);
        })

}






//fetching giphy api with the giphy api variable
// fetch(giphyApiUrl)
//     .then(function(res){
//         //I want to return the json data here so I can see what it looks like
//         return res.json()
//     }).then(function(json){
//         //I console logged here so I select the images
//         //.fixed_width so all of the images will look semi uniform on the page
//         console.log(json.data[0].images.fixed_width.url) 
//         //wanting to have the results equal to the element so I can display the images
//         let results = document.getElementById('gif-images')
//         //left this blank so I can set other variables equal to it to display images on page
//         let resultsText = ''


//         json.data.forEach(function(gif){
//             console.log(gif.images.fixed_width);

//             const url = gif.images.fixed_width.url
//             const width = gif.images.fixed_width.width
//             const height = gif.images.fixed_width.height
//             const title = gif.title
//             resultsText = `<img src="${url}" width="${width}" height="${height}" alt="${title}">`
            
//         })

//         results.innerHTML = resultsText

  
//     })