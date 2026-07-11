input.onButtonPressed(Button.A, function () {
    if (CurrentPage == 1) {
        if (!(FirstNumber == 9)) {
            FirstNumber += 1
        } else {
            FirstNumber = 0
        }
    }
    if (CurrentPage == 3) {
        if (!(SecondNumber == 9)) {
            SecondNumber += 1
        } else {
            SecondNumber = 0
        }
    }
    if (CurrentPage == 2) {
        if (Operation == "+") {
            Operation = "x"
        } else {
            if (Operation == "x") {
                Operation = "-"
            } else {
                if (Operation == "-") {
                    Operation = "/"
                } else {
                    Operation = "+"
                }
            }
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (CurrentPage == 4) {
        CurrentPage = 1
        CurrentPage = 1
        FirstNumber = 0
        Operation = "+"
        SecondNumber = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (CurrentPage == 1) {
        FirstNumber = FirstNumber
        CurrentPage = 2
    } else if (CurrentPage == 2) {
        Operation = Operation
        CurrentPage = 3
    } else {
        if (CurrentPage == 3) {
            if (Operation == "+") {
                Answer = FirstNumber + SecondNumber
            } else if (Operation == "-") {
                Answer = FirstNumber - SecondNumber
            } else if (Operation == "x") {
                Answer = FirstNumber * SecondNumber
            } else {
                if (Operation == "/") {
                    Answer = FirstNumber / SecondNumber
                }
            }
            SecondNumber = SecondNumber
            CurrentPage = 4
        }
    }
})
let Answer = 0
let SecondNumber = 0
let Operation = ""
let FirstNumber = 0
let CurrentPage = 0
CurrentPage = 1
FirstNumber = 0
Operation = "+"
SecondNumber = 0
basic.forever(function () {
    if (CurrentPage == 1) {
        basic.showNumber(FirstNumber)
    }
    if (CurrentPage == 3) {
        basic.showNumber(SecondNumber)
    }
    if (CurrentPage == 2) {
        basic.showString(Operation)
    }
    if (CurrentPage == 4) {
        basic.showNumber(Answer)
    }
})
basic.forever(function () {
	
})
