import React, { useState } from 'react';
import axios from 'axios';
import '../../css/addEmploye.css';
import Navbar from '../Navbar';

function AddEmployeeForm() {
  const [formData, setFormData] = useState({
    nom: '',
    numeroIdentification: '',
    adresse: '',
    telephone: '',
    email: '',
    dateNaissance: '',
    debutContrat: '',
    finContrat: '',
    poste: '',
    motDePasse: '',
    salaire: '',
    observation: '',
    admin: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/employe/employes/add', formData);
      if (response.status === 201) {
        alert('Employé ajouté avec succès!');
        setFormData({
          nom: '',
          numeroIdentification: '',
          adresse: '',
          telephone: '',
          email: '',
          dateNaissance: '',
          debutContrat: '',
          finContrat: '',
          poste: '',
          motDePasse: '',
          salaire: '',
          observation: '',
          admin: false,
        });
      } else {
        alert('Erreur lors de l\'ajout de l\'employé.');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de l\'ajout de l\'employé.');
    }
  };

  return (
    <div>
        <Navbar/>
    <div className="container">
        
      <div className="container1">
        <h1 className="title">Ajouter un Employé</h1>
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
            <input type="text" name="dateNaissance" id="dateNaissance" value={formData.dateNaissance} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="debutContrat">Date de début de contrat :</label>
            <input type="text" name="debutContrat" id="debutContrat" value={formData.debutContrat} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="finContrat">Date de fin de contrat :</label>
            <input type="text" name="finContrat" id="finContrat" value={formData.finContrat} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="poste">Poste :</label>
            <input type="text" name="poste" id="poste" value={formData.poste} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="motDePasse">Mot de passe :</label>
            <input type="password" name="motDePasse" id="motDePasse" value={formData.motDePasse} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="salaire">Salaire :</label>
            <input type="number" name="salaire" id="salaire" value={formData.salaire} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="observation">Observation :</label>
            <textarea name="observation" id="observation" value={formData.observation} onChange={handleChange} />
          </div>
          <div className="check">
            <label htmlFor="admin">Admin :</label>
            <input type="checkbox" name="admin" id="admin" checked={formData.admin} onChange={handleChange} />
          </div>
          <button type="submit">Ajouter</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default AddEmployeeForm;
