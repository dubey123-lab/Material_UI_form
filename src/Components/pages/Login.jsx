import { Grid, Paper, Typography, TextField, Button, Link, Box } from "@material-ui/core";
import React from "react";
import "../Css/login.css";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    subtitle2: {
        fontWeight: 700
    },
    paper: {
        height: 550,
        width: 355
    },
    item: {
        marginLeft: 65
    },
    root: {
        width: 200,

    },
    loginbtn: {
        width: 225
    }

})

const Login = () => {

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
                                        variant="h4"
                                        component="h4"
                                        className="typograph_title"
                                    >
                                        Login
                                    </Typography>

                                    <Grid item>

                                        <form>
                                            <Grid item className={classes.item}>
                                                <Box mt={5} >
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

                                                />
                                            </Grid>



                                            <Grid item className={classes.item}>
                                                <Box mt={2}>
                                                    <Typography
                                                        variant="subtitle2"
                                                        className={classes.subtitle2}
                                                    >
                                                        Enter Password
                                                    </Typography>
                                                </Box>

                                                <TextField
                                                    id="outlined-basic"
                                                    variant="outlined"
                                                    size="small"

                                                />
                                            </Grid>



                                            <Grid item className={classes.item}>
                                                <Box mt={5} >
                                                    <Button variant="contained" color="primary" className={classes.loginbtn}>
                                                        Login
                                                    </Button>

                                                </Box>


                                            </Grid>

                                            <Grid item>

                                                <Typography style={{ marginTop: "20px", textAlign: "center" }}>
                                                    <Link hre="#"  >
                                                        Forget password ?
                                                    </Link>
                                                </Typography>
                                            </Grid>
                                        </form>
                                    </Grid>

                                </Paper>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </div >
        </>
    );
};

export default Login;
