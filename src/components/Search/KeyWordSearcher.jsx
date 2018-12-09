import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

export default class KeyWoordSearcher extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }

  render() {

    const { value, onChange } = this.props;

    return <TextField
      id="outlined-full-width"
      value={value}
      placeholder="'developer' or 'ninja'"
      fullWidth
      onChange={(e) => onChange(e.target.value)}
      margin="dense"
    />
  }
}
