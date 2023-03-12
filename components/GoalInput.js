import { Button, StyleSheet, TextInput, View, Modal, Image } from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };
    const handlePress = () => {
        props.addGoalHandler(enteredGoal);
        setEnteredGoal('');
        props.endAddGoalHandler();
    }
    const handleCancel = () => {
        props.endAddGoalHandler();
    };

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image source={require("../assets/goal.png")} style={styles.image}></Image>
                <TextInput style={styles.textInput} placeholder='enter your goal..' onChangeText={goalInputHandler} value={enteredGoal} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='ADD GOAL' onPress={handlePress} color="#b180f0" />
                    </View>
                    <View style={styles.button}>
                        <Button title='CANCEL' onPress={handleCancel} color="#f31282" />
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
        alignItems: 'center',
        padding: 16,
        backgroundColor: "#311b6b"
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        width: '80%',
        padding: 8,
        borderRadius: 6,
    },
    buttonContainer: {
        flexDirection: 'row'
    },
    button: {
        width: '30%',
        marginHorizontal: 8,
        marginTop: 8
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
});

export default GoalInput
