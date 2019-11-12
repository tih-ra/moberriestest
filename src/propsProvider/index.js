import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';
// import validate from 'common/validations';

const pathsArr = ["/", "/user", "/payment", "/finish"];

const PropsProvider = (props) => {
  const {
    children,
    subscriptions,
    currentSubscription,
    locationHistory,
    finalValues,
  } = props;

  const [price, setPrice] = useState(0);

  const calculatePrice = () => {
    const price = (currentSubscription.gigabytes * 2) * currentSubscription.duration;
    setPrice(currentSubscription.payment ? price - (price * 0.1) : price);
  }

  useEffect(() => calculatePrice(), [currentSubscription.duration, currentSubscription.gigabytes, currentSubscription.payment]);

  return (
    React.Children.map(children, child => (
      React.cloneElement(child, {
        subscriptions,
        currentSubscription: {
          ...currentSubscription,
          price: price,
        },
        locationHistory,
        finalValues,
      })
    ))
  );
};

export const DefaultForm = reduxForm({
  form: 'userSubscription',
  //validate,
  destroyOnUnmount: false,
})(PropsProvider);

const selector = formValueSelector('userSubscription');

export const mapStateToProps = state => (
  {
    initialValues: state.user,
    subscriptions: state.subscriptions,
    locationHistory: {
      index: pathsArr.indexOf(state.router.location.pathname),
      paths: pathsArr,
    },
    currentSubscription: {
      duration: selector(state, 'subscription.duration'),
      gigabytes: selector(state, 'subscription.gigabytes'),
      payment: selector(state, 'subscription.payment'),
    },
    finalValues: state.form.userSubscription,
  }
);


// export const mapDispatchToProps = dispatch => ({
//   postToHydra: lead => dispatch(postToHydraAction(lead)),
//   changeLanguage: lang => dispatch(changeLanguageAction(lang)),
// });
export default connect(mapStateToProps)(DefaultForm);
