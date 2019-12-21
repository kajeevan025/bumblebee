import React, {Component} from "react";
import {View} from "react-native";
import styles from './style'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default class Icon extends Component {
    render() {
        let {name, iconStyles} = this.props;
        return (
            <FontAwesome name={name} style={[styles.icon, iconStyles]}/>
        );
    }
}



