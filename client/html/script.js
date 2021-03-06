$(function () {
    function display(bool) {
        if (bool) {
            $("#container").show();
        } else {
            $("#container").hide();
        }
    }

    display(false)

    window.addEventListener('message', function(event) {
        var item = event.data;
        if (item.type === "ui") {
            if (item.status == true) {
                display(true)
            } else {
                display(false)
            }
        }
    })
    // if the person uses the escape key, it will exit the resource
    document.onkeyup = function (data) {
        if (data.which == 27) {
            $.post('http://chip_clothes/exit', JSON.stringify({}));
            return
        }
    };
    $("#close").click(function () {
        $.post('http://chip_clothes/exit', JSON.stringify({}));
        return
    })

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems, options);
      });
    
      // Or with jQuery
    
      $(document).ready(function(){
        $('.collapsible').collapsible();
      });

    

    $(document).ready(function(){
        $('.tabs').tabs();
    });
    
    
        


})