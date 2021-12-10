$(document).ready(() => {
    $('.countdown').countdown100({
        /*Set Endtime here*/
        endtimeYear: 2022,
        endtimeMonth: 1,
        endtimeDate: 28,
        endtimeHours: 0,
        endtimeMinutes: 0,
        endtimeSeconds: 0,
        timeZone: "America/New_York"
    }).on('click', () => {
        $('#countdown-href').trigger('click')
    });
  });
