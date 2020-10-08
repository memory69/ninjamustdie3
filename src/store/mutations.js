export default {
  setActive(state, index) {
    state.active1 = index;
    // console.log(index);
  },
  setActive2(state, index) {
    state.active2 = index;
    // console.log(index);
  },
  setvisual(state, index) {
    state.visualmain2 = index;
    // console.log(index);
  },
  setShopping(state, index) {
    state.currentshopping = index;
    // console.log(state.currentshopping);
  },
  setContent(state, index) {
    state.informationcontent = index;
    // console.log(index);
  },
  setVido(state, index) {
    state.vido = index;
    console.log(index);
  },
  setAddress(state, index) {
    state.addaddress = index;
    // console.log(index);
  },
  setEdit(state, index) {
    state.editaddress = index;
    // console.log(index);
  },
  setShopAddress(state, index) {
    state.shopaddress = index;
  },
};
