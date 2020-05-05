let url = "http://localhost:8080";

var tempPass;

$().ready(()=>{
    
    $("#get").click(()=>{
        let userId = $("#eid").val();
        $.getJSON(`${url}/users/${userId}`)
        .done((user)=>{
            let usr = user;
            display(usr);
            console.log(usr);
        })
        .fail((err)=>{
            console.error(err);
        });
    });

    $("#save").click(()=> {
        let editUser = {};
        editUser.id = Number($("#eid").val());
        editUser.userName = $("#eusername").val();
        editUser.password = tempPass;
        editUser.firstName = $("#efirstname").val();
        editUser.lastName = $("#elastname").val();
        editUser.phoneNumber = $("#ephone").val();
        editUser.email = $("#eemail").val();
        editUser.reviewer = $("#ereviewer").prop("checked");
        editUser.admin = $("#eadmin").prop("checked");
        console.log("User", editUser);

        $.ajax({
            method: "PUT",
            url: `${url}/users/`,
            data: JSON.stringify(newUser),
            contentType: "application/json"
        })
            .done((res)=>{
                console.log("user updated", res);
            })
            .fail((err)=>{
                console.error(err);
            })
    });
});

const display = (usr) => {
    let user = usr.data;
    tempPass = user.password;
    $("#eid").val(user.id);
    $("#eusername").val(user.userName);
    $("#efirstname").val(user.firstName);
    $("#elastname").val(user.lastName);
    $("#ephone").val(user.phoneNumber);
    $("#eemail").val(user.email);
    $("#ereviewer").prop("checked", user.reviewer);
    $("#eadmin").prop("checked", user.admin);
}