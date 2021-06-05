import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalInput2 from './components/GoalInput2';
import GoalItem from './components/GoalItem';

const classes = StyleSheet.create({
  container: {
    padding: 50,
  },
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
  textMainContainer: {
    backgroundColor: 'grey',
    borderColor: 'black',
    padding: 10,
    margin: 10,
  }
});

export default function App() {

  const [ courseGoals, setCourseGoals ] = useState([ ]) // is an array of objects
  const [ isAddMode, setIsAddMode ] = useState(false)

  const addGoalHandler = goalTitle => {

    setCourseGoals(currentGoals => [
      ...courseGoals, 
      { id: Math.random().toString(), value: goalTitle }
    ])

    setIsAddMode(false)

  }

  const removeGoalHandler = goalId => {

    setCourseGoals(currentGoals => {

      return currentGoals.filter((goal) => goal.id !== goalId)
    })

  }

  const cancelGoalAdditionHandler = () => {

    setIsAddMode(false)

  }

  return (
    <View style={classes.container}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput2 visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler} />
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={courseGoals} renderItem={itemData => (
          <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} /> 
        )}>
      </FlatList>
    </View>
  );
}
