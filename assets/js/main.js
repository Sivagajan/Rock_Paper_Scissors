console.log('first')


let round = 0
let userPoint = 0
let kiPoint = 0
let userChosen 


const choices = ['Rock', 'Paper', 'Scissors']

    
let check = (uChoice) => {

    let choosenRounds = Number(document.querySelector('input[type=radio]:checked').value)

    console.log(choosenRounds)

    if(round < choosenRounds){

        console.log(round ,' of ', choosenRounds)
        
        let kiChoice = Math.floor(Math.random() * 3)
        console.log(kiChoice)

        let theChoice = `${choices[uChoice]}${choices[kiChoice]}`

        console.log(theChoice)

        switch (theChoice) {
            case 'ScissorsPaper':
            case 'RockScissors':
            case 'PaperRock':
                //resultDisplay.innerHTML = "YOU WIN!"
                userPoint++
                break
            case 'PaperScissors':
            case 'ScissorsRock':
            case 'RockPaper':
                kiPoint++
                //resultDisplay.innerHTML = "YOU LOSE!"
                break
            case 'PaperPaper':
            case 'ScissorsScissors':
            case 'RockRock':
                //resultDisplay.innerHTML = "ITS A DRAW!"
                break
        }

        round++
    }else{
        console.log('The Game is Over')
        console.log('UserPoints', userPoint,' KiPoint', kiPoint)
    }

    if (round === choosenRounds){
            check()
    }

    if(userPoint > kiPoint)
    {
        console.log('You WIN')
    }else if(userPoint < kiPoint){
        console.log('You LOOSE')
    }else if(userPoint === kiPoint){
        console.log('Its a DRAW')        
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