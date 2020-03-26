import React from 'react';
import { Feather } from '@expo/vector-icons'
import { View,Text,Image,TouchableOpacity} from 'react-native'
import styles from './styles.js'
import logoImg from '../../assets/logo.png';

export default function Detail(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <TouchableOpacity onPress={()=>{}}>
                    <Feather name='arrow-left' size={28} color="#E82041"/>
                </TouchableOpacity>
            </View>
            <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>                   
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
                    <TouchableOpacity style={styles.action} onPress={()=>{}}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}