class Player {

    constructor(name, totalCoins, status, hasStar) {
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
    }

    setName(namePicked) {
        namePicked = this.name
    }

    gotHit() {
        if (this.status === "Small") {
            console.log("You have died")
        } else if (this.status === "Big") {
            this.status = "Small"
        } else if (this.status === "Powered Up") {
            this.status = "Big"
        } else if (hasStar = true) {
            this.status = this.status
            hasStar = false
            console.log("Your star protected you")
        }
    }

    gotPowerUp() {
        if (this.status === "Small") {
            this.status = "Big"
        } else if (this.status === "Big") {
            this.status = "Powered Up"
        } else if (this.status === "Powered Up") {
            hasStar = true
            console.log("You got a star")
        }
    }

    addCoin() {
        this.totalCoins += 1
    }

    print() {
        console.log(`Name: ${this.name}
        Total Coins: ${this.totalCoins}
        Status: ${this.status}
        hasStar: ${this.hasStar}`)
    }

}

const newPlayer = new Player ("Luigi", 0, "Small", false)

console.log(newPlayer)

function chance () {
    let randomNumber = function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    if (randomNumber === 0) {
        gotHit()
    } else if (randomNumber === 1) {
        gotPowerUp()
    } else if (randomNumber === 2) {
        addCoin()
    }
    
}

console.log(chance())



