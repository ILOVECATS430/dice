let Roll = 0
input.onGesture(Gesture.Shake, function () {
    Roll = randint(0, 5)
    if (Roll == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
