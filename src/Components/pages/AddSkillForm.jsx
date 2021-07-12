import React from "react";
import "../Css/skillform.css";
import {
    Grid,
    Paper,
    Typography,
    TextField,
    Button,
    Link,
    FormControl,
} from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import FormLabel from "@material-ui/core/FormLabel";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";


const AddSkillForm = () => {
    return (
        <>
            <div>
                <Grid container>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" direction="row">
                            <Paper variant="outlined" elevation={0} className="addfrom-paper">
                                <Typography
                                    variant="h4"
                                    component="h4"
                                    className="skill_form_titile"
                                >
                                    Step 1/3 : Add Your Skills
                                </Typography>

                                <Grid item>
                                    <Grid container direction="column">
                                        <form>
                                            <Grid item className="column_radio_btn">
                                                <FormControl component="fieldset">
                                                    <FormLabel
                                                        component="legend"
                                                        style={{ paddingTop: "30px" }}
                                                    >
                                                        Are You a working professional or fresher
                                                    </FormLabel>
                                                    <RadioGroup style={{ paddingTop: "10px" }}>
                                                        <FormControlLabel
                                                            value="i am a working professonal"
                                                            control={<Radio />}
                                                            label="i am a working professonal"
                                                            className="radio_btn"
                                                        />
                                                        <FormControlLabel
                                                            value="i am a fresher"
                                                            control={<Radio />}
                                                            label=" i am a fresher"
                                                        />
                                                    </RadioGroup>
                                                </FormControl>
                                            </Grid>

                                            <Grid item>
                                                <Typography variant="p" component="p">
                                                    How Many Years of experience do you have ? Dont't
                                                    include Internships
                                                </Typography>
                                                <TextField
                                                    id="outlined-basic"
                                                    variant="outlined"
                                                    size="small"
                                                // style={{ width: "290px", paddingTop: "10px" }}
                                                />
                                            </Grid>

                                            <Grid item>
                                                <Typography variant="p" component="p">
                                                    Select Your Current role :
                                                </Typography>
                                                <Select
                                                    labelId="demo-controlled-open-select-label"
                                                    id="demo-controlled-open-select"

                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                            </Grid>

                                            <Grid item>


                                                {/* <Button variant="contained" color="primary" className="login_btn">
                                                    Login
                                                </Button> */}

                                                {/* <Typography style={{ marginTop: "20px" }}>
                                                    <Link hre="#"  >
                                                        forget password ?
                                                    </Link>
                                                </Typography> */}
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

export default AddSkillForm;
