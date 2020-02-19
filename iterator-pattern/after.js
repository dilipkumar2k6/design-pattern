class IntegerBox {
    constructor(){
        this.list = [];
    }
    add(a){
        this.list.push(a);
    }
}
class Iterator {
    getNext(){
        throw new Error('Implement me');
    }
    hasMore(){
        throw new Error('Implement me'); 
    }
}
class IntegerBoxIterator {
    constructor(box){
        this.list = box.list;
        this.currentIndex = 0;
    }
    getNext(){
        if(this.hasMore()) {
            const val = this.list[this.currentIndex];
            this.currentIndex++;
            return val;
        }
    }
    hasMore(){
         return this.currentIndex < this.list.length;
    }
}

const test = ()=> {
    const box = new IntegerBox();
    for(let i =9; i >=0; i--) {
        box.add(i);
    }
    const iterator = new IntegerBoxIterator(box);
    while(iterator.hasMore()) {
        console.log(iterator.getNext())
    }

}
test();

