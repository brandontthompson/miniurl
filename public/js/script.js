$("#button").click(function(){
    preventInput();
    $(".loader").removeClass("hidden");
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({ url: $("input").val() }));

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 ){
            if(xhr.status === 200)
            {
                $("#output-text").text(JSON.parse(xhr.response).url);
            }
            else if (xhr.status === 400)
                $("#output-text").text("B-BAKA! y-you have to type something s-senpai!");
            else
                $("#output-text").text("Oops! sorry senpai something went wrong...");
            $(".output").removeClass("hidden");
            $(".loader").addClass("hidden");

            allowInput();
        }
    }

});

function preventInput(){
    $("#button").addClass("inactive");
}

function allowInput(){
    $("#button").removeClass("inactive");
}

$(".copy").click(function(){
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($("#output-text").text()).select();
    document.execCommand("copy");
    $temp.remove();
});