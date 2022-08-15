import React, {useContext} from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import {Context } from "../context/BlogContext";
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {
    const { state, deleteBlogPost } = useContext(Context);

    return (
        <View>
            <FlatList 
                data={state}
                keyExtractor={blogPost => blogPost.title}
                renderItem={({ item }) => {
                    return (
                    <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
                        <View style={styles.blogsStyle}>
                            <Text>{item.title} - {item.id}</Text>
                            <Text>{item.content}</Text>
                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                <Feather name="trash" style={styles.trashIconStyle} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Feather name="plus" size={30}/>
        </TouchableOpacity>
    };
};

const styles = StyleSheet.create({
    blogsStyle: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        padding: 10, 
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 18
    },
    trashIconStyle: {
        fontSize: 22,
        color:"black"
    }
});

export default IndexScreen;