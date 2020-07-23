import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
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
                    <Button title='Counter (Using useState)' onPress={() => navigation.navigate('CounterUseState')} />
                </View>

                <View style={styles.containerSub}>
                    <Text style={{ fontSize: 15 }}> 10. </Text>
                    <Button title='Counter (Using Reducer)' onPress={() => navigation.navigate('CounterReducer')} />
                </View>

                <View style={styles.containerSub}>
                    <Text style={{ fontSize: 15 }}> 11. </Text>
                    <Button title='Color' onPress={() => navigation.navigate('Color')} />
                </View>

                <View style={styles.containerSub}>
                    <Text style={{ fontSize: 15 }}> 12. </Text>
                    <Button title='Square (Using useState)' onPress={() => navigation.navigate('SquareUseState')} />
                </View>

                <View style={styles.containerSub}>
                    <Text style={{ fontSize: 15 }}> 13. </Text>
                    <Button title='Square (Using Reducer)' onPress={() => navigation.navigate('SquareReducer')} />
                </View>

                <View style={styles.containerSub}>
                    <Text style={{ fontSize: 15 }}> 14. </Text>
                    <Button title='Login' onPress={() => navigation.navigate('Login')} />
                </View>

                <View style={styles.containerSub}>
                    <Text style={{ fontSize: 15 }}> 15. </Text>
                    <Button title='Box' onPress={() => navigation.navigate('Box')} />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 15,
        flex: 1
    },
    containerSub: {
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start'
    }
});

export default HomeScreen