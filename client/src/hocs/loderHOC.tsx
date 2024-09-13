import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const withLoader = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    return (props: P & { loading: boolean }) => {
        return (
            <>
                <WrappedComponent {...props} />
                {props.loading && (
                    <View style={styles.loaderContainer}>
                        <ActivityIndicator size="small" color="#44aafe" />
                    </View>
                )}
            </>
        );
    };
};

const styles = StyleSheet.create({
    loaderContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        zIndex: 1000,
    },
});

export default withLoader;
