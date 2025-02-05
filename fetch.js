// Fetching a list of posts from a fake API
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Fetched Posts:', data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


const API_URL ='https://jsonplaceholder.typicode.com/posts';

async function fetchWorking(){
    //here becoue we use fetch it is suspended for few milisecond
    try{
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log(jsonValue);
    }catch(err){
        console.log("invalid api");
    }
}
fetchWorking();
