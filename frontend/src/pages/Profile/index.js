import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import {FiPower,FiTrash2} from 'react-icons/fi'
import './styles.css'
import api from '../../services/api';

export default function Profile(){
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
    const [ incidents, setIncidents ] = useState([]);

    useEffect(()=>{
        api.get('/profile',{
            headers: {
                Authorization:ongId
            }
        })
        .then(res=>res.data)
        .then(data=>{
            setIncidents(data);
        })
        .catch(err=>{})
    },[ongId])

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt='Be The hero'/>
                <span>Bem vinda, {ongName}.</span>
                <Link className='button' to='/incidents/new'>
                    Cadastrar novo caso
                </Link>
                <button type='buton'>
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>
            <h1>Casos cadastrados</h1>
            <ul>
            {incidents.map(incident=>(
                <li key={incident.id}>
                    <strong>CASO:</strong>
                    <p>{incident.title}</p>
                    <strong>DESCRIÇÃO</strong>
                    <p>{incident.description}</p>
                    <strong>Valor:</strong>
                    <p>{incident.value}</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
            ))}
            </ul>
        </div>
    )
}