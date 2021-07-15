import React from 'react'
import {
    Grid,
    Paper,
    Typography,
    Button,
    Box,
} from "@material-ui/core";
import { DropzoneArea } from 'material-ui-dropzone';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    icon: {
        paddingTop: 80,
        marginLeft: 40,
        color: "blue"
    },
    link: {
        paddingTop: 80,

    }


})

const UploadResume = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" direction="row">
                        <Paper
                            variant="outlined"
                            elevation={0}
                            style={{ width: "600px", height: "600px", marginTop: "80px" }}
                        >

                            <Grid item>

                                <Typography
                                    variant="h4"
                                    component="h4"
                                    className="typograph_title"
                                >
                                    Step 3/3 : Upload Resume
                                </Typography>
                                <DropzoneArea />

                            </Grid>

                            <Grid item>
                                <Box mt={3} textAlign="center"  >
                                    <Button variant="contained" color="primary"  >
                                        Upload File
                                    </Button>
                                </Box>
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
                                            Finish
                                        </NavLink>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default UploadResume
