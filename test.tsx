// Definiert eine Klasse mit einem Konstruktor
class Person {
  constructor(public name: string) {}

  // Definiert eine Methode in der Klasse
  greet(): string {
    return `Hello, my name is ${this.name}!`;
  }
}

// Erstellt eine Instanz der Klasse
const john = new Person("John");

// Ruft die Methode auf und gibt das Ergebnis aus
console.log(john.greet()); // Ausgabe: Hello, my name is John!
