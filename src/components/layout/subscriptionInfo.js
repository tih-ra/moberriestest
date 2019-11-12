import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import Style from '../../propsProvider/style'
import PropsProvider from '../../propsProvider';

const SubscriptionInfoWrapper = (props) => {
  const classes = Style();

  const {
    currentSubscription
  } = props;

  return(
    <div>
      <div className={classes.section}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography variant="overline">
              Current subscription:
            </Typography>
          </Grid>
          <Grid item>
            <Chip
              icon={<LibraryMusicIcon />}
              label={`${currentSubscription.duration} Month / ${currentSubscription.gigabytes}Gb / ${currentSubscription.price} €`}
              color="secondary"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </div>
      <Divider variant="middle" />
    </div>
  )
}

const SubscriptionInfo = () => (
  <PropsProvider>
    <SubscriptionInfoWrapper />
  </PropsProvider>
)

export default SubscriptionInfo;
