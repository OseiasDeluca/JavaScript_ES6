/*
    Observer
    - É um pattern muito popular em aplicações JavaScript. A instância (subscriber) mantém uma coleção de objetos observers) e notifica todos eles quando ocorrem mudanças no estado.
*/

// Ele precisa manter uma lista de observers
class Observable {
    constructor() {
        this.observers = []; // 1. Manter uma lista
    }

    subscribe(fn) { // tem que ter uma função subscribe que permite adicionar nesses observers
        this.observers.push(fn); // 2. Dar um subscribe
    }

    unsubscribe(fn) {
        this.observers = this.observers.filter(obs => obs !== fn)
    }

    notify(data){ // E ter uma função notify
        this.observers.forEach(fn => fn(data)); // 3. Notificar
    }
}

const o = new Observable();

const logData1 = data => console.log(`Subscribe 1: ${data}`);
const logData2 = data => console.log(`Subscribe 2: ${data}`);
const logData3 = data => console.log(`Subscribe 3: ${data}`);

o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify('notified 1');

o.unsubscribe(logData2);

o.notify('notified 2')
