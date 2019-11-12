import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import PropsProvider from '../../propsProvider';
import Style from '../../propsProvider/style';

const FooterWrapper = (props) => {
  const classes = Style();

  const { locationHistory } = props;
  
  const isNavigationStart = locationHistory.index === 0;
  const isNavigationFinish = locationHistory.index === (locationHistory.paths.length - 1);

  const nextLink = isNavigationFinish ? '/finish' : locationHistory.paths[locationHistory.index + 1];
  const backLink = isNavigationStart ? '/' : locationHistory.paths[locationHistory.index - 1];


  return(
    <div>
      <Link to={backLink}>
        <Button variant="contained" disabled={isNavigationStart} className={classes.button}>
          Back
        </Button>
      </Link>
      <Link to={nextLink}>
        <Button variant="contained" disabled={isNavigationFinish} color="primary" className={classes.button}>
          Next
        </Button>
      </Link>
    </div>
  )

};

const Footer = () => (
  <PropsProvider>
    <FooterWrapper />
  </PropsProvider>
);

export default Footer;
