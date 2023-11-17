$AlertFront = function (msg) {
    $('.ajax-errors').prepend('<div class="alert alert-info alert-dismissable fadeInDown animated" style="margin-bottom:20px;">'
        +'<button type="button" class="close" data-dismiss="alert" aria-hidden="true"><i class="fa fa-remove"></i></button>'
        +msg
        +'</div>');

     setTimeout(function(){
         $('.ajax-errors .alert').each(function(indx, el) {
             $(el).removeClass('fadeInDown animated').addClass('fadeOutUp animated');
         });
     },3000);

    setTimeout(function(){
        $('.ajax-errors .alert').remove();
    },3500);

};

$(document).ready(function(){

    $('.ajax-form').on('submit', function(e){
        e.preventDefault();
        var that = $(this);
        var getToken = $('meta[name="csrf_token"]').attr('content');
        that.find('button[type="submit"]').attr('disabled');

        var datas = that.serialize() +'&_token='+getToken;

        $.ajax({
            type: "POST",
            url: "",
            data: datas,
            success: function(msg){


                var data = JSON.parse(msg);

                if (data._token.length > 0)
                {
                    $('meta[name="csrf_token"]').attr('content',data._token);
                    $('input[name="_token"]').each(function(indx, el){
                        $(el).val(data._token);
                    })
                }

                that.find('button[type="submit"]').removeAttr('disabled');

                if (data.type != 'success') {

                    $AlertFront(data.message);

                }
                else {
                    if (data.link) {
                        setTimeout(function(){
                             window.location.href = data.link;
                        }, 1500)
                       
                    }

                    $('.ajax-form').trigger('reset');

                    $AlertFront(data.message);
                    $(that).trigger('reset');
                }


            }
        });


    });

})