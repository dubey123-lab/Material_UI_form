import React from "react";
import {
    Grid,
    Paper,
    Typography,
    TextField,
    Button,
    Link,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
} from "@material-ui/core";
import "../Css/signup.css";

const Signup = () => {
    return (
        <>
            <div>
                <Grid container>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" direction="row">
                            <Paper variant="outlined" elevation={0} className="signup-paper">
                                <Typography
                                    variant="h3"
                                    component="h3"
                                    className="signup_title"
                                >
                                    SignUp
                                </Typography>

                                <Grid item>
                                    <Grid container direction="column">
                                        <Grid item className="radio_btn_grid_item">
                                            <Typography variant="h6" component="h6" className="radio_btn_title">
                                                Are You a Recuiter or Job Seeker ?
                                            </Typography>
                                            <FormControl>
                                                <RadioGroup row aria-label="position" name="position" defaultValue="Job Seeker">
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
                                        </Grid>

                                        <Grid item className="name_grid_item">
                                            <Typography variant="p" component="p" className="input_filed_labels">
                                                Name
                                            </Typography>
                                            <TextField id="outlined-basic" variant="outlined" size="small" style={{ width: "290px", paddingTop: "10px" }} />
                                        </Grid>
                                        <Grid item className="name_grid_item">
                                            <Typography variant="p" component="p" className="input_filed_labels">
                                                Email Address
                                            </Typography>
                                            <TextField id="outlined-basic" variant="outlined" size="small" style={{ width: "290px", paddingTop: "10px" }} />
                                        </Grid>
                                        <Grid item className="name_grid_item">
                                            <Typography variant="p" component="p" className="input_filed_labels">
                                                Password
                                            </Typography>
                                            <TextField id="outlined-basic" variant="outlined" size="small" style={{ width: "290px", paddingTop: "10px" }} />
                                        </Grid>
                                    </Grid>

                                    <Grid item className="signup_btn">
                                        <Button variant="contained" color="primary" style={{ width: "200px" }}>
                                            Sign Up
                                        </Button>
                                    </Grid>

                                    <Grid container direction="row">
                                        <Grid item style={{ padding: "50px" }}>
                                            <TextField id="outlined-basic" size="small" variant="outlined" className="otp_text_filed" />
                                            <TextField id="outlined-basic" size="small" variant="outlined" className="otp_text_filed" />
                                            <TextField id="outlined-basic" size="small" variant="outlined" className="otp_text_filed" />
                                            <TextField id="outlined-basic" size="small" variant="outlined" className="otp_text_filed" />
                                            <Button variant="contained" color="primary" style={{ marginLeft: "20px" }} >
                                                Submit
                                            </Button>
                                        </Grid>

                                    </Grid>

                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default Signup;
