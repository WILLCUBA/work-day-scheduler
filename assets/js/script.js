//date
var date = new Date;
//update the date and the text content
function updateTime() {
    var date = new Date;
    date = date.toString().slice(0,24)
    $('#currentDay').html(date);
}
// call update every second
// $ used to call the function when the document object is fully loaded
$(function() {
    updateTime();
    setInterval(updateTime, 1000);
    bgColorTasks()
});

// TIMEBLOCK CODE

var hours = parseInt(date.getHours())
var day = date.getDay()


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
