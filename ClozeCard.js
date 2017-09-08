module.exports = function ClozeCard(text, cloze) {
  if (this instanceof ClozeCard) {
    this.fullText = text;
    this.partial = text.replace(cloze, '...');
    if(this.partial === text) throw new Error('This does not work, oops');
    this.cloze = cloze;

  } else return new ClozeCard(text, cloze);
};