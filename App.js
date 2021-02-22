import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import carousel from './components/carousel';
export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      teachs : [
        'https://www.zebulon.fr/wp-content/uploads/2018/09/utilisateurs-windows-181_full.jpg',
        'https://www.zebulon.fr/wp-content/uploads/2018/09/utilisateurs-windows-181_full.jpg',
        'https://www.zebulon.fr/wp-content/uploads/2018/09/utilisateurs-windows-181_full.jpg',
        'https://www.zebulon.fr/wp-content/uploads/2018/09/utilisateurs-windows-181_full.jpg',
        'https://www.zebulon.fr/wp-content/uploads/2018/09/utilisateurs-windows-181_full.jpg',
        'https://www.zebulon.fr/wp-content/uploads/2018/09/utilisateurs-windows-181_full.jpg',
        'https://www.zebulon.fr/wp-content/uploads/2018/09/utilisateurs-windows-181_full.jpg',
        'https://www.zebulon.fr/wp-content/uploads/2018/09/utilisateurs-windows-181_full.jpg',
        'https://www.zebulon.fr/wp-content/uploads/2018/09/utilisateurs-windows-181_full.jpg',
        'https://www.zebulon.fr/wp-content/uploads/2018/09/utilisateurs-windows-181_full.jpg'

      ]
    }
  }
  render(){
  return (
    <View style={styles.container}>
      <carousel front="this.state.teachs"></carousel>
      <StatusBar style="auto" />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
