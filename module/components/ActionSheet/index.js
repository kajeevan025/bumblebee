import React from 'react';
import {View, Text} from 'react-native';
import {Tab, Tabs} from 'native-base';
import ListItem from '../List';

export const Title = ()=><Text style={{color: 'crimson', fontSize: 18}}>Details</Text>;
export const ActionSheetComponent = () => (
    <View style={{height: '100%'}}>
        <Tabs>
            <Tab heading="General">
                <View>
                    {[1, 2, 3, 4].map(element => (
                        <ListItem
                            key={element}
                            disabled={true}
                            leftComponent={
                                <View>
                                    <Text>2016 Infiniti 2050</Text>
                                </View>}
                            rightComponent={<Text>PDI</Text>}
                        />))
                    }
                </View>
            </Tab>
            <Tab heading="Price">
                {[1, 2, 3, 4].map(element => (
                    <ListItem
                        key={element}
                        disabled={true}
                        leftComponent={
                            <View>
                                <Text>Price info</Text>
                            </View>}
                        rightComponent={<Text>PDI</Text>}
                    />))
                }

            </Tab>
            <Tab heading="Parts">{[1, 2, 3, 4].map(element => (
                <ListItem
                    key={element}
                    disabled={true}
                    leftComponent={
                        <View>
                            <Text>Parts info</Text>
                        </View>}
                    rightComponent={<Text>PDI</Text>}
                />))
            }

            </Tab>
            <Tab heading="Damage">
                {[1, 2, 3, 4].map(element => (
                    <ListItem
                        key={element}
                        disabled={true}
                        leftComponent={
                            <View>
                                <Text>Damage</Text>
                            </View>}
                        rightComponent={<Text>PDI</Text>}
                    />))
                }

            </Tab>
        </Tabs>
    </View>
);
