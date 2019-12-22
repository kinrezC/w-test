import React from "react";
import { InputBase, Typography, ButtonBase } from "@material-ui/core";

import useStyles from "./styles";

const InputContainer = ({ isEth, disabled }) => {
  const classes = useStyles();

  return (
    <div className={classes.containerBase}>
      <div className={classes.inputFieldContainer}>
        <InputBase className={classes.inputField} disabled={disabled} />
      </div>
      <div className={classes.inputContentRight}>
        <div
          className={
            disabled
              ? classes.maxButtonContainerDisabled
              : classes.maxButtonContainer
          }
        >
          <ButtonBase disableRipple disabled={disabled}>
            <Typography className={classes.maxButtonText}>Max</Typography>
          </ButtonBase>
        </div>
        {isEth ? (
          <div className={classes.selectionTypeContainer}>
            <ButtonBase
              className={disabled ? classes.disabledEth : classes.eth}
              disableRipple
            >
              <Typography className={classes.selectionText}>ETH</Typography>
            </ButtonBase>
          </div>
        ) : (
          <div className={classes.selectionTypeContainer}>
            <ButtonBase className={classes.weth} disableRipple>
              <Typography className={classes.selectionText}>WETH</Typography>
            </ButtonBase>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputContainer;
