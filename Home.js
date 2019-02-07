import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

//VIEW itu sama kaya div klo di HTML
//TEXT ya untuk text
//Stylesheet untuk CSS


class Home extends Component {

    constructor() {
        super();
    };
    render() {
        return (
            // <View>
            //     
            // </View>
            <Text style={this.props.style}>{this.props.message}</Text>
        )
    }
}



export default Home;