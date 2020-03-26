import React,{useEffect,useState} from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { View,Text,FlatList,Image,TouchableOpacity } from 'react-native';
import styles from './styles.js';
import logoImg from '../../assets/logo.png';
import api from '../../services/api';

export default function Indicents(){
    const navigation = useNavigation();
    const [ incidents,setIncidents ] = useState([]);
    const [ total, setTotal ] = useState(0);

    const navigateToDetail = (incident) => {
        navigation.navigate('Detail',{incident});
    }

    const loadIncidents = async () => {
        const response = await api.get('/incidents');
        setIncidents(response.data);
        setTotal(response.headers['x-total-count'])
    }

    useEffect(()=>{
        loadIncidents();
    },[])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} casos</Text>
                </Text>
            </View>
            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>
                Escolha um dos casos abaixo e salve o dia!
            </Text>
            <FlatList
                style={styles.incidentList}
                data={incidents}
                keyExtractor={incident=>String(incident.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: incident })=>(
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG:</Text>                   
                        <Text style={styles.incidentValue}>{incident.name}</Text>     

                        <Text style={styles.incidentProperty}>CASO:</Text>                   
                        <Text style={styles.incidentValue}>{incident.title}</Text>   

                        <Text style={styles.incidentProperty}>VALOR:</Text>                   
                        <Text style={styles.incidentValue}>
                            {
                            Intl.NumberFormat('pt-Br',
                                    {
                                    style:'currency',
                                    currency: 'BRL'
                                    }
                                ).format(incident.value)
                            }
                        </Text>        

                        <TouchableOpacity 
                            style={styles.detailsButton} 
                            onPress={() => navigateToDetail(incident)}
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