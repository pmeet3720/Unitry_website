import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../firebase/firebaseConfig'; // Corrected import statement
import './UniformSelector.css';

const UniformSelector = () => {
    const [selectedState, setSelectedState] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedSchool, setSelectedSchool] = useState('');
    const [states, setStates] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [schools, setSchools] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStates = async () => {
            const statesSnapshot = await getDocs(collection(firestore, "States"));
            setStates(statesSnapshot.docs.map(doc => ({ id: doc.id, name: doc.id })));
        };
        fetchStates();
    }, []);

    useEffect(() => {
        const fetchDistricts = async () => {
            if (!selectedState) return;
            const districtsSnapshot = await getDocs(collection(firestore, "States", selectedState, "Districts"));
            setDistricts(districtsSnapshot.docs.map(doc => ({ id: doc.id, name: doc.id })));
        };
        if (selectedState) fetchDistricts();
    }, [selectedState]);

    useEffect(() => {
        const fetchSchools = async () => {
            if (!selectedDistrict) return;
            const schoolsSnapshot = await getDocs(collection(firestore, "States", selectedState, "Districts", selectedDistrict, "Schools"));
            setSchools(schoolsSnapshot.docs.map(doc => ({ id: doc.id, name: doc.id })));
        };
        if (selectedDistrict) fetchSchools();
    }, [selectedState, selectedDistrict]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedSchool) {
            alert("Please select a school first.");
            return;
        }
        navigate(`/genders-and-product-categories/${selectedState}/${selectedDistrict}/${selectedSchool}`);
    };

    return (
        <div className="form-container">
            <h1>Select Your School</h1>
            <form onSubmit={handleSubmit}>
                <select value={selectedState} onChange={e => setSelectedState(e.target.value)}>
                    <option value="">Select State</option>
                    {states.map(state => <option key={state.id} value={state.id}>{state.name}</option>)}
                </select>
                <select value={selectedDistrict} onChange={e => setSelectedDistrict(e.target.value)} disabled={!selectedState}>
                    <option value="">Select District</option>
                    {districts.map(district => <option key={district.id} value={district.id}>{district.name}</option>)}
                </select>
                <select value={selectedSchool} onChange={e => setSelectedSchool(e.target.value)} disabled={!selectedDistrict}>
                    <option value="">Select School</option>
                    {schools.map(school => <option key={school.id} value={school.id}>{school.name}</option>)}
                </select>
                <button type="submit">Fetch Uniforms</button>
            </form>
        </div>
    );
};

export default UniformSelector;
