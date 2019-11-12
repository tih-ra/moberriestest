import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Style from '../../propsProvider/style'

const PageHeader = (props) =>  {
  const { icon, title, description } = props;
  const classes = Style();

  return (
    <div className={classes.section}>
      <Grid container alignItems="center">
        <Grid item xs>
          <Typography gutterBottom variant="h4">
            {title}
          </Typography>
        </Grid>
        <Grid item>
          {icon}
        </Grid>
      </Grid>
      <Typography color="textSecondary" variant="body2">
        {description}
      </Typography>
    </div>
  );
};

export default PageHeader;
