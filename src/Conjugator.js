let dictionary = {
  товар: {
    singular: ["товар", "товара", "товару", "товар", "товаром", "товаре"],
    plural: ["товары", "товаров", "товарам", "товары", "товарами", "товарах"],
  },
};

const Cases = {
  I: 0,
  R: 1,
  D: 2,
  V: 3,
  T: 4,
  P: 5,
};

class Conjugator {
  static get Cases() {
    return Cases;
  }

  static addWord(word, conjugation) {
    dictionary[word] = conjugation;
  }
  static getWordCase(word, wordCase, plural) {
    return dictionary[word][plural ? "plural" : "singular"][wordCase];
  }

  static getWordCaseForCount(word, count) {
    if (11 <= count % 100 && count % 100 <= 14) {
      return this.getWordCase(word, this.Cases.R, true);
    } else if (count % 10 === 1) {
      return this.getWordCase(word, this.Cases.I);
    } else if (2 <= count % 10 && count % 10 <= 4) {
      return this.getWordCase(word, this.Cases.R);
    } else {
      return this.getWordCase(word, this.Cases.R, true);
    }
  }
}

export default Conjugator;
