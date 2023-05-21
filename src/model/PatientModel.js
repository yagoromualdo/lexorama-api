class PatientModel {
    constructor() {
      this.patients = [];
    }
  
    // Obtém todos os pacientes
    getAllPatients() {
      return this.patients;
    }
  
    getPatientById(patientId) {
      return this.patients.find(patient => patient.id === patientId);
    }
  
    createPatient(patientData) {
      const newPatient = { id: this.generatePatientId(), ...patientData };
      this.patients.push(newPatient);
      return newPatient;
    }
  
    updatePatient(patientId, updatedPatientData) {
      const patientIndex = this.patients.findIndex(patient => patient.id === patientId);
      if (patientIndex !== -1) {
        this.patients[patientIndex] = { id: patientId, ...updatedPatientData };
        return this.patients[patientIndex];
      }
      return null;
    }
  
    deletePatient(patientId) {
      const patientIndex = this.patients.findIndex(patient => patient.id === patientId);
      if (patientIndex !== -1) {
        this.patients.splice(patientIndex, 1);
      }
    }
  
    isExistingPatient(patientData) {
      return this.patients.some(patient => patient.cpf === patientData.cpf);
    }
  
    generatePatientId() {
      return Date.now().toString(36) + Math.random().toString(36).substring(2, 5);
    }
  }
  
  module.exports = PatientModel;
  