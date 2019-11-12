import React from 'react';
import { Field } from 'redux-form';
import { ControlText, ControlsSwitch } from '../controls/index';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import PaymentIcon from '@material-ui/icons/Payment';
import Grid from '@material-ui/core/Grid';
import PropsProvider from '../../propsProvider';
import PageHeader from '../layout/pageHeader';
import Style from '../../propsProvider/style'

const UserContent = (props) =>  {
  const classes = Style();
  const { subscriptions } = props;

  return (
    <div>
      <PageHeader
        title="Payment"
        description="Please fill credit card data:"
        icon={<PaymentIcon fontSize="large" />}
      />
      <Divider variant="middle" />
      <div className={classes.section}>
        <div>
          <Field name="billingInfo.number" component={ControlText} label="Card number:" />
        </div>
        <div>
          <Grid container alignItems="center">
            <Grid item xs>
              <Field name="billingInfo.expiration" type="date" component={ControlText} label="Expiration date:" />
            </Grid>
            <Grid item className={classes.button}>
              <Field name="billingInfo.cvv" component={ControlText} label="CVV:" />
            </Grid>
          </Grid>
        </div>
      </div>
      <Divider variant="middle" />
      <div className={classes.section}>
        <Typography gutterBottom variant="body1">
          Terms agreement:
        </Typography>
        <div>
          <Field name="confirmation.termsAgreement" component={ControlsSwitch} />
        </div>
      </div>
    </div>
  );
};

const User = () => (
  <PropsProvider>
    <UserContent />
  </PropsProvider>
)


export default User;
