/**
 * Created by jorten on 16/4/27.
 */

(function() {
    var img = document.querySelectorAll("#lunbo img");
    var that = 0;
    var timer = setInterval(function() {
        var now = that === 3 ? 0 : that + 1;
        img[that].style.opacity = 0;
        img[now].style.opacity = 1;
        that = now;
    }, 3000);
})();