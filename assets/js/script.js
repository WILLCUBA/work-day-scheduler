//date
var eventTextEl = $(".task") 
var date = new Date;
var hours = parseInt(date.getHours())
//update the date and the text content

function updateTime() {
    var date = new Date;
    date = date.toString().slice(0,24)
    $('#currentDay').html(date);
}
// $ used to call the function when the document object is fully loaded
$(function() {
    updateTime();
    setInterval(updateTime, 1000);
    bgColorTasks()
});
// TIMEBLOCK CODE
//update bgc of task-container
var bgColorTasks = function() {
    $(".task-container").each(function() {
        if (parseInt(this.parentNode.id) === hours) {
            $(this).addClass("present")
        } else if (parseInt(this.parentNode.id) < hours) {
            $(this).addClass("past")
        } else if (parseInt(this.parentNode.id) > hours) {
            $(this).addClass("future")
        }
    })
}
//save textarea values when btn save is clicked
$(".saveBtn").on("click",function(){
    var hour = $(this).parent().attr("id");
    localStorage.setItem(hour,$("textarea[id='hour-" + hour).val())
})

//textarea values = lstorage correspondent value
eventTextEl.each(function(){
    var parentId = $(this).parent().parent().attr("id")
    if(localStorage.getItem(parentId)) {
        $("textarea[id='hour-" + parentId).val(localStorage.getItem(parentId))
    }
})