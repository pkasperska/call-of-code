import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import variables from "../../_variables.scss";
import { topic } from "../../providers/mqtt.provider";

const style = {
  root: {
    flexGrow: 1
  },
  appBar: {
      width: "100%",
      height: variables.headerHeight,
      textAlign: "center",
      alignItems: "center",
      position: "fixed"
  },
  typography: {
    fontFamily: `"Major Mono Display", monospace`,
    fontSize: "1.5em",
  }
};

class Header extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {
    return (
      <AppBar className={this.props.classes.appBar} color="primary">
        <Toolbar>
          <Typography
            color="inherit"
            className={this.props.classes.typography}
          >
            { topic }
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(style)(Header);
