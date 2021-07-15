import React from "react";
import "../Css/skillform.css";
import {
    Grid,
    Paper,
    Typography,
    TextField,
    Button,
    FormControl,
    Box,
    InputAdornment,
    OutlinedInput,
    IconButton,
} from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import DeleteIcon from "@material-ui/icons/Delete";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";


const useStyles = makeStyles({
    label: {
        fontWeight: "bold",
        marginBottom: 5,
    },

    buttonContainer: {
        display: 'flex',
        marginRight: 40
    }
});

const AddSkillForm = () => {
    const classes = useStyles();

    return (
        <>
            <div>
                <Grid container>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" direction="row">
                            <Paper variant="outlined" elevation={0} className="addfrom-paper">
                                <Grid item>
                                    <Typography
                                        variant="h4"
                                        component="h4"
                                        className="skill_form_titile"
                                    >
                                        Step 1/3 : Add Your Skills
                                    </Typography>
                                </Grid>

                                <Grid item>
                                    <Grid container direction="column">
                                        <form>
                                            <Box ml={3} mt={6}>
                                                {" "}
                                                <Grid item>
                                                    <FormControl component="fieldset">
                                                        <Typography
                                                            variant="subtitle2"
                                                            className={classes.label}
                                                        >
                                                            Are You a working professional or fresher?
                                                        </Typography>
                                                        <RadioGroup>
                                                            <FormControlLabel
                                                                value="professional"
                                                                control={<Radio />}
                                                                label="I am a working professonal"
                                                            />
                                                            <FormControlLabel
                                                                value="fresher"
                                                                control={<Radio />}
                                                                label="I am a fresher"
                                                            />
                                                        </RadioGroup>
                                                    </FormControl>
                                                </Grid>
                                            </Box>

                                            <Grid item>
                                                <Box mt={2} ml={3}>
                                                    <Typography
                                                        variant="subtitle2"
                                                        className={classes.label}
                                                    >
                                                        How Many Years of experience do you have ? Dont't
                                                        include internships
                                                    </Typography>
                                                    <FormControl variant="outlined">
                                                        <OutlinedInput
                                                            id="outlined-adornment-weight"
                                                            placeholder="e.g, 2.4"
                                                            endAdornment={
                                                                <InputAdornment position="end">
                                                                    Years
                                                                </InputAdornment>
                                                            }
                                                            aria-describedby="outlined-weight-helper-text"
                                                            inputProps={{
                                                                "aria-label": "experience",
                                                            }}
                                                            labelWidth={0}
                                                        />
                                                    </FormControl>
                                                </Box>
                                            </Grid>

                                            <Grid item>
                                                <Box mt={2} ml={3}>
                                                    <FormControl variant="outlined">
                                                        <Typography
                                                            variant="subtitle2"
                                                            className={classes.label}
                                                        >
                                                            Select Your Current role :
                                                        </Typography>
                                                        <Select
                                                            labelId="demo-controlled-open-select-label"
                                                            id="demo-controlled-open-select"
                                                        >
                                                            <MenuItem value={10}>
                                                                Full-Stack Developer
                                                            </MenuItem>
                                                            <MenuItem value={20}>React Developer</MenuItem>
                                                            <MenuItem value={30}>NodeJs Developer</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Box>
                                            </Grid>

                                            <Grid item>
                                                <Box mt={2} ml={3}>
                                                    <Typography
                                                        variant="subtitle2"
                                                        className={classes.label}
                                                    >
                                                        Add up to 4 skills and how much expertise you have
                                                        with each.
                                                    </Typography>

                                                    <Grid
                                                        container
                                                        spacing={2}
                                                        justifyContent="space-between"
                                                    >
                                                        <Grid item xs={5}>
                                                            <TextField
                                                                fullWidth
                                                                required
                                                                placeholder="Skill"
                                                                type="text"
                                                                size="medium"
                                                                variant="outlined"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={5}>
                                                            <FormControl fullWidth variant="outlined">
                                                                <Select
                                                                    labelId="expertiseOptions"
                                                                    id="expertise"
                                                                >
                                                                    <MenuItem value="">
                                                                        <em>None</em>
                                                                    </MenuItem>
                                                                    <MenuItem value={1}>Fresher</MenuItem>
                                                                    <MenuItem value={2}>Fresher</MenuItem>
                                                                    <MenuItem value={3}>Fresher</MenuItem>
                                                                </Select>
                                                            </FormControl>
                                                        </Grid>
                                                        <Grid xs={2}>
                                                            <IconButton color="secondary">
                                                                <DeleteIcon />
                                                            </IconButton>
                                                        </Grid>
                                                    </Grid>

                                                    <Box my={2}>
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                            startIcon={<AddIcon />}
                                                        >
                                                            Add Skill
                                                        </Button>
                                                    </Box>
                                                    <Grid item>
                                                        <Box mt={4} justifyContent="flex-end" className={classes.buttonContainer}>
                                                            <Button variant="contained" color="primary">
                                                                <NavLink to="/job_pefrence" style={{ textDecoration: "none", color: "white" }}>
                                                                    Next
                                                                </NavLink>
                                                            </Button>

                                                        </Box>
                                                    </Grid>
                                                </Box>
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
