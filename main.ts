let 沒有贏家 = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.clearScreen()
    basic.pause(randint(100, 800))
    basic.showIcon(IconNames.Heart)
    沒有贏家 = 1
    while (沒有贏家) {
        if (input.pinIsPressed(TouchPin.P1)) {
            basic.showString("P1 WIN")
            沒有贏家 = 0
        } else if (input.pinIsPressed(TouchPin.P2)) {
            沒有贏家 = 0
            basic.showString("P2 WIN")
        } else {
        	
        }
    }
})
