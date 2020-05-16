export default class Student {
  constructor(imie, rok, miesiac, dzien) {
    this.imie = imie;
    this.rok = rok;
    this.miesiac = miesiac;
    this.dzien = dzien;
  }

  get wiek() {
    const obecnaData = new Date();

    return obecnaData.getFullYear() - this.rok;
  }

  toString() {
    return `${this.imie} - ${this.dzien}/${this.miesiac}/${this.rok}`;
  }
}