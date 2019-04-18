import React, {Component} from "react";
import {connect} from "react-redux";
import {Fab, withStyles, Zoom} from "@material-ui/core";
import UpChevronIcon from "@material-ui/icons/ExpandLess";

const styles = () => ({
    backToTopIconHover: {
        "&:hover": {
            color: "#fff"
        }
    },
    backToTopButton: {
        bottom: 12,
        position: "fixed",
        right: "15px",
        zIndex: "99"
    }
});

const mapStateToProps = state => {
    return {
        actionMessageIsOpen: state.actionMessage.actionMessageContent.open,
        contactFormStatusIsOpen: state.contactFormStatus.contactFormStatusContent.open
    };
};

class BackToTopButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            previousScrollPoint: 0,
            showBackToTopButton: false
        };
        this.scrollTimer = null;
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        clearTimeout(this.scrollTimer);
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        clearTimeout(this.scrollTimer);
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > this.state.previousScrollPoint) {
            this.setState({showBackToTopButton: true})
        } else {
            this.setState({showBackToTopButton: false}, () => {
                this.scrollTimer = setTimeout(() => {
                    this.setState({showBackToTopButton: scrollTop !== 0})
                }, 10);
            });
        }
        this.setState({previousScrollPoint: scrollTop <= 0 ? 0 : scrollTop});
    };

    backToTop = () => window.scrollTo({top: 0, left: 0, behavior: "smooth"});

    render() {
        const {classes, actionMessageIsOpen, contactFormStatusIsOpen} = this.props;
        const {showBackToTopButton} = this.state;
        const isSnackbarFullWidth = window.innerWidth < 768;
        return (
            <div className={classes.backToTopButton}>
                <Zoom
                    in={isSnackbarFullWidth && showBackToTopButton && !contactFormStatusIsOpen && !actionMessageIsOpen ? true : !isSnackbarFullWidth && showBackToTopButton}>
                    <Fab aria-label="Back to top" className={classes.backToTopIconHover} color="primary"
                         onClick={this.backToTop} size="medium">
                        <UpChevronIcon/>
                    </Fab>
                </Zoom>
            </div>
        )
    }

}

export default withStyles(styles)(connect(mapStateToProps)(BackToTopButton));