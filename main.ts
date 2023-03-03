let richting = 0
input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    richting = input.compassHeading()
    if (richting > 0 && richting < 315 || richting < 0 && richting > 45) {
        basic.showArrow(ArrowNames.North)
    } else if (richting < 270 && richting > 225 || richting > 270 && richting < 315) {
        basic.showArrow(ArrowNames.West)
    } else if (richting < 225 && richting > 180 || richting < 180 && richting > 135) {
        basic.showArrow(ArrowNames.South)
    } else if (richting < 315 && richting > 90 || richting > 45 && richting < 90) {
        basic.showArrow(ArrowNames.East)
    }
})
