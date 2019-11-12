import React from 'react';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

export const ControlsButtonGroup = (props) => {
  const { items, input, className } = props;

  return(
    items.map(item => (
      <Button onClick={() => input.onChange(item)} variant="outlined" className={className} color={item === input.value ? 'secondary' : 'primary'}  key={item}>{item}</Button>
    ))
  )
};

export const ControlsSwitch = (props) => {
  const { input } = props;

  return(
    <Switch
      checked={input.value}
      onChange={() => input.onChange(!input.value)}
    />
  )
};

export const ControlText = (props) => {
  const { input, label, type } = props;

  return(
    <FormControl fullWidth variant="outlined">
      <TextField
        label={type === 'date' ? '' : label}
        {...input}
        type={type}
        margin="normal"
        variant="outlined"
      />
    </FormControl>
  );
};
