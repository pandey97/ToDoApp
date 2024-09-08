import debounce from "lodash.debounce";
import React from "react";

export const debounceHOC = (WrappedComponent: React.ComponentType<any>) => {
    class Debounce extends React.PureComponent<any> {
        private debouncedOnPress = debounce(async () => {
            if (this.props.onPress) {
                await this.props.onPress();
            }
        }, 300, {
            leading: true,
            trailing: false,
        });
      static displayName: string;

        render() {
            return <WrappedComponent {...this.props} onPress={this.debouncedOnPress} />;
        }
    }

    Debounce.displayName = `debounceHOC(${WrappedComponent.displayName || WrappedComponent.name})`;
    return Debounce;
};
