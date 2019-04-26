import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";
import classNames from "classnames";
import styles from "./FullScreenDialog.module.scss";
import { mqtt, topic } from "../../providers/mqtt.provider";

const style = {
  appBar: {
    position: "relative"
  },
  flex: {
    flex: 1
  },
};
function renderTransition(props) {
  return <Slide direction="up" {...props} />;
}

const initialState = {
    title: "",
    message: "",
    titleError: "",
    messageError: ""
}
class FullScreenDialog extends React.Component {

  state = initialState;

  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate()
    const date = new Date();

    if (isValid) {
    this.setState(initialState);
    mqtt.publish(topic, JSON.stringify({...this.state, 
      longitude: this.props.longitude, 
      latitude: this.props.latitude,
      date: this.getDateString(date),
      time: this.getTimeString(date)
    }))
  }
  }
  
  handleChange = name => event => this.setState({ [name]: event.target.value });

  validate = () => {
    const titleError = !this.state.title ? "Podaj tytuł wiadomości" : "";
    const messageError = !this.state.message ? "Podaj treść wiadomości" : "";

    if (titleError || messageError) {
      this.setState({titleError, messageError})
      return false;
    }
    return true;
  }

  getDateString = (date) => {
      const month = date.getMonth() + 1;
      return `${date.getDate()}.${
        month >= 10 ? month : "0" + month
      }.${date.getFullYear()}`;
    };
  
  getTimeString = (date) => {
    const minutes = date.getMinutes();
    return `${date.getHours()}:${
    minutes >= 9 ? minutes : "0" + minutes}`
  }

  render() {
    const { classes } = this.props;
    return (
      <Dialog
        fullScreen
        open={this.props.open}
        onClose={this.props.onClose}
        TransitionProps={this.props.transitionProps}
        TransitionComponent={renderTransition}
      >
        <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
          <AppBar className={classes.appBar} color="primary">
            <Toolbar>
              <IconButton
                color="inherit"
                onClick={this.props.onClose}
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                Nowa wiadomość
              </Typography>
              <Button color="inherit" type="submit">
                Wyślij
              </Button>
            </Toolbar>
          </AppBar>
          <div className={styles.container}>
            <TextField
              id="standard-dense"
              label="Tytuł wiadomości"
              className={classNames(classes.textField, classes.dense)}
              margin="dense"
              fullWidth
              value={this.state.title}
              onChange={this.handleChange('title')}
              required
              inputProps={{ maxLength: 27 }}
            />
            <div className={styles.error}>{this.state.titleError}</div>
            <TextField
              id="standard-multiline-static"
              label="Treść wiadomości"
              multiline
              rows="10"
              className={classes.textField}
              margin="normal"
              fullWidth
              value={this.state.message}
              onChange={this.handleChange('message')}
              required
            />
            <div className={styles.error}>{this.state.messageError}</div>
          </div>
        </form>
      </Dialog>
    );
  }
}

export default withStyles(style)(FullScreenDialog);
