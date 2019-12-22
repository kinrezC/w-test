import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  mainContent: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  mainWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 43,
    maxWidth: 556,
    width: "38%"
  },
  title: {
    fontFamily: "Rubik",
    opacity: 0.75,
    fontSize: 32
  },
  subtitle: {
    marginTop: 35,
    fontFamily: "Rubik",
    fontSize: 18,
    color: "#838383",
    opacity: 0.75
  },
  ethMargin: {
    marginTop: 23
  },
  wethMargin: {
    marginTop: 8
  },
  divider: {
    width: "100%",
    marginTop: 27
  },
  instructions: {
    marginTop: 33,
    fontFamily: "Rubik",
    fontSize: 14,
    opacity: 0.25,
    fontWeight: 300
  },
  optionsContainer: {
    marginTop: 33,
    height: 40,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  optionBase: {
    height: "100%",
    width: "100%",
    boxShadow: "3px 9px 15px 0 rgba(0, 0, 0, 0.07)",
    borderRadius: 2,
    "&:hover": {
      border: "1px solid #dddddd"
    }
  },
  optionSelected: {
    backgroundColor: "#0bd080"
  },
  optionTextBase: {
    fontFamily: "Rubik",
    fontSize: 14,
    fontWeight: 300
  },
  optionTextSelected: {
    color: "#ffffff"
  },
  optionTextDeselected: {
    color: "#4a4a4a"
  },
  wrapText: {
    color: "#ffffff"
  },
  wrapButton: {
    backgroundColor: "#0bd080",
    "&:hover": {
      border: "1px solid #dddddd"
    }
  }
});

export default useStyles;
