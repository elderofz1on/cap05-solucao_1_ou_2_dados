input.onButtonPressed(Button.A, function () {
    dado1 = Math.round(randint(50, 649) / 100)
    modo = 1
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.pause(200)
})
input.onGesture(Gesture.Shake, function () {
    modo = 0
    dado1 = 1
    dado2 = 1
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    dado1 = Math.round(randint(50, 649) / 100)
    dado2 = Math.round(randint(50, 649) / 100)
    modo = 2
    basic.showLeds(`
        . . # # #
        . . # # #
        # # # # #
        # # # . .
        # # # . .
        `)
    basic.pause(200)
})
let dado2 = 0
let dado1 = 0
let modo = 0
modo = 0
dado1 = 1
dado2 = 1
basic.forever(function () {
    if (modo == 1) {
        if (dado1 == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else if (dado1 == 2) {
            basic.showLeds(`
                . . . . .
                . . . # .
                . . . . .
                . # . . .
                . . . . .
                `)
        } else if (dado1 == 3) {
            basic.showLeds(`
                . . . . .
                . . . # .
                . . # . .
                . # . . .
                . . . . .
                `)
        } else if (dado1 == 4) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # . # .
                . . . . .
                `)
        } else if (dado1 == 5) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                `)
        } else {
            basic.showLeds(`
                . . . . .
                . # . # .
                . # . # .
                . # . # .
                . . . . .
                `)
        }
    } else if (modo == 2) {
        if (dado1 == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . # . . .
                . . . . .
                `)
        } else if (dado1 == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                # . . . .
                `)
        } else if (dado1 == 3) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . # . . .
                # . . . .
                `)
        } else if (dado1 == 4) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # . # . .
                . . . . .
                # . # . .
                `)
        } else if (dado1 == 5) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # . # . .
                . # . . .
                # . # . .
                `)
        } else {
            basic.showLeds(`
                . . . . .
                . . . . .
                # . # . .
                # . # . .
                # . # . .
                `)
        }
        basic.pause(200)
        if (dado2 == 1) {
            basic.showLeds(`
                . . . . .
                . . . # .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (dado2 == 2) {
            basic.showLeds(`
                . . . . #
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else if (dado2 == 3) {
            basic.showLeds(`
                . . . . #
                . . . # .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else if (dado2 == 4) {
            basic.showLeds(`
                . . # . #
                . . . . .
                . . # . #
                . . . . .
                . . . . .
                `)
        } else if (dado2 == 5) {
            basic.showLeds(`
                . . # . #
                . . . # .
                . . # . #
                . . . . .
                . . . . .
                `)
        } else {
            basic.showLeds(`
                . . # . #
                . . # . #
                . . # . #
                . . . . .
                . . . . .
                `)
        }
    } else {
        basic.clearScreen()
    }
})
