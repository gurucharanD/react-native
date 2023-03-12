import { StyleSheet, View, Text, Pressable } from 'react-native';

const GoalItem = ({ id,goal, deleteGoal }) => {

    const handlePress = (id) => {
        deleteGoal(id);
    }
    return (
        <Pressable onPress={() => { handlePress(id) }}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{goal}</Text>
            </View>
        </Pressable>
    );
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        padding: 8,
    },
    goalText: {
        color: 'white'
    }
});
