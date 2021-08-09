"use strict"

let hr = 0
let mn = 0
let sg = 0
 
let tempo = 10
let crono


function start(){

    crono = setInterval(() => {timer();}, tempo)
}

function pause(){

    clearInterval(crono)

}

function reset(){

    clearInterval(crono)
    hr = 0
    mn = 0
    sg = 0
    document.getElementById('counter').innerText = '00:00:00'

}

function timer(){

    sg++

    if(sg == 60) {

        sg = 0
        mn++

        if(mn == 60) {

            mn = 0
            hr++
        }

    }

    var format = (hr < 10 ? '0' + hr : hr) + ':' + (mn < 10 ? '0' + mn : mn) + ':' + (sg < 10 ? '0' + sg : sg)
    document.getElementById("counter").innerText = format

}