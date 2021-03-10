import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, Button, Alert } from 'react-native';

const SubHeader = ({props}) => (

    <View style={styles.container}>

        <View style={styles.smallStore}   >
          <Text style={styles.fontStyle}  onPress={() => setStateStore(props)}>도매</Text>
        </View>
        <View style={styles.bigStory}    >
          <Text style={styles.fontStyle} onPress={() => setStateStore(props)}>소매</Text>
        </View>
    </View>
)

//TODO : 자식 -> 부모의 state를 변경 혹은 값 전달
function setStateStore(props){
  props.setScrollYAxis(10);
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#E70012',
      width: '100%',
      flexDirection: 'row',
    },
    smallStore:{
      flex: 1,
      backgroundColor: 'red',
    },
    bigStory:{
      flex: 1,
      backgroundColor: 'red',
    },
    fontStyle:{
      alignSelf:'center',
      fontSize: 17,
      fontWeight: 'bold',
      color: '#ffffff',
    }

});

export default SubHeader;