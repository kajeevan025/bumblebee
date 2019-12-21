import React from 'react';
import {StyleSheet,Platform} from 'react-native';

const styles = StyleSheet.create({
    header: {
        paddingLeft:Platform.OS === 'ios' ? 5 : 5,
        paddingTop: Platform.OS === 'ios' ? 10: 30,
        paddingBottom: Platform.OS === 'ios' ? 10 : 10,
        backgroundColor: '#fff',
        flexDirection: 'row'
    },

});
export default styles;
