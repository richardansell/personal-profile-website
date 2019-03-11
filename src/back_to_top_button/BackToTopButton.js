import React, {Component} from 'react';
import {Fab, Tooltip, withStyles, Zoom} from "@material-ui/core";
import UpChevronIcon from "@material-ui/icons/ExpandLess";

const styles = () => ({
    backToTopIconHover: {
        '&:hover': {
            color: "#fff"
        }
    },
    backToTopButtonReveal: {
        bottom: "20px",
        position: "fixed",
        right: "20px",
        zIndex: "99"
    }
});

class BackToTopButton extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        clearTimeout(this.scrollTimer);
        window.removeEventListener('scroll', this.handleScroll);
    }

    constructor(props) {
        super(props);
        this.state = {
            previousScrollPoint: 0,
            showBackToTopButton: false
        };
        this.scrollTimer = null;
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

    backToTop = () => {
        this.setState({showBackToTopButton: false}, () => {
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        });
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.backToTopButtonReveal}
                 style={{display: this.state.showBackToTopButton ? "block" : "none"}}>
                <Zoom in={this.state.showBackToTopButton}>
                    <Tooltip aria-label="Back to top" title="Back to top">
                        <Fab aria-label="Back to top" className={classes.backToTopIconHover} color="primary"
                             onClick={this.backToTop}>
                            <UpChevronIcon/>
                        </Fab>
                    </Tooltip>
                </Zoom>
            </div>
        )
    }

}

export default withStyles(styles)(BackToTopButton);