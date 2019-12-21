import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import styles from './style';

export default class BaseComponent extends Component {

    render() {
        let {children, mainContainer} = this.props;
        return (
            <SafeAreaView style={[styles.mainContainerStyle, mainContainer]}>
                {children}
            </SafeAreaView>
        );
    }
}


