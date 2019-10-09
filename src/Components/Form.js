import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import backgroundLogin from "../images/Background/bynk.png";
import { connect } from "react-redux";
import { addUserData, getUserData } from "../actions";
import { verifyEmail, verifyPhoneNumber, verifySSN } from "../utils/Validation";
import SweetAlert from "react-bootstrap-sweetalert";

const styles = {
  paperContainer: {
    flex: 1,
    backgroundImage: `url(${backgroundLogin})`,
    width: "100%",
    height: "690px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }
};

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function Form(props) {
  props.getUserData();
  const classes = useStyles();
  // const SweetAlert = require("react-bootstrap-sweetalert");
  const [values, setValues] = React.useState({
    ssn: "",
    number: "",
    email: ""
  });
  const [emailError, setEmailError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [ssnError, setSsnError] = useState(false);
  const emailErrorText = "Your email field is empty/invalid";
  const numberErrorText =
    "Your Phone number is invalid. Please type valid swedish Phone Number i.e. +46 x xxx xxx xx || xx-xxx xxx xx || xxxx-xxx xx";
  const ssnErrorText =
    "Your SSN is invalid. Please type valid swedish SSN i.e. xxxxxxxx-xxxx";
  const [swAlertOk, setSwAlertOk] = useState(null);
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const validateForm = async () => {
    // let error = false;
    let error = false;

    //----------------Validate Email--------------------//
    if (values.email === "") {
      setEmailError(true);
      error = true;
    } else {
      setEmailError(false);
    }
    if (values.email !== "") {
      if (verifyEmail(values.email) === false) {
        setEmailError(true);
        error = true;
      } else {
        setEmailError(false);
      }
    }
    //----------------Validate Phone Number--------------------//
    if (values.number === "") {
      setNumberError(true);
      error = true;
    } else {
      setNumberError(false);
    }
    if (values.number !== "") {
      if (verifyPhoneNumber(values.number) === false) {
        setNumberError(true);
        error = true;
      } else {
        setNumberError(false);
      }
    }

    //----------------Validate SSN--------------------//
    if (values.ssn === "") {
      setSsnError(true);
      error = true;
    } else {
      setSsnError(false);
    }
    if (values.ssn !== "") {
      if (verifySSN(values.ssn) === false) {
        setSsnError(true);
        error = true;
      } else {
        setSsnError(false);
      }
    }

    return error;
  };
  const htmlalert = async () => {
    /*............................................*/
    return setSwAlertOk(
      <SweetAlert
        success
        style={{ display: "block", marginTop: "-100px" }}
        title="Form Details"
        onConfirm={() => setSwAlertOk(null)}
        confirmBtnStyle={{
          height: 40,
          width: 85,
          backgroundColor: "green",
          color: "#fff",
          borderRadius: 2.5,
          borderRadiusColor: "green"
        }}
      >
        Your Changes Updated Successfully !
      </SweetAlert>,
      //---after successful submit emptying fields----
      setValues({ ssn: "", number: "", email: "" })
    );
  };
  const handlSubmit = async e => {
    e.preventDefault();
    /*...........checking Form Validation..........*/
    let errorvalidateForm = await validateForm();
    /*............................................*/
    if (errorvalidateForm === false) {
      props.addUserData(values);
      htmlalert();
    }
  };
  console.log(props.countries);
  return (
    <div className={classes.root} style={styles.paperContainer}>
      <div style={{ paddingTop: 80 }}>
        <Container
          component="main"
          maxWidth="xs"
          style={{
            backgroundColor: "#fff",
            borderRadius: "2.5%",
            opacity: 0.9
          }}
        >
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h4" style={{ paddingTop: 20 }}>
              React Developer Coding Exercise
            </Typography>
            {swAlertOk}
            <form className={classes.form} noValidate>
              <TextField
                id="ssn"
                label="Social Security Number"
                required
                fullWidth={true}
                value={values.ssn}
                onChange={handleChange("ssn")}
                margin="normal"
                variant="outlined"
              />
              {ssnError && (
                <span style={{ fontSize: 12, color: "red" }}>
                  {ssnErrorText}
                </span>
              )}
              <TextField
                id="phno"
                label="Phone Number"
                required
                fullWidth
                value={values.number}
                onChange={handleChange("number")}
                margin="normal"
                variant="outlined"
              />
              {numberError && (
                <span style={{ fontSize: 12, color: "red" }}>
                  {numberErrorText}
                </span>
              )}
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth={true}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={values.email}
                onChange={handleChange("email")}
                autoFocus
              />
              {emailError && (
                <span style={{ fontSize: 12, color: "red" }}>
                  {emailErrorText}
                </span>
              )}

              <TextField
                id="outlined-select-currency-native"
                select
                fullWidth={true}
                //label="Country List"
                className={classes.textField}
                value={values.currency}
                onChange={handleChange("currency")}
                SelectProps={{
                  native: true,
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                helperText="Please select Country"
                margin="normal"
                variant="outlined"
              >
                {props.countries.map(option => (
                  <option key={option.name} value={option.name}>
                    {option.name}
                  </option>
                ))}
              </TextField>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handlSubmit}
              >
                Submit
              </Button>
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
}
const mapToState = state => {
  return {
    data: state.userData,
    countries: state.userData.countries
  };
};
export default connect(
  mapToState,
  { addUserData, getUserData }
)(Form);
