import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Arrow from "@material-ui/icons/ArrowBackIos";
import variables from "../../_variables.scss";
import { topic } from "../../providers/mqtt.provider";
import { withRouter } from "react-router";

const style = {
  root: {
    flexGrow: 1
  },
  appBar: {
    width: "100%",
    height: variables.headerHeight,
    position: "fixed"
  },
  typography: {
    fontFamily: `"Major Mono Display", monospace`,
    fontSize: "1.5em",
    textAlign: "center",
    alignItems: "center",
    width: "100%"
  },
  button: {
    alignItems: "left",
    position: "absolute",
    padding: "0"
  }
};

class Header extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  handleClick = (event) => {
    event.preventDefault();
    this.props.history.goBack()
  }

  render() {
 
    return (
      <AppBar className={this.props.classes.appBar} color="primary">
        <Toolbar>
          { this.props.location.pathname !== "/" && (
          <IconButton
            color="inherit"
            onClick={this.handleClick}
            aria-label="Close"
            className={this.props.classes.button}
          >
            <Arrow />
          </IconButton>
          )}
          <Typography color="inherit" className={this.props.classes.typography}>
            {topic}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(withStyles(style)(Header));
