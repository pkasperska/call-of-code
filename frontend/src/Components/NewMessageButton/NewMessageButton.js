import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import styleVariables from "../../_variables.scss";

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
    background: styleVariables.secondaryColor
};
  
  function FloatingActionButtons() {
    return (
      <div>
        <Fab color="primary" aria-label="Add" style={style}>
          <AddIcon />
        </Fab>
      </div>
    );
  }
  
  export default FloatingActionButtons;
