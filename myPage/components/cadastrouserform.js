import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import MaskInput from 'react-native-mask-input';

//pegar dimensao da tela
const { width, height } = Dimensions.get('screen')

//usuario

const user1 = {username: 'erick', pass: '12345678'}
const user2 = {username: 'joao', pass: '87654321'}


export default function cadastrouserform({navigation}){

    //states
    const [username, seterick] = React.useState('user')
    const [password, setpass] = React.useState('pass')

}