import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, ActivityIndicator, Image } from 'react-native';
import Home from './Home';

//VIEW itu sama kaya div klo di HTML
//TEXT ya untuk text
//Stylesheet untuk CSS


class App extends Component {

  constructor() {
    super();
    this.state = {
      z: "Halo this is Z!",
      message: 'Ini dr app js',
      style: {
        backgroundColor: 'blue',
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        margin: 20,
        padding: 10
      },
      data: [
        'Andi', 'Budi', 'Caca',
        'Andi', 'Budi', 'Caca',
        'Andi', 'Budi', 'Caca',
        'Andi', 'Budi', 'Caca',
        'Andi', 'Budi', 'Caca',
        'Andi', 'Budi', 'Caca',
        'Andi', 'Budi', 'Caca',
        'Andi', 'Budi', 'Caca',
        'Andi', 'Budi', 'Caca',
        'Andi', 'Budi', 'Caca',
        'Andi', 'Budi', 'Caca',
        'Andi', 'Budi', 'Caca',
      ]
    }
  };

  x = "Hello, this is X";

  a = (b) => {
    return (
      `Hello this is ${b}`
    )
  };

  render() {
    var y = "Hi this is Y";

    var output = this.state.data.map((val, id) => {
      return (
        <Text key={id}>
          {val}
        </Text>
      )
    })

    return (
      // <View style={{
      //   backgroundColor: 'lightblue',
      //   height: 500,
      //   padding: 50
      // }}>
      //   <Text style={style.title}>
      //     Tes android App.
      //   </Text>

      //   <Text style={style.subtitle}>React Native!</Text>
      //   <Text style={[style.title, style.subtitle]}>{this.x}</Text>
      //   <Text>{y}</Text>
      //   <Text>{this.state.z}</Text>
      //   <Text>{this.a('Ivan')}</Text>
      // </View>
      <React.Fragment>
        <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: 'green', borderColor: 'yellow' }}>
          {/* <View style={{ flexDirection: 'column', alignItems: 'center', backgroundColor: 'white' }}> */}
          <View style={style.box1} onTouchStart={() => { alert("wkwkwk") }}></View>
          <View style={style.box2}></View>
          <View style={style.box3}></View>
          <View style={style.box4}></View>

        </View>
        <Home message={this.state.message} style={this.state.style} />
        <ScrollView>
          <ActivityIndicator size='large' color='green'></ActivityIndicator>
          <Image style={{ width: 400, height: 200 }} source={{ uri: 'https://fcbarcelona-static-files.s3.amazonaws.com/fcbarcelona/photo/2019/02/05/543459df-9eb0-436c-bd8c-b8522a56db56/FCB-MAD_PREVIA-Optimized.jpg' }}></Image>
          <Image style={{ width: 400, height: 200, margin: 2 }} source={require('./assets/yano.jpg')}></Image>
          {output}
        </ScrollView>

      </React.Fragment>

    )
  }
}

let style = StyleSheet.create({
  title: {
    color: 'black',
    fontFamily: 'Arial',
    backgroundColor: 'pink',
    padding: 15,
    textAlign: "center",
    fontSize: 20,
    margin: 5
  },
  subtitle: {
    fontSize: 15,
    backgroundColor: 'green'
  },
  boxMain: {
    backgroundColor: 'white'
  },
  box1: {
    flex: 1,
    width: 100,
    height: 100,
    backgroundColor: 'black',
    margin: 3
  },
  box2: {
    flex: 1,
    width: 100,
    height: 100,
    backgroundColor: 'black',
    margin: 3
  },
  box3: {
    width: 100,
    flex: 1,
    height: 100,
    backgroundColor: 'black',
    margin: 3
  },
  box4: {
    width: 100,
    flex: 1,
    height: 100,
    backgroundColor: 'black',
    margin: 3
  }
})


export default App;