import React, {Component} from "react";
import {Snackbar, SnackbarContent, Typography} from "@material-ui/core";
import {connect} from "react-redux";
import {setActionMessage} from "../redux/actions";

export const actionMessageType = {COPY: "Yes", LEARN_MORE: "Learn more", OK: "Ok", VISIT: "Visit"};

const mapDispatchToProps = dispatch => {
    return {setActionMessage: messageContent => dispatch(setActionMessage(messageContent))}
};

class ActionMessage extends Component {

    handleAction = (actionMessage, copyText, link) => {
        const {COPY, LEARN_MORE, OK, VISIT} = actionMessageType;
        switch (actionMessage) {
            case OK:
            case LEARN_MORE:
            case VISIT:
                window.open(link, "", "", false);
                break;
            case COPY:
                const tempTextArea = document.createElement("textarea");
                tempTextArea.innerText = copyText;
                document.body.appendChild(tempTextArea);
                tempTextArea.select();
                document.execCommand("copy");
                tempTextArea.remove();
                break;
            default:
                break;
        }
        this.clearActionMessage();
    };

    clearActionMessage = () => this.props.setActionMessage({
        actionMessageType: "",
        copyText: "",
        link: "",
        message: "",
        open: false
    });

    render() {
        const {actionMessageType, copyText, link, message, open} = this.props;
        return (
            <Snackbar
                autoHideDuration={5000}
                ClickAwayListenerProps={{onClickAway: this.clearActionMessage}}
                ContentProps={{"aria-describedby": "action-message-snackbar-id"}}
                onClose={this.clearActionMessage}
                open={open}
            >
                <SnackbarContent
                    action={
                        <Typography color="inherit" onClick={() => this.handleAction(actionMessageType, copyText, link)}
                                    style={{cursor: "pointer"}} variant="overline">
                            {actionMessageType}
                        </Typography>
                    }
                    aria-describedby="action-message-snackbar-id"
                    message={
                        <Typography color="inherit" id="action-message-snackbar-id" variant="caption">
                            {message}
                        </Typography>
                    }
                    square={true}
                />
            </Snackbar>
        )
    }

}

export default connect(null, mapDispatchToProps)(ActionMessage);