const ENDPOINT = "https://jsonplaceholder.typicode.com/users/";

export function getUsers() {
  return fetch(ENDPOINT)
    .then(response => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then(json => json);
}

//this is an API that renders placeholder JSON, cool API to load info in JSON and display it

/* 
this goes in index.js
import { getUsers } from "./common/usersAPI";

getUsers().then(json => console.log(json));
 */
