import Student from './student.js';

export default class Doktorant extends Student {
  constructor(imie, rok, miesiac, dzien, rokRozpoczeciaStudiowDr){
    super(imie, rok, miesiac, dzien);

    this.rokRozpoczeciaStudiowDr = rokRozpoczeciaStudiowDr;
  }
}