import React,  {useContext}from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from '@expo/vector-icons';

const ShowScreen = ({navigation}) => {
    const {state} = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'))
    return (
        <View style={styles.mainViewStyle}>
            <Text style={styles.titleStyle}>Title: {blogPost.title}</Text>
            <View style={styles.contentStyle}>
                <Text>{blogPost.content}</Text>
            </View>           
        </View>
    );
};

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
            <Feather name="edit" size={30}/>
        </TouchableOpacity>
    };
};

const styles = StyleSheet.create({
    mainViewStyle: {
        alignItems: 'left',
        padding: 20
    },
    contentStyle: {
        flex: 1,
        height: 400,
        borderRadius: 10,
        backgroundColor: 'white',
        fontSize: 20        
    },
    titleStyle: {
        fontSize: 25,
        paddingBottom: 15
    }
});

export default ShowScreen;