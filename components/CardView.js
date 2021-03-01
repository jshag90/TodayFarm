import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import redPepper01 from '../image/redPepper01.png';
import redPepper02 from '../image/redPepper02.png';
import redPepper03 from '../image/redPepper03.png';
import redPepper04 from '../image/redPepper04.png';


const CardView = ({data}) => (
    
        <View style={styles.CardContainer}>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <Image style={{height:'80%',width:'15%', marginTop:'3%', marginLeft:'3%', marginBottom:'13%',  borderRadius: 400/ 2}} 
                source={getSourceByProductNo(data.productno)}/>
                <Text style={getProductNameStyle(data.productName)}>{data.productName}</Text>
            </View>
            <Text style={styles.CardContent}> &nbsp;&nbsp;{data.day1} : {data.dpr1}/{data.unit}</Text>
            <Text style={styles.CardContent}> &nbsp;&nbsp;{data.day2} : {data.dpr2}/{data.unit}</Text>
            <Text style={styles.CardContent}> &nbsp;&nbsp;{data.day3} : {data.dpr3}/{data.unit}</Text>
            <Text style={styles.CardContent}> &nbsp;&nbsp;{data.day4} : {data.dpr4}/{data.unit}</Text>
            <Text style={getProductClsNameStyle(data.product_cls_name)}> &nbsp;{data.product_cls_name}</Text>
        </View>

)

function getSourceByProductNo(productNo){
    if(productNo == '341' || productNo == '345' || productNo == '81' || productNo == '85')
        return redPepper01;
    else if(productNo == '349' || productNo == '351' ||  productNo == '353' || productNo == '90' || productNo =='92' || productNo =='94')
        return redPepper02;
    else if(productNo == '1580')
        return redPepper03;
    else if(productNo == '355' || productNo == '96')
        return redPepper04;
    else
        return null;
}

function getProductNameStyle(productName){
    return (productName.length> 20)?styles.CardTitleLong: styles.CardTitle;
}

function getProductClsNameStyle(productCls){
    return (productCls == '도매')?styles.CardTailClsSo:styles.CardTailCls;
}


const styles = StyleSheet.create({
    CardContainer: {
        elevation: 5,
        borderRadius: 4,
        borderWidth: 5,
        borderColor: '#C30100',
        margin: 20,

    },
    CardTitle: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10,
        marginTop: 15
    },
    CardTitleLong: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: 12.8,
        padding: 10,
        marginTop: 15
    },
    CardContent: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: 15,
        padding: 2
    },
    CardTailCls: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: 17,
        padding: 9,
        textAlign: 'right',
        color: '#C30100'
    },
    CardTailClsSo: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: 17,
        padding: 9,
        textAlign: 'right',
        color: '#508708'
    }
    
});

export default CardView;