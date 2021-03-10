import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Header, CardView } from '../../components'
import ApiKeyInfo from '../api_key_info'

export default class SmallStoreContainer extends React.Component {

  state = {
    data: [],
    oneData: [],
    isLoading: false,
    scrollYAxis: 0
  }

  
  componentDidMount(){
    this.getPostData();
  }

  getPostData = async() => {
    const data = await this.callPostData();
    const dataPrice = data.price;
    const customPriceList = [];
    const yAxis = 0;
    //고추 관련 가격 정보만
    const redPepperProductNoList = ['341', '345', '349', '351', '353', '355', '1580','81', '85', '90','92', '94', '96'];
    for(let i=0; i <dataPrice.length; i++ ){
      if(redPepperProductNoList.indexOf(dataPrice[i].productno) != -1 && 
      dataPrice[i].product_cls_code == '01'){
        customPriceList.push(dataPrice[i]);
      }
    }

    this.setState({
      data: customPriceList,
      oneData: customPriceList[0],
      isLoading: true,
      scrollYAxis: yAxis
    })
  }

  callPostData = async() => {
    return fetch(`https://www.kamis.or.kr/service/price/xml.do?action=dailySalesList&p_cert_key=${ApiKeyInfo.cert_key}&p_cert_id=${ApiKeyInfo.cert_id}&p_returntype=json`)
    .then(request => request.json())
    .catch(err => console.log(err))
  }

  scrollToTop = () => {
    this.scroller.scrollTo({x: 0, y: 0});
  };

  scrollToLocation = () => {
    this.scroller.scrollTo({x: 0, y: 1900});
  };

  // setScrollYAxis = (yaxis) => {
  //     Alert.alert('Right button pressed');
  //   this.setState(prevState => ({
  //     scrollYAxis: yaxis
  //   }));
  // }

    render() {
      

      return (
        <View style={styles.container} >
           <Header style={styles.header} data={this.state.oneData} title='소매시세' />
          <ScrollView style={styles.cardContainer}
           ref={(scroller) => {this.scroller = scroller}}
           >
            {this.state.data.map((data, index) => (

                      <CardView
                        data={data}
                        key={index}
                      />
            ))}
              <TouchableOpacity
              style={styles.button}
              onPress={this.scrollToTop}
              >
              <Text style={styles.to_top_text}>맨 위로</Text>
              </TouchableOpacity>
          </ScrollView>
        </View>

      );
    }
  }
  
  
  const styles = StyleSheet.create({
    header: {
      flex: 1,
    },
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    subheader: {
      flex: 1
    },
    cardContainer: {
      flex: 1,
      flexDirection: 'column',
      width: '100%'
    },
    button:{
      alignItems: "center",
      backgroundColor: "#E70012",
      padding: 10
    },
    to_top_text:{
      color: '#FFFFFF',
      fontWeight: 'bold'
    },
    smallStore:{
      backgroundColor: 'red',
    },
    bigStory:{
      backgroundColor: 'red',
    },
    fontStyle:{
      alignSelf:'center',
      fontSize: 17,
      fontWeight: 'bold',
      color: '#ffffff',
    }
  });