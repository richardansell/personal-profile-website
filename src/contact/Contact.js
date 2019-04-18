import React, {Component} from "react";
import {connect} from "react-redux";
import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Fade,
    FormControl,
    FormHelperText,
    Grid,
    Input,
    InputLabel,
    LinearProgress,
    MenuItem,
    Paper,
    Select,
    Slide,
    Typography,
    withStyles,
    withWidth
} from "@material-ui/core";
import {setContactFormStatus, updateContact} from "../redux/actions";
import {isWidthDown} from "@material-ui/core/withWidth";
import * as EmailValidator from "email-validator";
import axios from "axios";

require("dotenv").config();

const styles = theme => ({
    contactDetails: {
        paddingTop: 30,
        textAlign: "center"
    },
    gotcha: {
        display: "none"
    },
    requestCVSelectFormControl: {
        minWidth: 120
    },
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 4,
        paddingBottom: theme.spacing.unit * 4
    }
});

const mapStateToProps = state => {
    return {navigation: state.navigation};
};

const mapDispatchToProps = dispatch => {
    return {
        updateContact: dimensions => dispatch(updateContact(dimensions)),
        setContactFormStatus: status => dispatch(setContactFormStatus(status))
    }
};

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toEmail: "richard.ansell@bath.edu",
            name: "",
            nameHelperError: "",
            nameHelperState: false,
            email: "",
            emailHelperError: "",
            emailHelperState: false,
            message: "",
            messageHelperError: "",
            messageHelperState: false,
            requestCV: false,
            gotcha: "",
            formProgress: false,
        };
        this.contactRef = React.createRef();
        this.resizeEventTimer = null;
    }

    componentDidMount() {
        window.addEventListener("resize", this.resizeEvent);
        window.addEventListener("load", this.setComponentMeasurements);
    }

    resizeEvent = () => {
        clearTimeout(this.resizeEventTimer);
        this.resizeEventTimer = setTimeout(() => {
            this.setComponentMeasurements();
        }, 250);
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.navigation.contactComponent.height !== this.contactRef.current.scrollHeight) this.setComponentMeasurements();
    }

    componentWillUnmount() {
        clearTimeout(this.resizeEventTimer);
        window.removeEventListener("resize", this.resizeEvent);
    }

    setComponentMeasurements = () => {
        const contentStartPoint = isWidthDown("xs", this.props.width) ? 100 : 200;
        const {appBarComponent} = this.props.navigation;
        const height = this.contactRef.current.scrollHeight;
        const distanceToTop = this.contactRef.current.offsetTop + (contentStartPoint - appBarComponent.height);
        this.props.updateContact({height: height, distanceToTop: distanceToTop});
    };

    handleChange = (event, handleInputState) => {
        const target = event.target;
        const name = target.name;
        this.setState({[name]: target.value});
        handleInputState(event);
    };

    handleNameInputState = event => {
        const target = event.target;
        if (target.value === null) return;
        this.setState({
            nameHelperError: target.value.length === 0 ? "Please include your name" : "",
            nameHelperState: target.value.length === 0
        });
    };

    handleEmailInputState = event => {
        const target = event.target;
        if (target.value === null) return;
        this.setState({
            emailHelperError: target.value.length === 0 ? "Please include your email" : !EmailValidator.validate(target.value) ? "Please include a valid email address" : "",
            emailHelperState: target.value.length === 0 ? true : !EmailValidator.validate(target.value)
        });
    };

    handleMessageInputState = event => {
        const target = event.target;
        if (target.value === null) return;
        this.setState({
            messageHelperError: target.value.length === 0 ? "Please include a message" : "",
            messageHelperState: target.value.length === 0
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        const {name, email, message, requestCV, gotcha} = this.state;
        this.setState({formProgress: true}, () => {
            if (gotcha.length === 0) {
                axios.post(
                    process.env.REACT_APP_FORM_POST_URL,
                    {
                        "name": name,
                        "email": email,
                        "message": message,
                        "request CV": requestCV ? "Yes" : "No"
                    },
                    {headers: {"Accept": "application/json"}}
                ).then(() => {
                    this.setState({
                            name: "",
                            nameHelperError: "",
                            nameHelperState: false,
                            email: "",
                            emailHelperError: "",
                            emailHelperState: false,
                            message: "",
                            messageHelperError: "",
                            messageHelperState: false,
                            requestCV: false,
                            gotcha: "",
                            formProgress: false
                        }, () => this.props.setContactFormStatus({error: false, open: true})
                    )
                }).catch(() => this.setState({
                    formProgress: false
                }, () => this.props.setContactFormStatus({error: true, open: true})));
            } else {
                this
                    .setState({
                        name: "",
                        nameHelperError: "",
                        nameHelperState: false,
                        email: "",
                        emailHelperError: "",
                        emailHelperState: false,
                        message: "",
                        messageHelperError: "",
                        messageHelperState: false,
                        requestCV: false,
                        gotcha: "",
                        formProgress: false
                    });
            }
        });
    };

    render() {
        const {name, nameHelperError, nameHelperState, email, emailHelperError, emailHelperState, message, messageHelperError, messageHelperState, requestCV, gotcha, formProgress} = this.state;
        const isEmailValid = EmailValidator.validate(email);
        const {classes} = this.props;
        const widthSmDown = isWidthDown("sm", this.props.width);
        return (
            <div ref={this.contactRef}>

                <Dialog aria-labelledby="form-progress-dialog-title" fullWidth={true}
                        open={formProgress}>
                    <DialogTitle id="form-progress-dialog-title">{"Sending form.."}</DialogTitle>
                    <DialogContent>
                        <LinearProgress/>
                    </DialogContent>
                </Dialog>

                <Grid alignItems="flex-start" container justify="center" spacing={24}>
                    <Grid item md={12} xs={12}>
                        <Fade in={true} timeout={{enter: 3000}}>
                            <Typography color="secondary" gutterBottom
                                        variant={widthSmDown ? "h5" : "h4"}>
                                Contact
                            </Typography>
                        </Fade>
                        <Slide direction="right" in={true} timeout={{enter: 3000}}>
                            <Paper className={classes.paper} square={true}>
                                <Grid container spacing={24}>
                                    <Grid item md={6} xs={12}>
                                        <FormControl aria-describedby="name-error-text" error={nameHelperState}
                                                     fullWidth
                                                     required>
                                            <InputLabel htmlFor="name-input">Name</InputLabel>
                                            <Input id="name-input" name="name"
                                                   onChange={event => this.handleChange(event, this.handleNameInputState)}
                                                   onFocus={this.handleNameInputState} type="text" value={name}/>
                                            <FormHelperText id="name-error-text"
                                                            value={nameHelperError}>{nameHelperError}</FormHelperText>
                                        </FormControl>
                                    </Grid>

                                    <Grid item md={6} xs={12}>
                                        <FormControl aria-describedby="email-error-text" error={emailHelperState}
                                                     fullWidth
                                                     required>
                                            <InputLabel htmlFor="email-input">Email</InputLabel>
                                            <Input id="email-input" name="email"
                                                   onChange={event => this.handleChange(event, this.handleEmailInputState)}
                                                   onFocus={this.handleEmailInputState} type="email" value={email}/>
                                            <FormHelperText id="email-error-text"
                                                            value={emailHelperError}>{emailHelperError}</FormHelperText>
                                        </FormControl>
                                    </Grid>

                                    <Grid item md={12} xs={12}>
                                        <FormControl aria-describedby="message-error-text" error={messageHelperState}
                                                     fullWidth
                                                     required>
                                            <InputLabel htmlFor="message-input">Message</InputLabel>
                                            <Input id="message-input" multiline name="message"
                                                   onChange={event => this.handleChange(event, this.handleMessageInputState)}
                                                   onFocus={this.handleMessageInputState} rows={3} type="text"
                                                   value={message}/>
                                            <FormHelperText id="message-error-text"
                                                            value={messageHelperError}>{messageHelperError}</FormHelperText>
                                        </FormControl>
                                    </Grid>

                                    <Grid item md={12} xs={12}>
                                        <FormControl className={classes.requestCVSelectFormControl}>
                                            <InputLabel htmlFor="request-cv">Request CV</InputLabel>
                                            <Select
                                                value={requestCV}
                                                onChange={event => this.setState({requestCV: event.target.value})}
                                                inputProps={{id: "request-cv"}}>
                                                <MenuItem value={true}>Yes</MenuItem>
                                                <MenuItem value={false}>No</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    <Grid item md={12} xs={12}>
                                        <input className={classes.gotcha} name="_gotcha" onChange={this.handleChange}
                                               type="text"
                                               value={gotcha}/>
                                        <Button color="primary"
                                                disabled={name.length === 0 || email.length === 0 || !isEmailValid || message.length === 0}
                                                size="large" onClick={this.handleSubmit} variant="contained">
                                            Send
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Slide>
                    </Grid>
                </Grid>
            </div>
        );
    }

}

export default withWidth()(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Contact)));