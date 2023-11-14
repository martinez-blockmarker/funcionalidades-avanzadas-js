// Escribe tu código aquí:
const person = {
    name: 'Ainoha',
    greet: function () {
      console.log(`Hola, soy ${this.name}`)
    }
  }
  
  person.greet() 
  
  
  const person2 = {
    name: 'Doraemon',
    greet: () => {
      console.log(`Hola, soy ${this.name}`)
    }
  }
  
  person.greet()
  
