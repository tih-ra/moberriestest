/**
 * Reducer
 * */
const initState = {
  contact: {
    lastName: '',
    firstName: '',
    email: '',
    address: '',
  },
  billingInfo: {
    number: '',
    expiration: '',
    cvv: '',
  },
  confirmation: {
    termsAgreement: false,
  },
  subscription: {
    duration: 12,
    gigabytes: 5,
    payment: false,
  },
};

export default function reducer(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
}
