new TypeIt("#xyhjzr", {
    loop: true,
    cursorSpeed: 1000,
    speed: 100
})
    .type("XYH && JZR")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("徐元浩❤姜芷柔")
    .pause(3000)
    .go();

new TypeIt('#talkToXHJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();