class Document {
  constructor(text) {
    this.text = text;
  }
}

class DocumentCommand {
  constructor(document) {
    this.document = document;
  }
  execute() {
    throw new Error("Need to implement");
  }
}
class AddCharCommand extends DocumentCommand {
  constructor(document, chr) {
    super(document);
    this.document = document;
    this.chr = chr;
  }
  execute() {
    this.document.text += this.chr;
  }
}

class DeleteCharCommand extends DocumentCommand {
  constructor(document) {
    super(document);
    this.document = document;
  }
  execute() {
    this.document.text = this.document.text.substring(
      0,
      this.document.text.length - 1
    );
  }
}

const test = () => {
  const document = new Document('');
  const commands = [
    new AddCharCommand(document, "i"),
    new AddCharCommand(document, " "),
    new AddCharCommand(document, "l"),
    new AddCharCommand(document, "o"),
    new AddCharCommand(document, "v"),
    new AddCharCommand(document, "e"),
    new AddCharCommand(document, " "),
    new AddCharCommand(document, "m"),
    new AddCharCommand(document, "e"),
    new DeleteCharCommand(document),
    new DeleteCharCommand(document),
    new AddCharCommand(document, "y"),
    new AddCharCommand(document, "o"),
    new AddCharCommand(document, "u"),
  ];
  for(const command of commands){
      command.execute();
  }
  console.log(document.text)
};

test();
