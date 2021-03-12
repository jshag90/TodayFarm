import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import redPepper01 from '../image/redPepper01.png';
import redPepper02 from '../image/redPepper02.png';
import ApiKeyInfo from './api_key_info'
export default class HomeContainer extends React.Component {

    state = {
        maxProductName: '',
        maxProductDpr1: '',
        maxProductClsCode: '',
        maxProductDirection:'',
        maxProductValue:'',
        mxaProductUnit:''
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
            if(redPepperProductNoList.indexOf(dataPrice[i].productno) != -1 ){ //도매
                customPriceList.push(dataPrice[i]);
            }
        }

        let maxDirectionPrice = customPriceList[0];
        for(let j=0; j <customPriceList.length; j++){
            if(customPriceList[j].value - maxDirectionPrice.value > 0){            
                maxDirectionPrice = customPriceList[j];
            }
        }

        this.setState({
            maxProductName: maxDirectionPrice.productName,
            maxProductDpr1: maxDirectionPrice.dpr1,
            maxProductClsCode: maxDirectionPrice.product_cls_code,
            maxProductDirection: maxDirectionPrice.direction,
            maxProductValue: maxDirectionPrice.value,
            mxaProductUnit : maxDirectionPrice.unit
        })

    }

    callPostData = async() => {
        return fetch(`https://www.kamis.or.kr/service/price/xml.do?action=dailySalesList&p_cert_key=${ApiKeyInfo.cert_key}&p_cert_id=${ApiKeyInfo.cert_id}&p_returntype=json`)
        .then(request => request.json())
        .catch(err => console.log(err))
    }

    render() {

      return (
        <View>

            <TouchableHighlight 
                style={styles.submitBigStore} 
                underlayColor='none'
                onPress={() => this.props.navigation.navigate('BigStore')}>
                <View style={styles.submitText}>
                    <Image style={styles.logo} source={redPepper02}/>
                    <Text style={styles.menuText}>
                        도매시세
                    </Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight 
                style={styles.submitSmallStore} 
                underlayColor='none'
                onPress={() => this.props.navigation.navigate('SmallStore')}>
                <View style={styles.submitText}>
                    <Image style={styles.logo} source={redPepper01}/>
                    <Text style={styles.menuText}>
                        소매시세
                    </Text>
                </View>
            </TouchableHighlight>
            <Text style={styles.maxDirectionTitle}>오늘의 최대 등락율</Text>
            <Text style={styles.maxDirectionContent}>{this.state.maxProductName} 
            <Text style={getDirectionStyle(this.state)}>
               &nbsp;{getDirectionText(this.state)}
             </Text>
            </Text>
            <Text style={styles.maxDirectionContent}>{this.state.maxProductDpr1}/{this.state.mxaProductUnit}</Text>
            <Text style={styles.versionText}>
                현재 버전 1.0.2
            </Text>
            <Text style={styles.apiInfoText}>
                *KAMIS OPEN API
            </Text>

        </View>
      );
    }
  }

  function getDirectionStyle(data){
    if(data.maxProductDirection == '1'){
        return styles.DirectionPluse;
    }else if(data.maxProductDirection == '0'){
        return styles.DirectionMinus;
    }else{
        return styles.DirectionSame;
    }
}

function getDirectionText(data){
    if(data.maxProductDirection == '1'){
        return '+'+data.maxProductValue+'%';
    }else if(data.maxProductDirection == '0'){
        return '-'+data.maxProductValue+'%';
    }else{
        return data.maxProductValue+'%';
    }
}

  const styles = StyleSheet.create({
    submitBigStore:{
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
    submitSmallStore:{
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
    },
    menuText:{
        fontSize: 25, 
        color: '#1E1E1E', 
        fontWeight: 'bold', 
        marginLeft: 15
    },
    versionText:{
        fontSize: 15, 
        color: '#000000',
        textAlign:'right',
        marginRight:10,
        marginTop:100
    },
    apiInfoText: {
        fontSize: 15, 
        color: '#000000',
        textAlign:'right',
        marginRight:10,
        marginTop:1
    },
    maxDirectionTitle:{
        color:'#000000',
        textAlign:'center',
        alignItems: 'center',
        marginTop:25,
        marginBottom:1,
        marginLeft:20,
        fontSize: 25, 
        color: '#1E1E1E', 
        fontWeight: 'bold', 
    }, 
    maxDirectionContent:{
        color:'#000000',
        textAlign:'center',
        alignItems: 'center',
        marginTop:5,
        marginBottom:1,
        marginLeft:20,
        fontSize: 23, 
        color: '#1E1E1E', 
        fontWeight: 'bold', 
    },
    DirectionPluse: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: 17,
        padding: 2,
        paddingLeft: 70,
        color: '#C30100'
    },
    DirectionMinus: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: 17,
        padding: 2,
        paddingLeft: 70,
        color: '#160af5'
    },
    DirectionSame: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: 17,
        padding: 2,
        paddingLeft: 70,
        color: '#000000'
    }

  })