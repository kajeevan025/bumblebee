import React, {Component} from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './style';
import Icon from '../Icon';

export default class FloatButton extends Component {
    render() {
        let {children,onFloatBtnPress, floatBtnStyles} = this.props;
        return (
            <TouchableOpacity onPress={onFloatBtnPress} style={[styles.floatBtn, floatBtnStyles]}>
                {children}
            </TouchableOpacity>
        );
    }
}



