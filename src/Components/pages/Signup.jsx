import React from "react";
import {
    Grid,
    Paper,
    Typography,
    TextField,
    Button,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
    Box
} from "@material-ui/core";
import "../Css/signup.css";
import { makeStyles } from '@material-ui/core/styles';
import OtpInput from 'react-otp-input';



const useStyles = makeStyles({
    subtitle2: {
        fontWeight: 700
    },
    paper: {
        height: 600,

    },
    item: {
        marginLeft: 35
    },
    root: {
        width: 200,

    },
    otpContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    otpbtn: {

        marginLeft: 20

    }

})

const Signup = () => {

    const classes = useStyles();


    return (
        <>
            <div>
                <Grid container>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" direction="row">
                            <Box mt={5}>
                                <Paper variant="outlined" className={classes.paper}>
                                    <Typography
                                        variant="h3"
                                        component="h3"
                                        className="signup_title"
                                    >
                                        SignUp
                                    </Typography>


                                    <Grid item >
                                        <Grid item className={classes.item}>
                                            <Box marginRight={7.5} mt={4}  >

                                                <Typography
                                                    variant="subtitle2"
                                                    className={classes.subtitle2}
                                                >
                                                    Are You a Recuiter or Job Seeker ?
                                                </Typography>
                                                <FormControl>
                                                    <RadioGroup
                                                        row
                                                        aria-label="position"
                                                        name="position"
                                                        defaultValue="Job Seeker"
                                                    >
                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Radio color="primary" />}
                                                            label="Job Seeker"
                                                        />

                                                        <FormControlLabel
                                                            value="end"
                                                            control={<Radio color="primary" />}
                                                            label="Recruiter"
                                                        />
                                                    </RadioGroup>
                                                </FormControl>
                                            </Box>
                                        </Grid>

                                        <Grid item className={classes.item}>
                                            <Box >
                                                <Typography
                                                    variant="subtitle2"
                                                    className={classes.subtitle2}
                                                >
                                                    Name
                                                </Typography>
                                            </Box>

                                            <TextField
                                                id="outlined-basic"
                                                variant="outlined"
                                                size="small"
                                                inputProps={{ style: { width: 235 } }}
                                            />
                                        </Grid>

                                        <Grid item className={classes.item}>
                                            <Box marginTop={2}>
                                                <Typography
                                                    variant="subtitle2"
                                                    className={classes.subtitle2}
                                                >
                                                    Email Address
                                                </Typography>
                                            </Box>

                                            <TextField
                                                id="outlined-basic"
                                                variant="outlined"
                                                size="small"
                                                inputProps={{ style: { width: 235 } }}

                                            />
                                        </Grid>

                                        <Grid item className={classes.item}>
                                            <Box marginTop={2}>
                                                <Typography
                                                    variant="subtitle2"
                                                    className={classes.subtitle2}
                                                >
                                                    Password
                                                </Typography>
                                            </Box>

                                            <TextField
                                                id="outlined-basic"
                                                variant="outlined"
                                                size="small"
                                                inputProps={{ style: { width: 235 } }}
                                            />
                                        </Grid>

                                    </Grid>

                                    <Box mt={3} ml={8}>
                                        <Button variant="contained" color="primary"
                                            classes={{
                                                root: classes.root
                                            }}

                                        >
                                            sign up
                                        </Button>
                                    </Box>


                                    <Grid item>
                                        <Box mt={2} className={classes.otpContainer}>
                                            <OtpInput
                                                inputStyle='inputStyle'
                                                numInputs={4}
                                                separator={<span> -</span>}
                                                inputStyle={{
                                                    width: 32,
                                                    height: 25
                                                }}

                                            />
                                            <Button variant="contained" color="primary" className={classes.otpbtn}>
                                                Verify
                                            </Button>
                                        </Box>
                                    </Grid>

                                </Paper>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default Signup;
