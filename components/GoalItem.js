import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const classes = StyleSheet.create({
    textMainContainer: {
      backgroundColor: 'grey',
      borderColor: 'black',
      padding: 10,
      margin: 10,
    }
  });

const GoalItem = (props) => {

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)}>
            <View style={classes.textMainContainer}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default GoalItem