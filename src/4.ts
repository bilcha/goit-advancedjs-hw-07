class Key {
  private signature = Math.random();

  public getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {};
  public getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean;
  protected key: Key;
  public tenants: Person[] = [];
  comeIn(person: Person): void {
    if (this.door) { 
      this.tenants.push(person)
    }
  }
  public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super();
    this.key = key;
  }
  openDoor(key: Key): void {
    this.door = this.key.getSignature() === key.getSignature();
  }

}
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};