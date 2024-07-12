import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../css/detailCandidat.css';
// import user from '../../assets/ava.jpg';
import Navbar from '../Navbar';
import ava9 from '../../assets/user/ava9.jpg';

const DetailCandidat = () => {
    const { id } = useParams();
    const [candidat, setCandidat] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCandidat = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/candidat/${id}`);
                setCandidat(response.data);
            } catch (error) {
                setError('Erreur lors de la récupération des détails du candidat');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchCandidat();
    }, [id]);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8080/candidat/${id}/delete`);
            navigate('/candidats');
        } catch (error) {
            setError('Erreur lors de la suppression du candidat');
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
            <Navbar />
            <div className="candidat-detail">
                <h2>Informations de {candidat.nom}</h2>
                <div className="btn-detail">
                    <Link to={`/candidats/${candidat.id}/edit`} className='modif'>Modifier</Link>
                    <button onClick={handleDelete} className='delete'>Supprimer</button>
                </div>
                
                {candidat ? (
                    <div className="candidat-card">
                        <div className="card-top">
                            <img 
                                src={ava9}
                                alt="Candidat" 
                                className="candidat-photo"
                            />
                        </div>
                        <div className="card-bottom">
                            <div>
                                <p><strong>Nom:</strong> {candidat.nom}</p>
                                <p><strong>Numéro d'identification:</strong> {candidat.numeroIdentification}</p>
                            </div>
                            <hr />
                            <div>
                                <p><strong>Adresse:</strong> {candidat.adresse}</p>
                                <p><strong>Téléphone:</strong> {candidat.telephone}</p>
                            </div>
                            <hr />
                            <div>
                                <p><strong>Email:</strong> {candidat.email}</p>
                                <p><strong>Date de naissance:</strong> {candidat.dateNaissance}</p>
                            </div>
                            <hr />
                            <div>
                                <p><strong>Évaluation:</strong> {candidat.evaluation}</p>
                                <p><strong>Compétence:</strong> {candidat.competence}</p>
                            </div>
                            <hr />
                            <div>
                                <p><strong>Domaine Technique:</strong> {candidat.domaineTechnique}</p>
                                <p><strong>Date d'entretien:</strong> {candidat.dateEntretien}</p>
                            </div>
                            <hr />
                            <p><strong>Observation:</strong> {candidat.observation}</p>
                        </div>
                    </div>
                ) : (
                    <div>Candidat non trouvé</div>
                )}
            </div>
        </div>
    );
};

export default DetailCandidat;
