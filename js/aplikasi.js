$("#content").ready(function () {

//    var hostname = "http://localhost/mobile_server/";
    var hostname = "http://wahyuharis.xyz/mobile_server/";
    var app_name = "Simple Crud";
    localStorage.setItem("hostname", hostname);
    localStorage.setItem("app_name", app_name);


    $.ajax({
        url: "login.html",
        crossDomain: true,
        success: function (result) {
            $("#content").html(result);
        },
        error: function (error) {
            console.log("error");
        },
    });

    $("#sample-crud").click(function () {
        sample_crud();
        $("#togle-nav").click();
    });


});

function sample_crud() {
    $.ajax({
        url: 'table.html',
        crossDomain: true,
        success: function (result) {
            $("#content").html(result);
        },
        error: function (error) {
            console.log("error");
        },
    });
}

function loading_show(){
    $("#loading-gif").removeClass('hidden');
}

function loading_hide(){
    $("#loading-gif").addClass('hidden');
}



