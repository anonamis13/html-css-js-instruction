let url = "http://localhost:8080";

$().ready(()=>{
    
    $("#get").click(()=>{
        let userId = $("#userid").val();
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
});

const display = (usr) => {
    let user = usr.data;
    $("#eid").text(user.id);
    $("#eusername").text(user.userName);
    $("#efullname").text(user.firstName + " " + user.lastName);
    $("#ephone").text(user.phoneNumber);
    $("#eemail").text(user.email);
    $("#ereviewer").text(user.reviewer ? "Yes" : "No");
    $("#eadmin").text(user.admin ? "Yes" : "No");
}