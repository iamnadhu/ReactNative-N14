import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.text}> Sessions Order! </Text>

                <View style={styles.containerSub}>
                    <Text style={{ fontSize: 15 }}> 01. </Text>
                    <Button title='My First App' onPress={() => navigation.navigate('MyFirstApp')} />
                </View>

                <View style={styles.containerSub}>
                    <Text style={{ fontSize: 15 }}> 02. </Text>
                    <Button title='Components' onPress={() => navigation.navigate('Components')} />
                </View>

                <View style={styles.containerSub}>
                    <Text style={{ fontSize: 15 }}> 03. </Text>
                    <Button title='Components Exercise' onPress={() => navigation.navigate('ComponentsExercise')} />
                </View>

                <View style={styles.containerSub}>
                    <Text style={{ fontSize: 15 }}> 04. </Text>
                    <Button title='List' onPress={() => navigation.navigate('List')} />
                </View>

                <View style={styles.containerSub}>
                    <Text style={{ fontSize: 15 }}> 05. </Text>
                    <Button title='List Exercise' onPress={() => navigation.navigate('ListExercise')} />
                </View>

                <View style={styles.containerSub}>
                    <Text style={{ fontSize: 15 }}> 06. </Text>
                    <Button title='Button' onPress={() => navigation.navigate('Button')} />
                </View>

                <View style={styles.containerSub}>
                    <Text style={{ fontSize: 15 }}> 07. </Text>
                    <Button title='Touchable Opacity' onPress={() => navigation.navigate('TouchableOpacity')} />
                </View>

                <View style={styles.containerSub}>
                    <Text style={{ fontSize: 15 }}> 08. </Text>
                    <Button title='Image' onPress={() => navigation.navigate('Image')} />
                </View>

                <View style={styles.containerSub}>
                    <Text style={{ fontSize: 15 }}> 09. </Text>
                    <Button title='Touchable Opacity' onPress={() => navigation.navigate('TouchableOpacity')} />
                </View>

                <View style={styles.containerSub}>
                    <Text style={{ fontSize: 15 }}> 10. </Text>
                    <Button title='Touchable Opacity' onPress={() => navigation.navigate('TouchableOpacity')} />
                </View>

                <Text> 16. Counter Screen </Text>
                <Text> 17. Color Screen </Text>
                <Text> 18. Color Screen 2 </Text>
                <Text> 19. Square Screen </Text>
                <Text> 20. Color Counter </Text>
                <Text> 21. Square Screen 2 </Text>
                <Text> 22. Counter Screen Exercise </Text>
                <Text> 23. Text Screen </Text>
                <Text> 24. Box Screen </Text>
                <Text> 25. Box Screen 2 </Text>
                <Text> 26. Box Screen Exercise </Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 15,
        flex: 1
    },
    text: {
        fontSize: 30,
        marginBottom: 10
    },
    containerSub: {
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start'
    }
});

export default HomeScreen