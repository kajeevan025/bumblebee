import React, {Component} from 'react';
import {Image, FlatList, View} from 'react-native';
import BaseComponent from './components/BaseComponent';
import Card from './components/Card';
import Icon from './components/Icon';
import Header from './components/Header';
import FloatButton from './components/FloatButton';
import {ActionSheetCustom as ActionSheet} from 'react-native-custom-actionsheet';
import {ActionSheetComponent, Title} from './components/ActionSheet';


//data setup for ActionSheetComponent
const CANCEL_INDEX = 0;
const DESTRUCTIVE_INDEX = 4;
const options = [
    'Cancel', {
        component: <ActionSheetComponent/>,
        height: 400,
    },
];
//end ActionSheetComponent


//data setup for Car Card View
const cardView = [
    {image: require('../assets/image7.jpeg')},
    {image: require('../assets/image8.jpg')},
    {image: require('../assets/image6.jpeg')},
    {image: require('../assets/image5.jpg')},
    {image: require('../assets/image4.png')},
];
//end Car Card View


export default class Index extends Component {
    state = {
        selected: 1,
    };

    showActionSheet = () => this.actionSheet.show();

    getActionSheetRef = ref => (this.actionSheet = ref);

    handlePress = index => this.setState({selected: index});

    render() {
        return (
            <BaseComponent loading={false}>
                <Header/>
                <FlatList
                    data={cardView}
                    renderItem={({item}) => <Card>
                        <Image
                            source={item.image}
                            style={{height: 200, width: null, flex: 1, resizeMode: 'contain'}}
                        />
                    </Card>}
                    keyExtractor={item => item.image}
                />
                <FloatButton onFloatBtnPress={this.showActionSheet}><Icon iconStyles={{fontSize:28,color:'#fff'}} name="times"/></FloatButton>
                <ActionSheet
                    ref={this.getActionSheetRef}
                    title={<Title/>}
                    message="Click on tabs to check category details"
                    options={options}
                    cancelButtonIndex={CANCEL_INDEX}
                    destructiveButtonIndex={DESTRUCTIVE_INDEX}
                    onPress={this.handlePress}
                />
            </BaseComponent>
        );
    }
};
