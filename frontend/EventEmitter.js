class EventEmitter {

    constructor() {
        this.events = {};
    }

    on(eventName, cb) {
        if (!this.events[eventName]) {
            this.events[eventName] = []
        }
        this.events[eventName].push(cb);
    }

    emit(eventName, data) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(cb => cb(data));
        }
    }

    removeListener(eventName, cbToRemove) {
        if (this.events[eventName]) {
            this.events[eventName] = this.events[eventName].filter(cb => cb !== cbToRemove);
        }
    }
}

const emitter = new EventEmitter();

const yellAt = (name => console.log(`${name}!!!!`));
const greet = (name => console.log(`hi ${name}`));

emitter.on('enter', yellAt);
emitter.on('enter', greet);
emitter.emit('enter', 'Daniel');
emitter.removeListener('enter', yellAt);
emitter.emit('enter', 'Josh');