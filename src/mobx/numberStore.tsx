import { observable } from 'mobx';

const numberStore = observable({
  num: 0,

  increasseAction(num: number) {
    this.num = this.num + num;
  },

  decreaseAction(num: number) {
    this.num = this.num - num;
  },
});

export default numberStore;
