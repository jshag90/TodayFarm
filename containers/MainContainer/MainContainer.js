import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Header, CardView } from '../../components'

export default class MainContainer extends React.Component {
  state = {
    data: [],
    oneData: [],
    isLoading: false
  }

  componentDidMount(){
    this.getPostData();
  }

  getPostData = async() => {
    const data = await this.callPostData();
    const dataPrice = data.price;
    const customPriceList = [];
    //고추 관련 가격 정보만
    const redPepperProductNoList = ['341', '345', '349', '351', '353', '355', '1580','81', '85', '90','92', '94', '96'];
    for(let i=0; i <dataPrice.length; i++ ){
      if(redPepperProductNoList.indexOf(dataPrice[i].productno) != -1)
        customPriceList.push(dataPrice[i]);
    }

    this.setState({
      data: customPriceList,
      oneData: customPriceList[0],
      isLoading: true
    })
  }

  callPostData = async() => {
    return fetch('https://www.kamis.or.kr/service/price/xml.do?action=dailySalesList&p_cert_key=test&p_cert_id=test&p_returntype=json')
    .then(request => request.json())
    .catch(err => console.log(err))
  }

    render() {
      return (


        <View style={styles.container}>
          <Header style={styles.header} data={this.state.oneData} />
          <ScrollView style={styles.cardContainer}>
          {this.state.data.map((data, index) => (
                    <CardView
                    data={data}
                    key={index}
                    />
          ))}
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
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardContainer: {
      flex: 1,
      flexDirection: 'column',
      width: '100%'
    }
  });