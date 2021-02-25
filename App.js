import React, { useState } from 'react';
import screenStyle from './screenStyle';
import { View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [allGoals, setAllGoals] = useState([]);
  const [addMode, setAddMode] = useState(false);
  const addGoalHandler = (goalTitle) => {
    if (goalTitle.length === 0) {
      return;
    }
    setAllGoals((prevGoals) => [...prevGoals, { id: Math.random().toString(), value: goalTitle }]);
    setAddMode(false); //as we are setting two different states here, all states are updated and rerending happens only once
  }
  const deleteGoalHandler = (goalId) => {
    setAllGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== goalId);
    });
  }
  return (
    <View style={screenStyle}>
      <Button title="Add New Goal" onPress={() => setAddMode(true)} />
      <GoalInput modalVisible={addMode} setModalVisibility={setAddMode} onAddGoal={addGoalHandler} />
      <FlatList keyExtractor={(item, index) => item.id} data={allGoals} renderItem={(itemData) =>
        <GoalItem id={itemData.item.id} title={itemData.item.value} onDelete={deleteGoalHandler} />
      } />
    </View>
  );
}
