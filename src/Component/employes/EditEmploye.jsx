import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../css/editEmploye.css';
import Navbar from '../Navbar';
// import user from '../../assets/ava.jpg';



const EditEmploye = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [employe, setEmploye] = useState({
        nom: '',
        numeroIdentification: '',
        adresse: '',
        telephone: '',
        email: '',
        dateNaissance: '',
        debutContrat: '',
        finContrat: '',
        poste: '',
        admin: false,
        salaire: '',
        observation: ''
    });
    
    useEffect(() => {
        const fetchEmploye = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/employe/employes/${id}`);
                setEmploye(response.data);
                console.log(response.data);
            } catch (error) {
                setError('Erreur lors de la récupération des détails de l’employé');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchEmploye();
    }, [id]);
    

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setEmploye({ ...employe, [name]: newValue });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/employe/employes/${id}/edit`, employe);
            navigate(`/employes/${employe.id}`);
        } catch (error) {
            setError('Erreur lors de la mise à jour de l’employé');
            console.error(error);
        }
    };

    if (loading) {
        return <div>Chargement...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="edit-employe-form">
            <Navbar/>
            <h2>Employé {employe.nom} </h2>
            {employe ? (
                <form onSubmit={handleSubmit}>
                    <div className="container">
                        <div className="employe-pho">
                        <img 
                            src= {user}
                            alt="Employé" 
                            className="photo"/>
                        </div>
                    
                    <div className="ligne enTete">
                        <div className='form-group '>
                        <label htmlFor="nom">Nom:</label>
                        <input 
                            type="text" 
                            id="nom" 
                            name="nom" 
                            value={employe.nom} 
                            onChange={handleChange} 
                        />
                        </div>
                        <div className="form-group">
                        <label htmlFor="telephone">Téléphone:</label>
                        <input 
                            type="text" 
                            id="telephone" 
                            name="telephone" 
                            value={employe.telephone} 
                            onChange={handleChange} 
                        />
                    </div>
                        
                        <div className='form-group '>
                        <label htmlFor="numeroIdentification">Numéro d'identification:</label>
                        <input 
                            type="text" 
                            id="numeroIdentification" 
                            name="numeroIdentification" 
                            value={employe.numeroIdentification} 
                            onChange={handleChange} 
                        />
                        </div>
                    </div>
                    <div>
                    <div className="form-group">
                        <label htmlFor="adresse">Adresse:</label>
                        <input 
                            type="text" 
                            id="adresse" 
                            name="adresse" 
                            value={employe.adresse} 
                            onChange={handleChange} 
                        />
                    </div>
                   
                    </div>
                    <div className="ligne">
                    
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={employe.email} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dateNaissance">Date de naissance:</label>
                        <input 
                            type="text" 
                            id="dateNaissance" 
                            name="dateNaissance" 
                            value={employe.dateNaissance} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="poste">Poste:</label>
                        <input 
                            type="text" 
                            id="poste" 
                            name="poste" 
                            value={employe.poste} 
                            onChange={handleChange} 
                        />
                    </div>
                    </div>
                    <div className="ligne">
                    <div className="form-group">
                        <label htmlFor="debutContrat">Date de début de contrat:</label>
                        <input 
                            type="text" 
                            id="debutContrat" 
                            name="debutContrat" 
                            value={employe.debutContrat} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="finContrat">Date de fin de contrat:</label>
                        <input 
                            type="text" 
                            id="finContrat" 
                            name="finContrat" 
                            value={employe.finContrat} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="salaire">Salaire:</label>
                        <input 
                            type="text" 
                            id="salaire" 
                            name="salaire" 
                            value={employe.salaire} 
                            onChange={handleChange} 
                        />
                    </div>
                    </div>
                   
                    
                   
                   
                    <div className="check">
                        <label htmlFor="admin">Admin:</label>
                        <input 
                            type="checkbox" 
                            id="admin" 
                            name="admin" 
                            checked={employe.admin || false} 
                            onChange={handleChange} 
                        />
                    </div>
                   
                    <div className="form-group ligne">
                        <label htmlFor="observation">Observation:</label>
                        <textarea 
                            id="observation" 
                            name="observation" 
                            value={employe.observation} 
                            onChange={handleChange} 
                        />
                    </div>
                    <button type="submit">Enregistrer</button>
                    </div>
                </form>
            ) : (
                <div>Employé non trouvé</div>
                
            )}
            
        </div>
    );
};

export default EditEmploye;
