import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

const classes = StyleSheet.create({
    textInput: {
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      padding: 10,
      width: '80%',
    },
    alignItemsToEachOther: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
});

const GoalInput = (props) => {

    const [ enteredGoal, setEnteredGoal ] = useState('') 

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    }

    return (
        <View style={classes.alignItemsToEachOther}>
            <TextInput placeholder="Course Goal" style={classes.textInput} 
                onChangeText={goalInputHandler} 
                value={enteredGoal}/>
            <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
        </View>
    )
}

export default GoalInput