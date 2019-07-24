jQuery(document).ready(function(){


    "use strict";




    $('#app-slider').carouFredSel({

        responsive:true,
        width:'100%',
        circular:true,
        scroll:{
            items:1,
            duration:500,
            pauseOnHover: true
        },
        auto:true,
        items:{
            visible:{
                min:1,
                max:1
            },
            height:"variable"
        },
        pagination:{
            container:".sliderpager",
            anchorBuilder: false
        }
    });

    $('#app-sliderr').carouFredSel({

        responsive:true,
        width:'100%',
        circular:true,
        scroll:{
            items:1,
            duration:500,
            pauseOnHover: true
        },
        auto:true,
        items:{
            visible:{
                min:1,
                max:1
            },
            height:"variable"
        },
        pagination:{
            container:"#sliderpager",
            anchorBuilder: false
        }
    });

    $('.animation').each(function(){

        var waypoint = new Waypoint({
            element: this,
            handler: function(direction) {
                var animation = $(this.element).attr('data-animation');
                $(this.element).css('opacity','1');
                $(this.element).addClass("animated " + animation);
            },
            offset: '65%'
        });
    });

});