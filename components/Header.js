import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

const Header = ({data}) => (
    <View style={styles.HeaderContainer}>
        <Text style={styles.HeaderText}>오늘의 고추시세</Text>
        <Text style={styles.HeaderTextSub}>기준일 : {data.lastest_day}</Text>
    </View>
)

const styles = StyleSheet.create({
    HeaderContainer: {
        backgroundColor: '#E70012',
        width: '100%',
        padding: 5,
        marginTop: StatusBar.currentHeight
    },
    HeaderText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center'
    },
    HeaderTextSub: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'right'
    }
});

export default Header;