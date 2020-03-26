import React from 'react';
import { Feather } from '@expo/vector-icons'
import { View,Text,Image,TouchableOpacity} from 'react-native'
import styles from './styles.js'
import logoImg from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import * as MailCompose from 'expo-mail-composer';

export default function Detail(){
    const navigation = useNavigation();
    const message = `Olá APAD, estou entrando em contato pois gostaria de ajudar no caso "Cadelinha atropelada" com o valor de R$:120 `;
    const navigateBack = () => {
        navigation.goBack();
    }

    const sendMail = () => {
        MailCompose.composeAsync({
            subject:'Herói do caso: Cadelinha',
            recipients: ['cassiano.rsd@gmail.com'],
            body: message
        })

    }

    const sendWhatsApp = () => {


    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name='arrow-left' size={28} color="#E82041"/>
                </TouchableOpacity>
            </View>
            <View style={styles.incident}>
            <Text style={[styles.incidentProperty,{marginTop:0}]}>ONG:</Text>                   
                <Text style={styles.incidentValue}>APAD</Text>     

                <Text style={styles.incidentProperty}>CASO:</Text>                   
                <Text style={styles.incidentValue}>dfgfdgfd</Text>   

                <Text style={styles.incidentProperty}>VALOR:</Text>                   
                <Text style={styles.incidentValue}>123</Text>        
            </View>
            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
                <Text style={styles.heroDescription}>Entre em contato:</Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={()=>{}}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}