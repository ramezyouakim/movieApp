import React, { PureComponent } from "react";
import { Text } from 'react-native';

class ErrorBoundary extends PureComponent {
    state = {
        hasError: false
    };

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <Text>Sorry.. there was an error</Text>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;