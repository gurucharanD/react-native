import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [goals, setGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const startAddGoalHandler = () => {
    setIsModalVisible(true);
  }
  const endAddGoalHandler = () => {
    setIsModalVisible(false);
  }
  const addGoalHandler = (enteredGoal) => {
    if (enteredGoal == '') {
      return
    }
    setGoals((currentGoals) => { return [...currentGoals, { text: enteredGoal, key: Math.random().toString() }] });
  };

  const deleteGoalHandler = (id) => {
    console.log(id);
    setGoals((currentGoals) => { return currentGoals.filter(goal => goal.key != id) });
  }

  return (
    <>
      <StatusBar style='light'></StatusBar>
      <View style={styles.appContainer}>
        <Button title='ADD NEW GOAL' color='#b180f0' onPress={startAddGoalHandler} />
        {isModalVisible && <GoalInput addGoalHandler={addGoalHandler} visible={isModalVisible} endAddGoalHandler={endAddGoalHandler}></GoalInput>}
        <View style={styles.goalsContainer}>
          <FlatList data={goals} renderItem={(goal) => {
            return (
              <GoalItem goal={goal.item.text} id={goal.item.key} deleteGoal={deleteGoalHandler}></GoalItem>
            );
          }}>
          </FlatList>
        </View>
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 9
  },
  goalsContainer: {
    flex: 5
  }
});
