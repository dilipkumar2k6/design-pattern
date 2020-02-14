class Greeter {
    greet(){
        throw new Error('Need to impelement.')
    }
}
class RealGreeter extends Greeter{
    greet(){
        return 'Hi there!';
    }
}

class GreeterProxy extends Greeter {
    greet(){
        if(!this.greeter) {
            this.greeter = new RealGreeter();
        } 
        return this.greeter.greet();  
    }
}

const test = ()=>{
    const greeterProxy = new GreeterProxy();
    console.log(greeterProxy.greet())
}
test();