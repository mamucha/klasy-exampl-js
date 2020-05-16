export default class Samochod {
  constructor(marka) {
    this.marka = marka;
  }

  maxV() {
    return `${this.marka.length} km/s`;
  }
}