class FileVisitor {
    visitWordFile(){
        throw new Error('Needs to be override');
    }
    visitPictureFile(){
        throw new Error('Needs to be override');
    }
}

class File {
    visit(){
        throw new Error('Needs to be override');
    }
}

class WordFile extends File {
    visit(fileVisitor) {
        fileVisitor.visitWordFile(this);
    }
}

class PictureFile extends File {
    visit(fileVisitor) {
        fileVisitor.visitPictureFile(this);
    }
}

class PrintFileVisitor extends FileVisitor {
    visitWordFile(){
        console.log('Open word and print the word file')
    }
    visitPictureFile(){
        console.log('Open picture and print the picture file');
    }
}

class PreviewFileVisitor extends FileVisitor {
    visitWordFile(){
        console.log('Open word and preview the word file')
    }
    visitPictureFile(){
        console.log('Open picture and preview the picture file');
    }
}

const test = ()=> {
    const files = [new WordFile(), new PictureFile()];
    const printFileVisitor = new PrintFileVisitor();
    const previewFileVisitor = new PreviewFileVisitor();
    for(const file of files) {
        file.visit(printFileVisitor);
    }

    for(const file of files) {
        file.visit(previewFileVisitor);
    }
}

test();