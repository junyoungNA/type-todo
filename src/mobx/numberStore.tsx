import { makeAutoObservable } from 'mobx';

export default class NumberStore {
  constructor() {
    makeAutoObservable(this);
  }
  num = 0;
  increasseAction = () => {
    this.num++;
  };

  decreaseAction() {
    this.num--;
  }
}
