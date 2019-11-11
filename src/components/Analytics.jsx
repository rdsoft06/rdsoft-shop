import { Component } from 'react';
import { initialize, pageview } from 'react-ga';
import { withRouter } from 'react-router-dom';


initialize('UA-97489509-8');
pageview(window.location.pathname + window.location.search);

class Analytics extends Component {
    timeout;

    componentDidMount() {
        const { history } = this.props;

        this.stop = history.listen(() => {
            clearTimeout(this.timeout);

            this.timeout = setTimeout(() => {
                pageview(window.location.pathname + window.location.search);
            }, 300);
        });
    }

    componentWillUnmount() {
        this.stop();
    }

    stop = () => {};

    render = () => null;
}

export default withRouter(Analytics);
