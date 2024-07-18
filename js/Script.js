$(".bars-icon").on("click",function(){
    $(".sideBar").css("left", "0")
})

$(".x").on("click",function(){
    $(".sideBar").css("left", "-270")

})

$(".paregraphs h2").on("click",function(){
    $(this).next().slideToggle()
})


/*timing*/
let day = 101;
let hours = 17;
let min = 50;
let second = 60;


/*Textarea*/

let maxcharacter = 100

$("textarea").keyup(function () { 
    let len = maxcharacter - $(this).val().length;
    $("#char").text(len)
});