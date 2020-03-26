import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { View,Text,FlatList,Image,TouchableOpacity } from 'react-native';
import styles from './styles.js';
import logoImg from '../../assets/logo.png';

export default function Indicents(){
    const navigation = useNavigation();

    const navigateToDetail = () => {
        navigation.navigate('Detail');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos</Text>
                </Text>
            </View>
            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>
                Escolha um dos casos abaixo e salve o dia!
            </Text>
            <FlatList
                style={styles.incidentList}
                data={[1,2,3]}
                keyExtractor={incident=>String(incident)}
                showsVerticalScrollIndicator={false}
                renderItem={()=>(
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG:</Text>                   
                        <Text style={styles.incidentValue}>APAD</Text>     

                        <Text style={styles.incidentProperty}>CASO:</Text>                   
                        <Text style={styles.incidentValue}>dfgfdgfd</Text>   

                        <Text style={styles.incidentProperty}>VALOR:</Text>                   
                        <Text style={styles.incidentValue}>123</Text>        

                        <TouchableOpacity 
                            style={styles.detailsButton} 
                            onPress={navigateToDetail}
                            >
                                <Text style={styles.detailsButtonText}>
                                Ver mais detalhes
                                </Text>
                                <Feather name="arrow-right" size={16} color="#E02041"/>
                        </TouchableOpacity>           
                    </View>
                )}
            />
        </View>
    )
}