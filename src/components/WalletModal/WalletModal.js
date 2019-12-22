import React from "react";
import { Grid, Typography, Dialog, ButtonBase } from "@material-ui/core";
import { useWeb3React } from "@web3-react/core";

import { injected, trezor, ledger } from "../../connectors";

import useStyles from "./styles";
import { setWallets } from "./constants";

const walletByName = {
  INJECTED: injected,
  TREZOR: trezor,
  LEDGER: ledger
};

const WalletOptionContainer = ({ icon, text, className, activateWallet }) => {
  const classes = useStyles();

  return (
    <ButtonBase
      disableRipple
      className={classes.optionContainer}
      onClick={activateWallet}
    >
      <img src={icon} alt={text} className={className} />
      <Typography className={classes.optionText}>{text}</Typography>
    </ButtonBase>
  );
};

const WalletModal = ({ open, handleClose }) => {
  const classes = useStyles();
  const context = useWeb3React();

  const { activate } = context;

  return (
    <Dialog open={open} onClose={handleClose}>
      <div className={classes.wrapper}>
        <Typography className={classes.title}>Connect Your Wallet</Typography>
        <Grid
          container
          flex="row"
          justify="space-evenly"
          alignItems="flex-start"
        >
          {setWallets(classes, activate, walletByName).map(obj => (
            <WalletOptionContainer
              icon={obj.icon}
              text={obj.text}
              className={obj.className}
              activateWallet={obj.runActivation}
            />
          ))}
        </Grid>
      </div>
    </Dialog>
  );
};

export default WalletModal;