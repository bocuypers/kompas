let richting = 0
input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    richting = input.compassHeading()
    if (45 < richting && richting < 135) {
        basic.showArrow(ArrowNames.East)
    } else if (richting < 225 && richting > 135) {
        basic.showArrow(ArrowNames.South)
    } else if (richting > 225 && richting < 315) {
        basic.showArrow(ArrowNames.West)
    } else if (richting < 315 && richting > 360 || richting < 45 && richting > 0) {
        basic.showArrow(ArrowNames.North)
    }
})
