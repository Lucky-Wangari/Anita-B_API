document.getElementById('form').addEventListener('submit',async function(event){ 
    event.preventDefault();

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let age = document.getElementById('age').value

    let data = {
        firstName:firstName,
        lastName:lastName,
        age:age
    };
    console.log(data)

    let result = await fetch('https://dummyjson.com/users/add',{
        methodS: 'POST',
        headers:{
               'Content-type': 'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response => response)
    .catch(error => error.message)
    
    let success = document.getElementById('sucess');
    result && result.id?success.innerHTML = 'User created successfully':
    success.innerHTML = 'User not created'
    console.log({result });
})