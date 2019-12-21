import React, {Component} from 'react';
import {View, StatusBar, Text} from 'react-native';
import styles from './style';
import Icon from '../Icon';

export default class Header extends Component {
    render() {
        let {children, headerStyles} = this.props;
        return (
            <View>
                <StatusBar backgroundColor={'#fff'} translucent barStyle="dark-content"/>
                <View style={styles.header}>
                    <View style={{flex: 1}}>
                        <View style={{padding: 15}}><Icon name='chevron-left'/></View>
                    </View>
                    <View style={{flexDirection: 'row', backgroundColor: '#fff'}}>
                        <View style={{padding: 15}}><Icon name='search'/></View>
                        <View style={{padding: 15}}><Icon name='bell'/></View>
                        <View style={{padding: 15}}><Icon name='comment'/></View>
                    </View>
                </View>
            </View>
        );
    }
}



