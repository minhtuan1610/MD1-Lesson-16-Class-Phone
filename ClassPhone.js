class MobilePhone {
    constructor(draft, inbox, sent) {
        this.battery = 100;
        this.draft = draft;
        this.inbox = inbox;
        this.sent = sent;
    }

    checkStatus() {
        return this.battery > 0;
    }

    turnOnOff() {

    }

    chargeBattery() {

    }

    textMessage(text) {
        this.battery--;
        return this.draft = text;
    }

    getMessage() {
        this.battery--;
    }

    sendMessage(receivePhone) {
        //1. Move the current draft message to the inbox of the target receive phone
        receivePhone.inbox.push(this.draft);
        //2. Move the current draft message to the sent-box of the current phone
        this.sent.push(this.draft);
        //3. Delete the draft message at the draft-box;
        this.draft = "";
        this.battery--;
    }

    displayInbox() {
        this.battery--;
        return this.inbox;
    }

    displaySent() {
        this.battery--;
        return this.sent;
    }
}

let nokia = new MobilePhone("", [], []);
let iPhone = new MobilePhone("", [], []);