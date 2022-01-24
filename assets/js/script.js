//date
//update the date and the text content
function updateTime() {
    /// Increment serverTime by 1 second and update the html for '#time'
    var date = moment().format('MMMM Do YYYY, h:mm:ss a');
    $('#currentDay').html(date);
}
// call update every second
// $ used to call the function when the document object is fully loaded
$(function() {
    updateTime();
    setInterval(updateTime, 1000);
});

