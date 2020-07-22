import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// const ImageDetail = props => {

//     console.log(props);

//     return (
//         <View>
//             {/* <Image source={require('../../assets/beach.jpg')} /> */}
//             <Image source={props.imageSource} />
//             <Text>{props.title}</Text>
//             <Text>Image Score - {props.score}</Text>
//         </View>
//     );
// };

const ImageDetail = ({ imageSource, title, score }) => {
    return (
        <View style={styles.container}>
            <Image source={imageSource} />
            <Text style={styles.text}> {title} </Text>
            <Text style={styles.textSub}> Image Score - {score} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    text: {
        fontSize: 15,
        marginBottom: 3
    },
    textSub: {
        fontSize: 12,
        marginBottom: 10
    }
});

export default ImageDetail