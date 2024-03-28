var chance = "Watermelon"
var player = chance + "'s chance"
var disabledBtn = 0

document.getElementById("chance").innerHTML = player

function check() {
    var btn1 = document.getElementById("btn1").innerHTML
    var btn2 = document.getElementById("btn2").innerHTML
    var btn3 = document.getElementById("btn3").innerHTML
    var btn4 = document.getElementById("btn4").innerHTML
    var btn5 = document.getElementById("btn5").innerHTML
    var btn6 = document.getElementById("btn6").innerHTML
    var btn7 = document.getElementById("btn7").innerHTML
    var btn8 = document.getElementById("btn8").innerHTML
    var btn9 = document.getElementById("btn9").innerHTML
    var result = document.getElementById("resultText")
    var reset = document.getElementById("reset-btn")

    if (btn1 === "🍉" && btn2 === "🍉" && btn3 === "🍉") {
        disable()
        result.innerHTML = "Watermelon won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn4 === "🍉" && btn5 === "🍉" && btn6 === "🍉") {
        disable()
        result.innerHTML = "Watermelon won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn7 === "🍉" && btn8 === "🍉" && btn9 === "🍉") {
        disable()
        result.innerHTML = "Watermelon won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn1 === "🍉" && btn4 === "🍉" && btn7 === "🍉") {
        disable()
        result.innerHTML = "Watermelon won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn2 === "🍉" && btn5 == "🍉" && btn8 === "🍉") {
        disable()
        result.innerHTML = "Watermelon won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn3 === "🍉" && btn6 === "🍉" && btn9 === "🍉") {
        disable()
        result.innerHTML = "Watermelon won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn1 === "🍉" && btn5 === "🍉" && btn9 === "🍉") {
        disable()
        result.innerHTML = "Watermelon won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn3 === "🍉" && btn5 === "🍉" && btn7 === "🍉") {
        disable()
        result.innerHTML = "Watermelon won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn1 === "🍊" && btn2 === "🍊" && btn3 === "🍊") {
        disable()
        result.innerHTML = "Orange won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn4 === "🍊" && btn5 === "🍊" && btn6 === "🍊") {
        disable()
        result.innerHTML = "Orange won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn7 === "🍊" && btn8 === "🍊" && btn9 === "🍊") {
        disable()
        result.innerHTML = "Orange won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn1 === "🍊" && btn4 === "🍊" && btn7 === "🍊") {
        disable()
        result.innerHTML = "Orange won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn2 === "🍊" && btn5 == "🍊" && btn8 === "🍊") {
        disable()
        result.innerHTML = "Orange won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn3 === "🍊" && btn6 === "🍊" && btn9 === "🍊") {
        disable()
        result.innerHTML = "Orange won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn1 === "🍊" && btn5 === "🍊" && btn9 === "🍊") {
        disable()
        result.innerHTML = "Orange won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn3 === "🍊" && btn5 === "🍊" && btn7 === "🍊") {
        disable()
        result.innerHTML = "Orange won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (disabledBtn === 9) {
        disable()
        result.innerHTML = "Match Draw !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

}

function disableBtn(id) {
    if (chance === "Watermelon") {
        document.getElementById(id).disabled = true
        document.getElementById(id).innerHTML = "🍉"
        chance = "Orange"
        player = chance + "'s chance"
        document.getElementById("chance").innerHTML = player
        disabledBtn = disabledBtn + 1
        check()
    }
    else if (chance === "Orange") {
        document.getElementById(id).disabled = true
        document.getElementById(id).innerHTML = "🍊"
        chance = "Watermelon"
        player = chance + "'s chance"
        document.getElementById("chance").innerHTML = player
        disabledBtn = disabledBtn + 1
        check()
    }
}

function disable() {
    for (var i = 1; i < 10; i++) {
        var id = "btn" + i
        document.getElementById(id).disabled = true
    }
    document.getElementById("reset-btn").style.visibility = "visible"
    document.getElementById("resultText").style.visibility = "visible"
}

function reset() {
    for (var i = 1; i < 10; i++) {
        var id = "btn" + i
        document.getElementById(id).disabled = false
        document.getElementById(id).innerHTML = ""
    }
    chance = "Watermelon"
    player = chance + "'s chance"
    document.getElementById("chance").innerHTML = player
    document.getElementById("reset-btn").style.visibility = "hidden"
    document.getElementById("resultText").style.visibility = "hidden"
    disabledBtn = 0
}
