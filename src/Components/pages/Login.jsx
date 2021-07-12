import { Grid, Paper, Typography, TextField, Button, Link } from "@material-ui/core";
import React from "react";
import "../Css/login.css";

const Login = () => {
    return (
        <>
            <div>
                <Grid container>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" direction="row">
                            <Paper variant="outlined" elevation={0} className="from-paper">
                                <Typography
                                    variant="h4"
                                    component="h4"
                                    className="typograph_title"
                                >
                                    Login
                                </Typography>

                                <Grid item>
                                    <Grid container direction="column">
                                        <form>
                                            <Grid item className="email-grid-item">
                                                <TextField
                                                    id="email_address"
                                                    placeholder="Enter Email Address"
                                                    type="email"
                                                    variant="outlined"
                                                    className="form_input"
                                                />
                                            </Grid>

                                            <Grid item>
                                                <TextField
                                                    id="password"
                                                    placeholder="Enter Password"
                                                    label="Password"
                                                    type="password"
                                                    variant="outlined"
                                                    className="form_input"
                                                />
                                            </Grid>

                                            <Grid item>
                                                <Button variant="contained" color="primary" className="login_btn">
                                                    Login
                                                </Button>

                                                <Typography style={{ marginTop: "20px" }}>
                                                    <Link hre="#"  >
                                                        forget password ?
                                                    </Link>
                                                </Typography>
                                            </Grid>
                                        </form>
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

export default Login;
