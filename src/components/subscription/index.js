import React from 'react';
import { Field } from 'redux-form';
import { ControlsButtonGroup, ControlsSwitch } from '../controls/index';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import PropsProvider from '../../propsProvider';
import PageHeader from '../layout/pageHeader';
import Style from '../../propsProvider/style'

const SubscriptionContent = (props) =>  {
  const classes = Style();
  const { subscriptions } = props;

  return (
    <div>
      <PageHeader
        title="Subscription"
        description="Please select subscription parameters:"
        icon={<LibraryMusicIcon fontSize="large" />}
      />
      <Divider variant="middle" />
      <div className={classes.section}>
        <Typography gutterBottom variant="body1">
          Month duration:
        </Typography>
        <div>
          <Field name="subscription.duration" component={ControlsButtonGroup} items={subscriptions.duration} className={classes.button} />
        </div>
      </div>
      <Divider variant="middle" />
      <div className={classes.section}>
        <Typography gutterBottom variant="body1">
          Amount of gigabytes in a cloud:
        </Typography>
        <div>
          <Field name="subscription.gigabytes" component={ControlsButtonGroup} items={subscriptions.gigabytes} className={classes.button} />
        </div>
      </div>
      <Divider variant="middle" />
      <div className={classes.section}>
        <Typography gutterBottom variant="body1">
          Upfront payment:
        </Typography>
        <div>
          <Field name="subscription.payment" component={ControlsSwitch} />
        </div>
      </div>
    </div>
  );
};

const Subscription = () => (
  <PropsProvider>
    <SubscriptionContent />
  </PropsProvider>
)


export default Subscription;
