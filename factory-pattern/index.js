class CompressionStrategy {

}

class ZipCompressionStrategy {

}

class TarCompressionStrategy {

}
class StrategyFactory {
    create(){
        throw new Error('Implement it')
    }
}

class ZipCompressionStrategyFactory extends StrategyFactory{
    create(){
        return new ZipCompressionStrategy();
    }
}

class TarCompressionStrategyFactory extends StrategyFactory{
    create(){
        return new TarCompressionStrategy();
    }
}

const test = ()=>{
    const factory = new ZipCompressionStrategyFactory();
    console.log(factory.create());
}
test();
