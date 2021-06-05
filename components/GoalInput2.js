import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const classes = StyleSheet.create({
    textInput: {
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      padding: 10,
      marginBottom: 10,
      width: '80%',
    },
    alignItemsToEachOther: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
    },
    button: {
        width: '45%',
    }
});

const GoalInput2 = (props) => {

    const [ enteredGoal, setEnteredGoal ] = useState('') 

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    }

    const addGoalHandler = () => {
        props.onAddGoal(this, enteredGoal);
        setEnteredGoal('')
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={classes.alignItemsToEachOther}>
                <TextInput placeholder="Course Goal" style={classes.textInput} 
                    onChangeText={goalInputHandler} 
                    value={enteredGoal}/>
                <View style={classes.buttonContainer}>
                    <View style={classes.button}>
                        <Button title="CANCEL" color="red" onPress={props.onCancel} />
                    </View>
                    <View style={classes.button}>
                        <Button title="ADD" onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput2