import React from "react";
import "../Css/jobprefer.css";
import {
    Grid,
    Paper,
    Typography,
    TextField,
    Button,
    FormControl,
    Box,
} from "@material-ui/core";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    subtitle2: {
        fontWeight: 700
    },
    paper: {
        height: 550,

    },
    item: {
        marginLeft: 38
    },
    root: {
        width: 200,

    },
    formCantrol: {
        width: 257,
        paddingTop: 6

    },
    icon: {
        paddingTop: 80,
        marginLeft: 40,
        color: "blue"
    },
    link: {
        paddingTop: 80,

    }


})

const JobPrefrence = () => {
    const classes = useStyles();
    return (
        <>
            <div>
                <Grid container>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" direction="row">
                            <Paper
                                variant="outlined"
                                elevation={0}
                                style={{ width: "600px", height: "800px", marginTop: "80px" }}
                            >


                                <Typography
                                    variant="h4"
                                    component="h4"
                                    className="typograph_title"
                                >
                                    Step 2/3 : Specify Job Prefrence
                                </Typography>



                                <Grid item className="location_dropdown" >
                                    <Box mt={5}>
                                        <Typography variant="subtitle2" className={classes.subtitle2}>
                                            Where are you currently located ?
                                        </Typography>
                                    </Box>

                                    <FormControl
                                        variant="outlined"
                                        size="small"
                                        className={classes.formCantrol}
                                    // style={{ minWidth: "280px", paddingTop: "6px" }}
                                    >

                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={1}>Surat</MenuItem>
                                            <MenuItem value={2}>Mumbai</MenuItem>
                                            <MenuItem value={3}>Valsad</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>


                                <Grid item className={classes.item}>
                                    <Box marginTop={2}>
                                        <Typography
                                            variant="subtitle2"
                                            className={classes.subtitle2}
                                        >
                                            Where are you open to working?
                                        </Typography>
                                    </Box>

                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        size="small"
                                        inputProps={{ style: { width: 228 } }}

                                    />
                                </Grid>

                                <Grid item className={classes.item}>
                                    <Box marginTop={2}>
                                        <Typography
                                            variant="subtitle2"
                                            className={classes.subtitle2}
                                        >
                                            What your current annual salary ?
                                        </Typography>
                                    </Box>

                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        size="small"
                                        inputProps={{ style: { width: 228 } }}

                                    />
                                </Grid>

                                <Grid item className="location_dropdown" >
                                    <Box mt={2}>
                                        <Typography variant="subtitle2" className={classes.subtitle2}>
                                            What is your noticed period ?
                                        </Typography>
                                    </Box>

                                    <FormControl
                                        variant="outlined"
                                        size="small"
                                        className={classes.formCantrol}
                                    // style={{ minWidth: "280px", paddingTop: "6px" }}
                                    >
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={1}>1 Month</MenuItem>
                                            <MenuItem value={2}>2 Month</MenuItem>
                                            <MenuItem value={3}>3 Month</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid container direction="row">
                                    <Grid item className={classes.icon} >
                                        <KeyboardBackspaceIcon />
                                    </Grid>

                                    <Grid item className={classes.link}>
                                        <NavLink to="/job">
                                            Back
                                        </NavLink>
                                    </Grid>


                                    <Grid item style={{ marginLeft: "auto", paddingTop: 80, marginRight: 40 }}>
                                        <Button variant="contained" color="primary" >
                                            <NavLink to="/upload_resume" style={{ textDecoration: "none", color: "white" }}>
                                                Next
                                            </NavLink>
                                        </Button>
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

export default JobPrefrence;
