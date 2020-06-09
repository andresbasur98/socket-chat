class Usuarios{

    constructor(){
        this.personas = [];
    }

    agregarPersona(id, nombre, sala){
        let persona = { id, nombre, sala };
        this.personas.push(persona);

        return this.personas;
    }

    getPersona( id ){
        let persona = this.personas.filter( persona =>{
            return persona.id == id;
        })[0];  //Ponemos el 0 ya que solo queremos que nos devuelva la primera posición

        return persona;
    }

    getPersonas(){
        return this.personas;
    }

    getPersonasPorSala(sala){
        let personasEnSala = this.personas.filter( persona => persona.sala === sala);
        return personasEnSala;
    }

    borrarPersona(id){

        let personaBorrada = this.getPersona(id); // Referencia de la persona que voy a borrar

        this.personas = this.personas.filter( persona =>{ //Con la función filter se recibe un arreglo nuevo y borro a la persona
                persona.id != id;
            });


        return personaBorrada;
    }
}

module.exports = {
    Usuarios
}