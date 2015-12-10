/*This script offers an interactive content gallery on the index page. The content in the gallery automatically changes every 4 seconds. If a user moves the mouse cursor on the gallery, it will stop changing temporarily until the cursor moves out of the gallery. There are also two arrows at the left and right side of the gallery, at which the user can switch to previous or next content by clicking. The contents of the gallery are image elements with hyperlinks so that users can click them to access the details. jQuery code is used for fading contents and detecting mouse events.*/



var index = 1;                  /*to indicate the current content */
var max = 5;                    /*the maximum number of contents */
function picChange() {          /*change to the next content (fade out and then fade in) */
    "use strict";
    $("#pic_" + index).fadeOut();
    if (index == max) {
        index = 1;
    } else {
        index += 1;
    }
    $("#pic_" + index).fadeIn();
}


function prevChange() {          /*change to the previous  content (fade out and then fade in) */
    "use strict";
    $("#pic_" + index).fadeOut();
    if (index == 1) {
        index = max;
    } else {
        index -= 1;
    }
    $("#pic_" + index).fadeIn();
}


$(document).ready(function () {
    "use strict";
    var h = setInterval(picChange, 4000);       /*start the timer, call picChange every 4000ms*/
    $("#gallery").mouseenter(function () {      /*stop the timer when mouse enters the gallery */
        clearInterval(h);
    });
    $("#gallery").mouseleave(function () {      /*continue the timer when mouse leaves the gallery */
        h = setInterval(picChange, 4000);
    });
});

