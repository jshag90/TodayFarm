import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import redPepper01 from '../image/redPepper01.png';
import redPepper02 from '../image/redPepper02.png';

export default class HomeContainer extends React.Component {
    render() {
      return (
        <View>
            
            <TouchableHighlight 
                style={styles.submitBig} 
                underlayColor='none'
                onPress={() => this.props.navigation.navigate('BigStore')} >
                <View style={styles.submitText}>
                    <Image style={styles.logo} source={redPepper02}/>
                    <Text style={{fontSize: 25, color: '#1E1E1E', fontWeight: 'bold', marginLeft: 15}}>
                        도매시세
                    </Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight 
                style={styles.submitSmall} 
                underlayColor='none'
                onPress={() => this.props.navigation.navigate('SmallStore')}>
                <View style={styles.submitText}>
                    <Image style={styles.logo} source={redPepper01}/>
                    <Text style={{fontSize: 25, color: '#1E1E1E', fontWeight: 'bold', marginLeft: 15}}>
                        소매시세
                    </Text>
                </View>
            </TouchableHighlight>

            <Text style={
                        {
                            fontSize: 15, 
                            color: '#000000',
                            textAlign:'right',
                            marginRight:10,
                            marginTop:190}}>
                    현재 버전 1.0.1
                    </Text>
                    <Text style={
                        {
                            fontSize: 15, 
                            color: '#000000',
                            textAlign:'right',
                            marginRight:10,
                            marginTop:10}}>
                    *KAMIS OPEN API
                    </Text>
          </View>
      );
    }
  }

  const styles = StyleSheet.create({
    logo:{
        height:'40%',
        width:'15%', 
        marginTop:'3%', 
        marginLeft:'3%', 
        marginBottom:'13%',  
        borderRadius: 400/2
    },
    touchableBig:{ 
        height: 300, 
        marginTop: 10,  
        backgroundColor: '#61AB10', 
        alignItems: 'center' 
    },
    touchableSmall:{ 
        height: 300, 
        marginTop: 10,  
        backgroundColor: '#E70012', 
        alignItems: 'center' 
    },
    item: {
        padding: 20,
        marginVertical: 100,
        fontSize: 52,
        color: '#ffffff'
      },
    submitBig:{
        marginRight:40,
        marginLeft:40,
        marginTop:90,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#FFFFFF',
        borderRadius:15,
        borderWidth: 1,
        elevation: 10,
        borderColor: '#888888'
        
    },
    submitSmall:{
        marginRight:40,
        marginLeft:40,
        marginTop:20,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#FFFFFF',
        borderRadius:15,
        borderWidth: 1,
        borderColor: '#888888'
    },
    submitText:{
        color:'#000000',
        textAlign:'center',
        alignItems: 'center',
        marginTop:40,
        marginBottom:40,
        marginLeft:50,
        flex: 1, 
        flexDirection: 'row'
    },
    logo: {
        backgroundColor: '#056ecf',
        height: 60,
        width: 60,
        borderRadius: 400/2,
        marginLeft: 20

      }
  })