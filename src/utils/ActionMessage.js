import React, {Component} from 'react';
import {Button, Fade, Snackbar} from "@material-ui/core";
import {connect} from "react-redux";
import {setActionMessage} from "../redux/actions";

export const actionMessageType = {VISIT: "Visit", COPY: "Ok", LEARN_MORE: "Learn more"};

const mapDispatchToProps = dispatch => {
    return {setActionMessage: messageContent => dispatch(setActionMessage(messageContent))}
};

class ActionMessage extends Component {

    handleAction = (actionMessage, copyText, link) => {
        const {VISIT, COPY, LEARN_MORE} = actionMessageType;
        switch (actionMessage) {
            case VISIT:
            case LEARN_MORE:
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
                action={
                    <Button color="inherit" size="small"
                            onClick={() => this.handleAction(actionMessageType, copyText, link)}>
                        {actionMessageType}
                    </Button>
                }
                ClickAwayListenerProps={{onClickAway: this.clearActionMessage}}
                ContentProps={{"aria-describedby": "snackbar-fab-message-id"}}
                message={<span id="snackbar-message-id">{message}</span>}
                open={open}
                TransitionComponent={Fade}
            />
        )
    }

}

export default connect(null, mapDispatchToProps)(ActionMessage);