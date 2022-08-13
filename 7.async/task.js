class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.timerId = null;
    }
    
    addClock(time, action, id) {
        function AlarmConstructor(time, action, id) {
            this.time = time;
            this.action = action;
            this.id = id;
        }

        if (id === undefined) throw new Error('В запросе отсутствует параметр ID');

        if (this.alarmCollection.some(item => item.id === id)) {
            console.error('Будильник не добавлен. Будильник с таким ID уже существует');

        } else {
            this.alarmCollection.push(new AlarmConstructor(time, action, id));
        }

    }
        
    removeClock(id) {
        let alarmCoolectionlength = this.alarmCollection.length;

        this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);

        console.log(this.alarmCollection);

        if (alarmCoolectionlength === this.alarmCollection.length) {
            console.error('Будильника с таким ID не существует');
            return false;
        } else {
            console.log('Будильник успешно удален');
            return true;
        }
        
    }

    printAlarms() {
        if (this.alarmCollection.length === 0) {
            console.error(`Нет установленных будильников`);
            return;
        }

        console.log(`Печать всех будильников в количестве ${this.alarmCollection.length}:`);
        this.alarmCollection.forEach((item) => 
        console.log(`Будильник №${item.id} заведен на время ${item.time}`));
    }

    getCurrentFormattedTime() {
        let currentTime = new Date;

        let hours = (currentTime.getHours() < 10) ? "0" + currentTime.getHours() : currentTime.getHours();
        let minuts = (currentTime.getMinutes() < 10) ? "0" + currentTime.getMinutes() : currentTime.getMinutes();

        return hours + ":" + minuts;
    }

    start() {
        if (this.timerId === null) {
            console.log(`Текущего будильника нет. Задаем новый интервал.`);
            let interval = setInterval( () => {      
                    this.alarmCollection.forEach(item => checkClock(item));
                },
                    10000
                );
            
            this.timerId = interval;
        }

        const checkClock = (item) => {       
            if (this.getCurrentFormattedTime() === item.time) {
                item.action();
            }
        };
    }

    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
            console.log(`Все будильники остановлены.`);
        }
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
        console.log(`Все будильники удалены.`);
    }
}


const Alarm1 = new AlarmClock;