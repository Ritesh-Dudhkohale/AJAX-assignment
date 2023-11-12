url = "https://jsonplaceholder.typicode.com/users"

fetch(url)
    .then(res => res.json())
    .then(result => {
        console.log(result);

        output = ""
        for (const user of result) {
            output += `<tr>
                    <td>${user[`id`]}</td>
                    <td>${user[`name`]}</td>
                    <td>${user[`username`]}</td>
                    <td>${user[`email`]}</td>
                    <td>${user[`phone`]}</td>
                    <td>
                        <a href="${user[`website`]}">${user[`website`]}</a>
                    </td>
                    <td>
                         <details>
                            <summary>${user[`address`][`suite`]}</summary>
                            <p>${user[`address`][`street`]}, ${user[`address`][`city`]}, ${user[`address`][`zipcode`]}</p>
                        </details>
                    </td>
                    <td>
                        <details>
                            <summary>${user[`company`][`name`]}</summary>
                            <ul>
                                <li>Name : ${user[`company`][`name`]}</li>
                                <li>Bs : ${user[`company`][`bs`]}</li>
                                <li>CatchPhrase : ${user[`company`][`catchPhrase`]}</li>
                            </ul>
                         </details>
                    </td>
                    <td>
                        <button>Edit</button>
                        <button>Delete</button>
                    </td>
                </tr>`
        }
        document.getElementById("user-data").innerHTML = output
    })

function editUser() {
    alert("User is edited");
}

function deleteUser() {
    alert("User is deleted")
}

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', (event) => {
        let eventName = event.target.innerHTML
        if (eventName === ("Edit")) {
            editUser()
        } else if (eventName === ("Delete")) {
            deleteUser()
        }
    })
})