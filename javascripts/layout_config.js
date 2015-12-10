/*This script is used to modify the layout of the website. Two functions are explained below.
1. Fixed navigation
This script allows the navigation bar stick to the top of the page when a user scrolls down the page. In ‘Articles’ and ‘Questions’ section, the local navigation sidebar can also be fixed to the top part of the page. This function can help users navigate more easily when browsing our website, especially when they are reading long articles. By using the fixed navigation, users do not need to scroll back to the top to visit other pages. The original concept of the script is gained from http://www.cnblogs.com/yjzhu/archive/2013/01/18/2866782.html, and we made our own version with the help of Andy Epifani.
2. Height adjustment
With use of this script, the height of the right sidebar will also expand. As the height of each page varies, it is hard to set a fixed height for the right-side column. The script will compare the height of the main column, the right-side column and the whole viewport, and then apply the largest value to the right-side column.
*/


function changePos(id) {            /*set position according to element height */
    "use strict";
    var obj = document.getElementById(id), scrollTop = document.documentElement.scrollTop || document.body.scrollTop, scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    if (scrollTop < 130) {          /*If the element is scrolled less than 130px, change the position back to normal */
        obj.style.position = 'relative';
        obj.style.left = 0;
        obj.style.top = 0;
    } else {                        /*If the element is scrolled more than 130px, stick it to the top */
        obj.style.position = 'fixed';
        if (id == "navbar") {       /*used for navigation bar */
            obj.style.top = 0;
            obj.style.left = -scrollLeft + "px";
        }
        if (id == "sidenav") {      /*for side nav bar */
            obj.style.top = 40 + "px";
            obj.style.left = Number(window.getComputedStyle(document.getElementById('navlist'), null).getPropertyValue('margin-left').replace("px", "")) - scrollLeft + "px";       /*use the position of navlist to locate side nav */
        }
    }
}

function heightAdjust(id) {
    "use strict";
    if (document.getElementById("column_main")) {           /*if the "column_main" exists, use it, else use "column_main2"(For 3 column and 2 column layout, respectively) */
        var height1 = document.getElementById("column_main").offsetHeight + 10;
    } else {
        var height1 = document.getElementById("column_main2").offsetHeight + 10;
    }
    
    var height2 = document.body.clientHeight - 220;
    var height3 = 810;
    document.getElementById(id).style.height = Math.max(height1, height2, height3) + 'px';   /*compare the height of the main column, the right-side column and the whole viewport, and then apply the largest value to the right-side column */
}

window.onload = function () {       /*call functions when page is loaded*/
    "use strict";
    heightAdjust('column_right');
    if (document.getElementById("sidenav")) {       /*if "sidenav" exists, apply the changePos function to it, else only apply changePos to "navbar"*/
        window.onscroll = function () {             /*call functions if user scrolls the window*/
            changePos('sidenav');
            changePos('navbar');
            heightAdjust('column_right');
        };
        window.onresize = function () {             /*call functions if user resizes the window*/
            changePos('sidenav');
            changePos('navbar');
            heightAdjust('column_right');
        };
    } else {
        window.onscroll = function () {
            changePos('navbar');
            heightAdjust('column_right');
        };
        window.onresize = function () {
            changePos('navbar');
            heightAdjust('column_right');
        };
    }
};