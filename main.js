function Login(){
    var username=$("#userNameTXT").val();
    var password=$("#passwordTXT").val();
    var formValidation = inputValidation();
    if (formValidation==true) {
        if (username=="mohamed" && password=="hoopoe2022") {
            $("#loginFeedback").show("slow");
        }
        $("#parg").fadeIn("slow");
    } else {
        alert("fill inputs first");
    }
}
function clearInputs(){
    $("#userNameTXT").val("");
    $("#passwordTXT").val("");
}

function inputValidation(){
    var Valid;
    var username=$("#userNameTXT").val();
    var password=$("#passwordTXT").val();

    //if input not null
    if (username!=""&&password!="") {
        Valid=true;
    } else {
        Valid=false;
    }
    return Valid;
}