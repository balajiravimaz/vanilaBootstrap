// map
    let map;

    function initMap() {
      map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    }

// Year Active

$(document).ready(function() {    
    $('#tabs li a:not(:first)').addClass('inactive');
    $('.card1').hide();
    $('.card1:first').show();
        
    $('#tabs li a').click(function(){
        var t = $(this).attr('id');
      if($(this).hasClass('inactive')){ 
        $('#tabs li a').addClass('inactive');           
        $(this).removeClass('inactive');
        
        $('.card1').hide();
        $('#'+ t ).fadeIn('slow');
     }
    });
    
    });


$('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        autoPlay: 3000, 
        dots: true,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],


        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:3,
                nav:false,
                loop:false
            }
        }
    });


    