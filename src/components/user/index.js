import React from 'react';
import { Field } from 'redux-form';
import { ControlText } from '../controls/index';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import FaceIcon from '@material-ui/icons/Face';
import PropsProvider from '../../propsProvider';
import PageHeader from '../layout/pageHeader';
import Style from '../../propsProvider/style'

const UserContent = (props) =>  {
  const classes = Style();
  const { subscriptions } = props;

  return (
    <div>
      <PageHeader
        title="User"
        description="Please fill contact data:"
        icon={<FaceIcon fontSize="large" />}
      />
      <Divider variant="middle" />
      <div className={classes.section}>
        <div>
          <Field name="contact.lastName" component={ControlText} label="Last name:" />
        </div>
        <div>
          <Field name="contact.firstName" component={ControlText} label="First name:" />
        </div>
        <div>
          <Field name="contact.email" component={ControlText} label="Email:" />
        </div>
        <div>
          <Field name="contact.address" component={ControlText} label="Street Address:" />
        </div>
      </div>
      <Divider variant="middle" />
    </div>
  );
};

const User = () => (
  <PropsProvider>
    <UserContent />
  </PropsProvider>
)


export default User;
