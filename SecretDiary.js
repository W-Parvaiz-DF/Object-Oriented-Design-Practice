class SecretDiary {

    constructor() {

        this.locked = true;
        this.entries = [];
    };

    addEntry(message) {

        if (this.locked === true) {

            return console.log('The diary is locked!');

        } else {
            this.entries.push(message);


        }
    }


    getEntries() {

        if (this.locked === true) {
            return console.log('The diary is locked!');

        } else {

            return this.entries
        }
    };



    unlock() {

        this.locked = false;

    };

    lock() {

        this.locked = true;
    }


};

module.exports = SecretDiary 