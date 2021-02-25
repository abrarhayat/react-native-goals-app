import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    /* .bind() basically calls onDelete with the argument props.id which is eventually passed on to App.js to deleteGoalHandler */
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={props.onDelete.bind(this, props.id)}>
            <View>
                <Text style={styles.listItems}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listItems: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: 'rgba(0, 10, 2, 0.7)',
        borderColor: 'greenyellow',
        borderWidth: 1,
        color: 'greenyellow'
    }
});

export default GoalItem;