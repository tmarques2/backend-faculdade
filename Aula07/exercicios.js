class Carro{
    constructor(){
        this.marca = null;
        this.modelo = null;
        this.ano = null;
        this.motor_ligado = false;
    }
    ligar_motor(){
        this.motor_ligado = true;
    }
    desligar_motor(){
        this.motor_ligado = false
    }
    status_motor(){
        if(this.motor_ligado==true){
            console.log("O motor está ligado!")
        } else {
            console.log("O motor está desligado!")
        }
    }
}

carro = new Carro()
carro.marca = "Honda"
carro.modelo = "Civic"
carro.ano = 2025
carro.status_motor()
carro.ligar_motor()
carro.status_motor()
carro.desligar_motor()
carro.status_motor()