import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';
import screenStyle from '../screenStyle';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (goalText) => {
        setEnteredGoal(goalText);
    }
    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }
    return (
        <Modal visible={props.modalVisible} animationType="slide">
            <View style={[styles.inputContainer, screenStyle]}>
                <TextInput placeholder="Goals" placeholderTextColor="#8c9f8c" style={styles.input} onChangeText={goalInputHandler} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="red" onPress={props.setModalVisibility.bind(this, false)} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '95%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        margin: 20,
        color: 'greenyellow'
    },
    buttonContainer: {
        width: "70%",
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: '40%'
    }
});

export default GoalInput;