import React from 'react';
import {StyleSheet,Platform} from 'react-native';

const styles = StyleSheet.create({
    floatBtn: {
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        position: 'absolute',
        bottom: Platform.OS === 'ios' ? 20 : 10,
        height: 70,
        backgroundColor: '#007BFE',
        borderRadius: 100,
    },
});
export default styles;
