basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    basic.pause(1000)
    if (pins.analogReadPin(AnalogPin.P0) == 2) {
        servos.P0.setAngle(90)
    }
    if (pins.analogReadPin(AnalogPin.P0) == 3) {
        servos.P0.setAngle(100)
    }
    if (pins.analogReadPin(AnalogPin.P0) == 4) {
        servos.P0.setAngle(135)
    }
    if (pins.analogReadPin(AnalogPin.P0) == 5) {
        servos.P0.setAngle(48)
    }
})
