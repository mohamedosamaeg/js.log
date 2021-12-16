function Login(){
    var username=$("#UserTXT").val();
    var password=$("#passwordTXT").val();
    var username=$("#MailTXT").val();
    var password=$("#DateTXT").val();
    var username=$("#AgeTXT").val();
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
    $("#UserTXT").val("");
    $("#passwordTXT").val("");
    $("#MailTXT").val("");
    $("#DateTXT").val("");
    $("#AgeTXT").val("");
   

}

function inputValidation(){
    var Valid;
    var username=$("#UserTXT").val();
    var password=$("#passwordTXT").val();
    var username=$("#MailTXT").val();
    var password=$("#DateTXT").val();
    var username=$("#AgeTXT").val();

    
    if (username!=""&&password!="") {
        Valid=true;
    } else {
        Valid=false;
    }
    return Valid;
}