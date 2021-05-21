$(document).ready(() => {
    $('.countdown-exaggerate').countdown100({
        /*Set Endtime here*/
        endtimeYear: 2021,
        endtimeMonth: 05,
        endtimeDate: 21,
        endtimeHours: 0,
        endtimeMinutes: 00,
        endtimeSeconds: 00,
        timeZone: "America/New_York" 
    });

    $('.countdown-emergency').countdown100({
        /*Set Endtime here*/
        endtimeYear: 2021,
        endtimeMonth: 05,
        endtimeDate: 28,
        endtimeHours: 0,
        endtimeMinutes: 00,
        endtimeSeconds: 00,
        timeZone: "America/New_York" 
    });

    $('.countdown-throwmefeelings').countdown100({
        /*Set Endtime here*/
        endtimeYear: 2021,
        endtimeMonth: 06,
        endtimeDate: 04,
        endtimeHours: 0,
        endtimeMinutes: 00,
        endtimeSeconds: 00,
        timeZone: "America/New_York" 
    });

    // ICONS CLICK HANDLERS
    $("#icon-spotify").on("mouseup", function() {
        $("#spotify-link")[0].click();
    });

    $("#icon-amazon").on("mouseup", function() {
        $("#amazon-link")[0].click();
    });

    $("#icon-apple").on("mouseup", function() {
        $("#apple-link")[0].click();
    });

});
