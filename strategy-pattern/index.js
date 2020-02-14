class File {
    constructor(strategy){
        this.strategy = strategy;
    }
    compress(){
        this.strategy.compress();
    }
}

class CompressStrategy {
    compress(){
        throw new Error('Implement it')
    }
}
class ZipCompression extends CompressStrategy {
    compress(){
        console.log('zip compression');
    }
}

class TarCompression extends CompressStrategy {
    compress(){
        console.log('Tar compression');
    }
}

const test = ()=>{
    const zip = new ZipCompression();
    const file = new File(zip);
    file.compress();
}
test();