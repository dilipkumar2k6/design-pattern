class IntegerBox {
    constructor(){
        this.list = [];
    }
    add(a){
        this.list.push(a);
    }
    getData(){
        return this.list;
    }
}
const test = ()=> {
    const box = new IntegerBox();
    for(let i =9; i >=0; i--) {
        box.add(i);
    }
    const data = box.getData();
    for(const int of data) {
        console.log(int);
    }
    console.log('original size ', data.length)
    for(let i =9; i >=0; i--) {
        data.pop(i);
    }
    console.log('after destruction ', data.length)

}
test();