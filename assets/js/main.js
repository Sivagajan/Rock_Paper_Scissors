console.log('first')


let round = 0
let userPoint = 0
let kiPoint = 0
let userChosen 
let userOutput = document.getElementById('userResult')
let kiOutput = document.getElementById('kiResult')
let winnerOutput = document.getElementById('winner')
const choices = ['Rock', 'Paper', 'Scissors']

let check = (uChoice) => {

    let choosenRounds = Number(document.querySelector('input[type=radio]:checked').value)
    winnerOutput.innerHTML=` `

    console.log(choosenRounds)

    if(round < choosenRounds){

        console.log(round ,' of ', choosenRounds)
        let kiChoice = Math.floor(Math.random() * 3)
        console.log(kiChoice)
        let theChoice = `${choices[uChoice]}${choices[kiChoice]}`
        console.log(theChoice)

        switch (theChoice) {
            case 'ScissorsPaper':
                winnerOutput.innerHTML=` Scissors cuts rough the Paper`
            case 'RockScissors':
                winnerOutput.innerHTML=` Rock smashes the Scissors`
            case 'PaperRock':
                winnerOutput.innerHTML=` Paper covers the Rock`
                userPoint++
                userOutput.innerHTML = userPoint
                kiOutput.innerHTML = kiPoint

                //console.log('UserPoints', userPoint,' KiPoint', kiPoint)
                break;
            case 'PaperScissors':
                winnerOutput.innerHTML=` Scissors cuts rough the Paper`
            case 'ScissorsRock':
                winnerOutput.innerHTML=` Rock smashes the Scissors`
            case 'RockPaper':
                winnerOutput.innerHTML=` Paper covers the Rock`
                kiPoint++
                userOutput.innerHTML = userPoint
                kiOutput.innerHTML = kiPoint
                //console.log('UserPoints', userPoint,' KiPoint', kiPoint)
                break;
            case 'PaperPaper':
                winnerOutput.innerHTML=` Paper And Paper`
            case 'ScissorsScissors':
                winnerOutput.innerHTML=` Scissors And Scissors`
            case 'RockRock':
                winnerOutput.innerHTML=` Rock And Rock`
                userOutput.innerHTML = userPoint
                kiOutput.innerHTML = kiPoint
                //console.log('UserPoints', userPoint,' KiPoint', kiPoint)
                break;
        }

        round++
        if (round === choosenRounds){
            check()
        }

    }else{
        console.log('The Game is Over')
        console.log('UserPoints', userPoint,' KiPoint', kiPoint)
        whosTheWinner(userPoint,kiPoint)
    }

}

const whosTheWinner = (user, ki) =>{

    if(user > ki){
        console.log('You WIN')
        winnerOutput.innerHTML=` You Win`
    }else if(user < ki){
        console.log('You LOOSE')
        winnerOutput.innerHTML=` You Loose`
    }else if(user === ki){
        console.log('Its a DRAW')  
        winnerOutput.innerHTML=` It´s a Draw`      
    }
}

let userRock = () => {
    userChosen = '0'
    check(userChosen)
}

let userPaper = () => {
    userChosen = '1'
    check(userChosen)
}

let userScissors = () => {
    userChosen = '2'
    check(userChosen)
}

let restart = () =>{
    round = 0
    userPoint = 0
    kiPoint = 0
}