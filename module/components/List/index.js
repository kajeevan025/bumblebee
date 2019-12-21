import React, {Component} from "react";
import {TouchableOpacity, View} from "react-native";
import styles from './style'

export default class List extends Component {

    render() {
        let {disabled = false, leftComponent, middleComponent, rightComponent, isActive, onItemPress, activeBackground, inactiveBackground, mainView, leftView, middleView, rightView} = this.props;
        return (
            <TouchableOpacity disabled={disabled} onPress={onItemPress}
                              style={isActive ? [styles.active, activeBackground] : [styles.inActive, inactiveBackground]}>
                <View style={[styles.mainViewStyle, mainView]}>
                    <View style={[styles.subViewStyle, styles.leftSubViewStyle, leftView]}>
                        {leftComponent}
                    </View>
                    <View style={[styles.subViewStyle, styles.middleSubViewStyle, middleView]}>
                        {middleComponent}
                    </View>
                </View>
                <View style={[styles.subViewStyle, styles.rightSubViewStyle, rightView]}>
                    {rightComponent}
                </View>
            </TouchableOpacity>
        );
    }
}


