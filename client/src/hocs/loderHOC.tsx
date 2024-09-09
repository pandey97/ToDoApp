import React from 'react';
import { View, ActivityIndicator, StyleSheet, Modal } from 'react-native';

const withLoader = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    return (props: P & { loading: boolean }) => {
        return (
            <>
                <WrappedComponent {...props} />
                {props.loading && (
                    <Modal transparent={true} animationType="fade" visible={props.loading}>
                        <View style={styles.loaderContainer}>
                            <ActivityIndicator size="small" color="#44aafe" />
                        </View>
                    </Modal>
                )}
            </>
        );
    };
};

const styles = StyleSheet.create({
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
});

export default withLoader;
