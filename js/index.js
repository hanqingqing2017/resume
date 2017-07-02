FastClick.attach(document.body);


function refreshRem() {
    var desW = 750,
        winW = document.documentElement.clientWidth,
        ratio = winW / desW;
    document.documentElement.style.fontSize = ratio * 100 + 'px';
}
refreshRem();
window.addEventListener('resize', refreshRem);


var mySwiper = new Swiper('.swiper-container', {

    direction: 'vertical',
    loop: true,
    onTransitionEnd: function (swiper) {

        var slides = swiper.slides,

            curIndex = swiper.activeIndex,

            total = slides.length,
            targetId = 'page0';
        switch (curIndex) {
            case 0:
                targetId += (total - 2);
                break;
            case (total - 1):
                targetId += 1;
                break;
            default:
                targetId += curIndex;
        }
        [].forEach.call(slides, function (item, index) {
            if (curIndex == index) {
                item.id = targetId;
            } else {
                item.id = null;
            }
        });
    }
});


//music
var oMusic = document.getElementById('music'),
    audioMusic = document.getElementById('audioMusic');
window.setTimeout(function () {
    audioMusic.play();
    oMusic.style.opacity = 1;
    audioMusic.addEventListener('canplay', function () {
        oMusic.className = 'music musicMove';
    }, false)
}, 1000);
oMusic.onclick = function () {
    if (audioMusic.paused) {
        audioMusic.play();
        oMusic.className = 'music musicMove';
        oMusic.style.webkitAnimationPlayState = 'running';
    } else {
        audioMusic.pause();
        oMusic.className = 'music';
        oMusic.style.webkitAnimationPlayState = 'paused';

    }
};





