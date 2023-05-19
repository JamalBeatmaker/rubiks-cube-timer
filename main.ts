input.onButtonPressed(Button.A, function () {
    Time_Taken = 0
    Start_Time = input.runningTime()
    basic.showIcon(IconNames.Heart)
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
})
input.onButtonPressed(Button.AB, function () {
    Minute = Math.trunc(Time_Taken / 1000 / 60)
    Second = Math.round((Time_Taken / 1000 / 60 - Minute) * 60)
    basic.showNumber(Minute)
    basic.showString("min")
    basic.showNumber(Second)
    basic.showString("sec")
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    if (edubitIrBit.isIrSensorTriggered()) {
        Time_Taken = input.runningTime() - Start_Time
        basic.showIcon(IconNames.Yes)
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    }
})
let Second = 0
let Minute = 0
let Start_Time = 0
let Time_Taken = 0
basic.showIcon(IconNames.Happy)
Time_Taken = 0
music.setVolume(50)
