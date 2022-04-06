const statusOptions = ["Dead", "Small", "Big", "Powered Up"]
let gameActive = true

class Player {

    constructor (name, totalCoins = 0, statusIndex = 1, hasStar = false) {
        this.name = name
        this.totalCoins = totalCoins
        this.statusIndex = statusIndex
        this.hasStar = hasStar
    }

    setName(namePicked) {
        namePicked = this.name
    }

    gotHit() {
        //makes game last a long time, if activated, change next section to else if
        // if (this.hasStar = true) {
        //     this.hasStar = false
        //     console.log("Your star protected you")
        // } 
        if (statusOptions[this.statusIndex] === "Small") {
            statusOptions[this.statusIndex] = "Dead"
            gameActive = false
        } 
        else if (statusOptions[this.statusIndex] === "Big") {
            statusOptions[this.statusIndex] = "Small"
        } 
        else {
            statusOptions[this.statusIndex] = "Big"
        }
    }

    gotPowerup(){
        if (statusOptions[this.statusIndex] === "Small"){
            statusOptions[this.statusIndex] = "Big"
        } 
        else if (statusOptions[this.statusIndex] === "Big") {
            statusOptions[this.statusIndex] = "Powered Up"
        } 
        else if (statusOptions[this.statusIndex]==="Powered Up") {
            this.hasStar = true
        }
    }

    addCoin() {
        this.totalCoins += 1
    }

    print() {
        console.log(`Name: ${this.name}
        Status: ${statusOptions[this.statusIndex]}
        Total Coins: ${this.totalCoins}`)

        if (this.hasStar === true){
            console.log("You have a star!")
        }
    }
}

let gameInterval
const startGame = () => {
    const mario = new Player("Mario", 0, 1, false)
          
    const runGame = () => {
        let randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
        
        switch (randomNumber(0,2)) {
            case 0:
                mario.gotHit()
                mario.print()
                break
            case 1:
                mario.gotPowerup()
                mario.print()
                break
            case 2:
                mario.addCoin()
                mario.print()
                break
        }
        
        if(gameActive === false){
            clearInterval(gameInterval)
        }
    }

    gameInterval = setInterval(runGame, 1000);

}
startGame()