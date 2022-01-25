//date
var date = new Date;
var hours = parseInt(date.getHours())
//update the date and the text content
function updateTime() {
    var date = new Date;
    date = date.toString().slice(0,24)
    $('#currentDay').html(date);
}

// save event in local storage 
var events = []
var saveEvent = function() {
    localStorage.setItem("events", JSON.stringify(events))
}

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

// call update and bgctask every second
// $ used to call the function when the document object is fully loaded
$(function() {
    updateTime();
    setInterval(updateTime, 1000);
    bgColorTasks()
});

//write a task

$(".task-container").on("click","p", function() {
    var text = $(this).text().trim();
    var textArea = $("<textarea>").val(text).addClass("text-area-task")
    $(this).replaceWith(textArea)
    textArea.trigger("focus")
})

//btn save click

$(".saveBtn").on("click","span",function() {
    var text = $(".text-area-task").val()
    var hour = $(this).closest(".row").attr("id")
    events.push({
        hour:hour,
        event:text
    })
    saveEvent()

    var textP = $("<p>").addClass("task").text(text)
    $(".text-area-task").replaceWith(textP)

    
})