import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import '../../css/listEmploye.css';
import ava from '../../assets/user/ava.jpg';
import ava5 from '../../assets/user/ava5.jpg';
import ava6 from '../../assets/user/ava6.jpg';
import ava7 from '../../assets/user/ava7.jpg';
import ava8 from '../../assets/user/ava8.jpg';
import ava9 from '../../assets/user/ava9.jpg';

const ListEmployes = () => {
    const [employes, setEmployes] = useState([]);
    const [employeImages, setEmployeImages] = useState({});

    useEffect(() => {
        fetchEmployes();
    }, []);

    const fetchEmployes = async () => {
        try {
            const response = await axios.get('http://localhost:8080/employe/employes');
            setEmployes(response.data); 
        } catch (error) {
            console.error('Erreur lors de la récupération des employés:', error);
        }
    };
    
    const images = [ava, ava5, ava6, ava7, ava8, ava9];

    useEffect(() => {
        const newEmployeImages = {};
        employes.forEach(employe => {
            const randomIndex = Math.floor(Math.random() * images.length);
            newEmployeImages[employe.id] = images[randomIndex];
        });
        setEmployeImages(newEmployeImages);
    }, [employes]);
    return (
        <div>
            <Navbar/>
            <h2>Liste des employés</h2>
            <table className="employe-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employes.map((employe) => (
                        
                        <tr key={employe.id}>
                            <td> <img 
                                src={employeImages[employe.id]}
                                alt="Employé" 
                                className="list-photo"
                            /></td>
                            <td>{employe.nom}</td>
                            <td>{employe.email}</td>
                            <td>
                                <Link to={`/employes/${employe.id}`} className='detail'>Détail</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}
export default ListEmployes;
