import React, { useState } from 'react';
import axios from 'axios';
import '../../css/addCandidat.css';
import Navbar from '../Navbar';

function AddCandidat() {
  const [formData, setFormData] = useState({
    nom: '',
    numeroIdentification: '',
    adresse: '',
    telephone: '',
    email: '',
    dateNaissance: '',
    evaluation: '',
    observation: '',
    competence: '',
    domaineTechnique: '',
    dateEntretien: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/candidat/candidats/add', formData);
      if (response.status === 201) {
        alert('Candidat ajouté avec succès!');
        setFormData({
          nom: '',
          numeroIdentification: '',
          adresse: '',
          telephone: '',
          email: '',
          dateNaissance: '',
          evaluation: '',
          observation: '',
          competence: '',
          domaineTechnique: '',
          dateEntretien: '',
        });
      } else {
        alert('Erreur lors de l\'ajout du candidat.');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de l\'ajout du candidat.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="container1">
          <h1 className="title">Ajouter un Candidat</h1>
          <form onSubmit={handleSubmit} className="formulaire">
            <div className="form-group">
              <label htmlFor="nom">Nom :</label>
              <input type="text" name="nom" id="nom" value={formData.nom} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="numeroIdentification">Numéro d'identification :</label>
              <input type="text" name="numeroIdentification" id="numeroIdentification" value={formData.numeroIdentification} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="adresse">Adresse :</label>
              <input type="text" name="adresse" id="adresse" value={formData.adresse} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="telephone">Téléphone :</label>
              <input type="text" name="telephone" id="telephone" value={formData.telephone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email :</label>
              <input type="text" name="email" id="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="dateNaissance">Date de Naissance :</label>
              <input type="date" name="dateNaissance" id="dateNaissance" value={formData.dateNaissance} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="evaluation">Évaluation :</label>
              <input type="number" step="0.1" name="evaluation" id="evaluation" value={formData.evaluation} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="observation">Observation :</label>
              <textarea name="observation" id="observation" value={formData.observation} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="competence">Compétence :</label>
              <input type="text" name="competence" id="competence" value={formData.competence} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="domaineTechnique">Domaine Technique :</label>
              <input type="text" name="domaineTechnique" id="domaineTechnique" value={formData.domaineTechnique} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="dateEntretien">Date d'Entretien :</label>
              <input type="date" name="dateEntretien" id="dateEntretien" value={formData.dateEntretien} onChange={handleChange} />
            </div>
            <button type="submit">Ajouter</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCandidat;
