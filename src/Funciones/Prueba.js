//Juego tricki o tres en uno 
class Game{
    constructor(){
        this.posicion = 0
        this.randomPosicion = 0
        this.tablero = []
        this.memoryPlayer = []
        //this.memory almacena los movimientos de los jugadores
        this.memory = []
        this.newPosition = 0
        this.isMovePlayer = false
    }
    generateTablero(){
        for (let index = 0; index < 9; index++) {
            this.tablero.push({id:index,value:"",isActive:false})
        }
        return this.tablero
    }
    getMemory(){
        return this.memory
    }
    getTablero(){
        return this.tablero
    }
    generateMachinePosition(){
        let position = Math.round(Math.random()*10)
        let include = this.memory.includes(position)
        while (include) {
            position = Math.round(Math.random()*10)
            include = this.memory.includes(position)
        }
        return position
    }
    machinePosition(){
        if (this.memory.length > 0 && this.isMovePlayer) {
            let include = this.memory.includes(this.randomPosicion)
            while (include) {
                this.randomPosicion = Math.round(Math.random()*10)
                include = this.memory.includes(this.randomPosicion)
            }
            for (let i = 0; i < this.tablero.length; i++) {
                if (this.tablero[i].id === this.randomPosicion) {
                    this.tablero[i].isActive = true
                    this.tablero[i].value = "o"
                    this.memory.push(this.randomPosicion)
                }            
            }
        }
    }
    getRandomPosition(){
        return this.randomPosicion
    }
    setPosition(posicion){
        for (let i = 0; i < this.tablero.length; i++) {
            if (this.tablero[i].id === parseInt(posicion)) {
                this.tablero[i].isActive = true
                this.tablero[i].value = "x"
                this.memory.push(posicion)
                this.memoryPlayer.push(posicion)
                this.isMovePlayer = true
            }            
        }
        this.newPosition = this.memoryPlayer.length + 1

    }
    
}
const game = new Game()
game.generateTablero()
game.setPosition(1)
game.machinePosition()
game.setPosition(2)
game.machinePosition()
console.log(game.getTablero());