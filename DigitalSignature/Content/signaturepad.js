
$(document).ready(function () {

    var option = {
        defaultAction: "drawIt",
        drawOnly: true,
        lineTop: 70,
        lineMargin: 20,
        penColor: '#fff'

    }
    $('.sig-form').signaturePad(option);
    var signature = $('.signed').signaturePad({ displayOnly: true });


    $('#get').click(function () {
        $.ajax({
            url: "Home/index",
            type: 'POST',
            success: function (data) {
                signature.regenerate(data);
            }

        });
    });


});
