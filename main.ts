let richting = 0
input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    richting = input.compassHeading()
    if (richting < 45) {
        basic.showArrow(ArrowNames.North)
    } else if (richting < 135) {
        basic.showArrow(ArrowNames.West)
    } else if (richting < 225) {
        basic.showArrow(ArrowNames.South)
    } else {
        basic.showArrow(ArrowNames.East)
    }
})
