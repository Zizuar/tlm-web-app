$(document).ready(() => {

    $('.countdown-hitmelikeadream').countdown100({
        /*Set Endtime here*/
        endtimeYear: 2021,
        endtimeMonth: 06,
        endtimeDate: 25,
        endtimeHours: 0,
        endtimeMinutes: 00,
        endtimeSeconds: 00,
        timeZone: "America/New_York" 
    });

    //Hit Me Like A Dream
    $("#icon-spotify-hmlad").on("mouseup", function() {
        $("#spotify-link-hmlad")[0].click();
    });

    $("#icon-amazon-hmlad").on("mouseup", function() {
        $("#amazon-link-hmlad")[0].click();
    });

    $("#icon-apple-hmlad").on("mouseup", function() {
        $("#apple-link-hmlad")[0].click();
    });

});
