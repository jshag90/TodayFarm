import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

const Header = ({data, title}) => (
    <View style={styles.HeaderContainer}>
        <Text style={styles.HeaderText}>{title}</Text>
        <Text style={styles.HeaderTextSub}>가격 조사일 : {data.lastest_day}</Text>
        <Text style={styles.HeaderTextSub}>* % : 1일전 대비 등락율</Text>
    </View>
)

const styles = StyleSheet.create({
    HeaderContainer: {
        backgroundColor: '#E70012',
        width: '100%',
        padding: 5,
        marginTop: 0
    },
    HeaderText: {
        fontSize: 27,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center'
    },
    HeaderTextSub: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'right'
    }
});

export default Header;