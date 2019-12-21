import React from "react";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    active: {
        flexDirection: 'row',
        backgroundColor: 'blue',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
    },
    inActive: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
    },
    mainViewStyle: {
        flexDirection: 'row'
    },
    languageImage: {
        width: 32,
        height: 32,
    },
    languageTitle: {
        fontSize: 16,
    },
    subViewStyle: {
        height: 65,
        justifyContent: 'center'
    },
    middleSubViewStyle: {
        marginLeft: 16
    },
    leftSubViewStyle: {
        marginLeft: 16
    },
    rightSubViewStyle: {
        marginRight: 16
    }
});

export default styles;
