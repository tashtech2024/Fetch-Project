console.log('Running.....');
const button = document.getElementById('searchPost');
const number = document.getElementById('postNumber');
const app = document.getElementById('app');

async function thePost () {
    try{    
        const idNum = number.value
        const response = await fetch(" https://jsonplaceholder.typicode.com/posts/"+idNum);
        console.log(response);
        const jsonData = await response.json()
        console.log(jsonData);
        app.innerHTML = (`<h1>${jsonData.title}</h1>
        <h2>${jsonData.body}</h2>`);
    } catch(err){
        console.log(err);
    }
}
async function grabComments() {
    const response = await fetch(" https://jsonplaceholder.typicode.com//comments?postId="+idNum);
}
// console.log(number);
// thePost(15)

button.addEventListener('click',thePost)

