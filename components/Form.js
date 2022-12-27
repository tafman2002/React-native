import {Alert, Button, Platform, StyleSheet, TextInput, View, SafeAreaView} from "react-native";
import {useState} from "react";

function SimpleForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        Alert.alert(`Email: ${email}, Password: ${password}`);
    }
    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                source="title"
                placeholder="Email"
                value={email}
                onChange={(text) => setEmail(text)}
            />
            <TextInput
                secureTextEntry={true}
                placeholder="Password"
                value={password}
                onChange={(text) => setPassword(text)}
            />
            <Button
                title="Submit form"
                color="#841584"
                onPress={handleSubmit}
                accessibilityLabel="Learn more about this purple button"
            />
        </SafeAreaView>
    );
}

// To check for platform, use Platform.OS from react-native
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Platform.OS === 'ios' ? '#ddf' : '#faa',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SimpleForm;