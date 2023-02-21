import { Text, View, StyleSheet} from 'react-native'
import React, { Component } from "react";

const DetailPage = ({route}) => {
    return (
        <Text style={styles.choice}>
            {route.params.paramKey}
        </Text>
    )
}

const styles = StyleSheet.create({
    choice: {
        marginLeft:50,
        marginTop: 200,
    
    }
});


export default DetailPage
