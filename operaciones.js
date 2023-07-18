const fs = require('fs')

const registrar = (nombre, edad, animal, color, enfermedad) =>{
    console.log(`Cita agendada para: ${nombre}`)
    const verRegistro = JSON.parse(fs.readFileSync('citas.json', 'utf8'))
    verRegistro.push({
        Nombre:nombre,
        Edad:edad,
        Animal:animal,
        Color:color,
        Enfermedad:enfermedad
    })
    fs.writeFileSync('citas.json', JSON.stringify(verRegistro));
}
const leer = () =>{
    const verRegistro = JSON.parse(fs.readFileSync('citas.json', 'utf8'))
    verRegistro.forEach((element) =>{
        console.log(element)
    })

}

module.exports = {registrar,leer};