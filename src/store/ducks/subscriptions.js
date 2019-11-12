/**
 * Reducer
 * */
const initState = {
  duration: [3, 6, 12],
  gigabytes: [3, 5, 10, 20, 30, 50],
  payment: [true, false],
  price: 2,
  discount: 10,
};

export default function reducer(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
}
