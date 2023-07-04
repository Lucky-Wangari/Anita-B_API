const userContainer = document.getElementById('users');

const getUsers = async () => {
  try {
        const response = await fetch('https://dummyjson.com/users');
        const response_1 = await response.json();
        return response_1;
    } catch (error) {
        return error;
    }
};

getUsers();

const displayUsers = async()=>{
const users = await getUsers();
console.log(users.users);
users.users.map(item=>{
    console.log(item);
    let div = document.createElement('div');
    let image = document.createElement('img');
    let name = document.createElement('h3');
    let userName = document.createElement('p');


    image.src = item.image;
    name.innerHTML = `${item.firstName} ${item.lastName}`
    userName.innerHTML = item.username;

    div.appendChild(image);
    div.appendChild(name);
    div.appendChild(userName);
    div.setAttribute('key', item.id)
    div.setAttribute('class', 'people')
    userContainer.appendChild(div);

 });
}
displayUsers();