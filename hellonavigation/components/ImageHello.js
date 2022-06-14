/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Button, View, Image, ImageBackground } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#7A7B3C',
    },
    text: {
        fontSize: 20,
        marginBottom: 3,
        marginTop: 3,
        marginLeft: 8,
    },
    input: {
        fontSize: 20,
        width: 200,
        borderWidth: 1,
        borderRadius: 2,
        backgroundColor: '#FFFFFF',
        margin: 5,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#81945F',
        margin: 5,
        borderRadius: 5,
    },
    image: {
        width: 100,
        height: 100,
        margin: 5,
        resizeMode: 'stretch',
    },
});


export const ImageHello = () => {
    const [text, setText] = useState('...');
    const [submitted, setSubmitted] = useState(false);

    const onTextInput = (value) => {
        setText(value);
    };

    const onButtonPress = () => {
        setSubmitted(!submitted);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={{ uri: 'https://media.istockphoto.com/photos/old-rough-white-painted-brick-wall-large-texture-whitewashed-masonry-picture-id1345971773' }}
            >
                <Text style={styles.text}> Please Enter the Text:</Text>
                <TextInput style={styles.input}
                    placeholder='e.g Christo'
                    onChangeText={(value) => { onTextInput(value); }}
                    keyboardType='default'
                    maxLength={22}
                    editable={!submitted}
                //secureTextEntry
                //multiline
                />
                <View style={styles.button}>
                    <Button
                        title={submitted ? 'Clear' : 'Submit'}
                        color='#FFFFFF'
                        onPress={() => { onButtonPress(); }} />
                </View>
                {submitted ? <Text style={styles.text}> Registered Name: {text}</Text> : null}
                <Text style={styles.text}> Local Image: </Text>
                <Image
                    source={require('./assets/done.png')}
                    style={styles.image} />
                <Text style={styles.text}> Network Image: </Text>
                <Image
                    source={{ uri: 'https://images.freeimages.com/images/large-previews/76e/abstract-1-1174741.jpg' }}
                    style={styles.image}
                />
            </ImageBackground>
        </SafeAreaView>
    );
};
