import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import '../../css/listCandidat.css';
import ava from '../../assets/user/ava.jpg';
import ava5 from '../../assets/user/ava5.jpg';
import ava6 from '../../assets/user/ava6.jpg';
import ava7 from '../../assets/user/ava7.jpg';
import ava8 from '../../assets/user/ava8.jpg';
import ava9 from '../../assets/user/ava9.jpg';

const ListCandidat = () => {
    const [candidats, setCandidats] = useState([]);
    const [candidatImages, setCandidatImages] = useState({});

    useEffect(() => {
        fetchCandidats();
    }, []);

    const fetchCandidats = async () => {
        try {
            const response = await axios.get('http://localhost:8080/candidat/candidats');
            setCandidats(response.data); 
        } catch (error) {
            console.error('Erreur lors de la récupération des candidats:', error);
        }
    };
    
    const images = [ava, ava5, ava6, ava7, ava8, ava9];

    useEffect(() => {
        const newCandidatImages = {};
        candidats.forEach(candidat => {
            const randomIndex = Math.floor(Math.random() * images.length);
            newCandidatImages[candidat.id] = images[randomIndex];
        });
        setCandidatImages(newCandidatImages);
    }, [candidats]);

    return (
        <div>
            <Navbar />
            <h2>Liste des candidats</h2>
            <table className="candidat-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {candidats.map((candidat) => (
                        <tr key={candidat.id}>
                            <td>
                                <img 
                                    src={candidatImages[candidat.id]} 
                                    alt="Candidat" 
                                    className="list-photo" 
                                />
                            </td>
                            <td>{candidat.nom}</td>
                            <td>{candidat.email}</td>
                            <td>
                                <Link to={`/candidats/${candidat.id}`} className='detail'>Détail</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListCandidat;
