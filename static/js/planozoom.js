$(document).ready(function() {
    $("#element").click(function(evt) {
        $(this).zoomTo({targetsize:15, duration:600});
        evt.stopPropagation();
    });
});