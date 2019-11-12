import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import FaceIcon from '@material-ui/icons/Face';
import FlagIcon from '@material-ui/icons/Flag';
import PaymentIcon from '@material-ui/icons/Payment';
import PropsProvider from '../../propsProvider';

const HeaderWrapper = (props) => (
  <Paper square>
    <Tabs
      value={props.locationHistory.index}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab label="Subscription" icon={<LibraryMusicIcon />} />
      <Tab label="Contact" icon={<FaceIcon />} />
      <Tab label="Payment" icon={<PaymentIcon />} />
      <Tab label="Finish" icon={<FlagIcon />} />
    </Tabs>
  </Paper>
);

const Header = () => (
  <PropsProvider>
    <HeaderWrapper />
  </PropsProvider>
)

export default Header;
