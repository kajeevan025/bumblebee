import React, {Component} from "react";
import {View} from "react-native";
import styles from './style'

export default class Card extends Component {
    render() {
        let {children, cardStyles} = this.props;
        return (
            <View style={[styles.card, cardStyles]}>
                {children}
            </View>
        );
    }
}



