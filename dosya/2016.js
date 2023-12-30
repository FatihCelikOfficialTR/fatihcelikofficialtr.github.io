$(document).ready(function () {
    /*Psdindir.com*/

    setTimeout(function () { $('#cntdwn').animate({ top: '-110px' }); }, 3000);

    $('#cntdwn').hover(function () {
        $(this).animate({ top: '0px' });
    },
    function () {
        $(this).animate({ top: '-110px' });
    });

    $('#images').refineSlide({
        transition: 'cubeV',
        controls: 'arrows',
		autoPlay : true,
		delay : 4000,
		transitionDuration : 600
    });
});

/* plugin for labels to be placed over input fields in contact page */
jQuery.fn.labelOver = function (overClass) {
    return this.each(function () {
        var label = jQuery(this);
        var f = label.attr('for');
        if (f) {
            var input = jQuery('#' + f);
            this.hide = function () {
                label.css({
                    textIndent: -10000
                })
            }
            this.show = function () {
                if (input.val() == '') label.css({
                    textIndent: 0
                })
            }
            // handlers
            input.focus(this.hide);
            input.blur(this.show);
            label.addClass(overClass).click(function () {
                input.focus()
            });
            if (input.val() != '') this.hide();
        }
    })
}