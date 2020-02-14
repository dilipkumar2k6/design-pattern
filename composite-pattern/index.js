class MenuComponent{
    constructor(text){
       this.text = text; 
    }
}
class MenuItem extends MenuComponent {
    constructor(text){
        super(text);
    }
}
class Menu extends MenuComponent {
    constructor(text){
        super(text);
        this.components = new Array();
    }
}

const test = ()=> {
    const file = new Menu('File');
    file.components.push(new MenuItem('Open'));
    file.components.push(new MenuItem('Save'));
    file.components.push(new MenuItem('Exit'));
 
    const recentFiles = new Menu('Recent Files');
    file.components.push(recentFiles);

    const edit = new Menu('Edit');

    console.log({file, edit});
};

test();