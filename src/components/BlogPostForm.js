import React, {useState} from "react";
import { View, Text, StyleSheet,TextInput, Button } from "react-native";

const BlogPostForm = ({onSubmit, initialValues}) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View style={styles.mainViewStyle}>
            <Text style={styles.textStyle}>Enter title</Text>
            <TextInput 
                style={styles.inputStyle}
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <Text style={styles.textStyle}>Enter content</Text>
            <TextInput
                style={styles.inputStyle}
                autoCapitalize= "none"
                autoCorrect={false}
                value={content}
                onChangeText={(text) => setContent(text)}
            />
            <Button 
                title='Save Blog Post'
                onPress={() => onSubmit(title, content)}
            />
        </View>
    );
};
BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
};

const styles = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white',
        fontSize: 20,
        paddingBottom: 10
    },
    textStyle: {
        fontSize: 20,        
    },
    mainViewStyle: {
        alignItems: 'left',
        padding: 20
    }
});

export default BlogPostForm;