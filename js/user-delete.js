let url = "http://localhost:8080";

let userList = [];

$().ready( () => {
    
    $.getJSON(`${url}/users/`)
        .done( (users) => {
            userList = users;
            display();
            console.log(users);
        })
        .fail( (err) => {
            console.error(err);
        });

    
    $(`button[id^="del"]`).click(()=> {
        console.log("got here");
        let delUser = Number($("#eid").val());
        console.log("User", delUser);

        // $.ajax({
        //     method: "DELETE",
        //     url: `${url}/users/${delUser.id}`
        // })
        //     .done((res)=>{
        //         console.log("user deleted", res);
        //     })
        //     .fail((err)=>{
        //         console.error(err);
        //     })
    });
});

const display = () => {
    let tbody = $("tbody");
    for (let user of userList.data) {
        let tr = $("<tr></tr>");
        
        tr.append($(`<td>${user.id}</td>`));
        tr.append($(`<td>${user.userName}</td>`));
        tr.append($(`<td>${user.firstName} ${user.lastName}</td>`));
        tr.append($(`<td>${user.phoneNumber}</td>`));
        tr.append($(`<td>${user.email}</td>`));
        tr.append($(`<td>${user.reviewer ? "Yes" : "No"}</td>`));
        tr.append($(`<td>${user.admin ? "Yes" : "No"}</td>`));
        tr.append($(`<button id="del${user.id}">X</button>`))
        tbody.append(tr);
    }
}