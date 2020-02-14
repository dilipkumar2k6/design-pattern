class Phone{
    constructor(){
        this.ringState = new SoundState();
    }
    ring(){
        this.ringState.ring();
    }
    volumeUp(){
        this.ringState = this.ringState.nextStateVolumeUp();
    }
    volumeDown(){
        this.ringState = this.ringState.nextStateVolumeDown();
    }
}

class RingState {
    ring(){
        throw new Error('implement it');
    }
    nextStateVolumeUp(){
        throw new Error('implement it');
    }
    nextStateVolumeDown(){
        throw new Error('implement it');
    }
}

class SoundState extends RingState {
    ring(){
        console.log('Phone is in sound state');
    }
    nextStateVolumeUp(){
        return this;
    }
    nextStateVolumeDown(){
        return new VibrateState(); // while sound if volume down then change state to Vibrate
    }
}

class VibrateState extends RingState {
    ring(){
        console.log('Phone is in vibrate state');
    }  
    nextStateVolumeUp(){
        return new SoundState(); // while vibrating; if volume up then change state to Sound state
    }
    nextStateVolumeDown(){
        return new SilentState(); // while sound if volume down then change state to silent
    }  
}

class SilentState extends RingState {
    ring(){
        console.log('...');
    }  
    nextStateVolumeUp(){
        return new VibrateState(); // while silent; if volume up then change state to vibrate state
    }
    nextStateVolumeDown(){
        return this; 
    }   
}

const test = ()=>{
    const phone = new Phone();
    phone.ring();
    phone.volumeUp();
    phone.ring();
    phone.volumeDown();
    phone.ring();
    phone.volumeDown();
    phone.ring();
    phone.volumeUp();
    phone.ring();
    phone.volumeUp();
    phone.ring();
    phone.volumeDown();
    phone.ring();
    phone.volumeDown();
    phone.ring();
    phone.volumeUp();
    phone.ring();
    phone.volumeUp();
    phone.ring();
    phone.volumeUp();
    phone.ring();
    phone.volumeUp();
    phone.ring();
    phone.volumeUp();
    phone.ring();
    phone.volumeUp();
    phone.ring();
    phone.volumeDown();
    phone.ring();
}
test();