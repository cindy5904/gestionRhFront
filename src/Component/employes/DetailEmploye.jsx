import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../css/detailEmploye.css';
// import user from '../../assets/ava.jpg';
import Navbar from '../Navbar';
import ava9 from '../../assets/user/ava9.jpg';

const DetailEmploye = () => {
    const { id } = useParams();
    const [employe, setEmploye] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmploye = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/employe/employes/${id}`);
                setEmploye(response.data);
            } catch (error) {
                setError('Erreur lors de la récupération des détails de l’employé');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchEmploye();
    }, [id]);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8080/employe/employes/${id}/delete`);
            navigate('/employes');
        } catch (error) {
            setError('Erreur lors de la suppression de l’employé');
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
        <div className='bodyDetails'>
            <Navbar/>
        <div className="employe-detail">
            <h2>Informations de {employe.nom}</h2>
            <div className="btn-detail">
            <Link to={`/employes/${employe.id}/edit`} className='modif'>Modifier</Link>
            <button onClick={handleDelete} className='delete'>Supprimer</button>
            </div>
            
            {employe ? (
                <div className="employe-card">
                    <div className="card-top">
                    <img 
                            src= {ava9}
                            alt="Employé" 
                            className="employe-photo"
                        />
                    </div>
                    <div className="card-bottom">
                        <div>
                        <p><strong>Nom:</strong> {employe.nom}</p>
                        <p><strong>Numéro d'identification:</strong> {employe.numeroIdentification}</p>
                        </div>
                        <hr/>
                        <div>
                        <p><strong>Adresse:</strong> {employe.adresse}</p>
                        <p><strong>Téléphone:</strong> {employe.telephone}</p>
                        </div>
                        <hr/>
                        <div>
                        <p><strong>Email:</strong> {employe.email}</p>
                        <p><strong>Date de naissance:</strong> {employe.dateNaissance}</p>
                        </div>
                        <hr/>
                        <div>
                        <p><strong>Date de début de contrat:</strong> {employe.debutContrat}</p>
                        <p><strong>Date de fin de contrat:</strong> {employe.finContrat}</p>
                        </div>
                        <hr/>
                        <div>
                        <p><strong>Poste:</strong> {employe.poste}</p>
                        <p><strong>Salaire:</strong> {employe.salaire}</p>
                        </div>
                        <hr/>
                        <p><strong>Admin:</strong> {employe.admin ? 'Oui' : 'Non'}</p>
                        <p><strong>Observation:</strong> {employe.observation}</p>
                    </div>
                    
                </div>
                
            ) : (
                <div>Employé non trouvé</div>
            )}
           
        </div>
       
        </div>
    );
};

export default DetailEmploye;
