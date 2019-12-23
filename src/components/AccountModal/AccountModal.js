import React from "react";
import { Dialog, Typography, ButtonBase, Divider } from "@material-ui/core";
import { useWeb3React } from "@web3-react/core";

import useStyles from "./styles";

const compressTxHash = txHash => `${txHash.slice(0, 8)}...${txHash.slice(-6)}`;

const Transaction = ({ transaction }) => {
  const classes = useStyles();

  return (
    <div className={classes.transactionContainer}>
      <div className={classes.txHashContainer}>
        <ButtonBase
          disableRipple
          onClick={() =>
            window.open(
              `https://etherscan.com/tx/${transaction.hash}`,
              "_blank"
            )
          }
        >
          <Typography className={classes.transactionText}>
            {compressTxHash(transaction.hash)}
          </Typography>
        </ButtonBase>
      </div>
      <Typography className={classes.transactionTimestamp}>
        {transaction.timestamp}
      </Typography>
    </div>
  );
};

const AccountModal = ({ transactions, open, handleClose }) => {
  const classes = useStyles();
  const context = useWeb3React();
  const { account } = context;

  return (
    <Dialog open={open} onClose={handleClose}>
      <div className={classes.dialogWrapper}>
        <Typography className={classes.title}>Your Account</Typography>
        <ButtonBase
          disableRipple
          onClick={() =>
            window.open(`https://etherscan.com/address/${account}`, "_blank")
          }
        >
          <Typography className={classes.viewEtherscan}>
            View on Etherscan
          </Typography>
        </ButtonBase>
        <div className={classes.dividerContainer}>
          <Divider className={classes.divider} />
        </div>
        {transactions.map(tx => (
          <Transaction transaction={tx} />
        ))}
      </div>
    </Dialog>
  );
};
/*
 */

export default AccountModal;
