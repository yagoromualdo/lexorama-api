class ProfessionalModel {
    constructor() {
      this.professionals = [];
    }
  
    getAllProfessionals() {
      return this.professionals;
    }
  
    getProfessionalById(professionalId) {
      return this.professionals.find(professional => professional.id === professionalId);
    }
  
    createProfessional(professionalData) {
      const newProfessional = { id: this.generateProfessionalId(), ...professionalData };
      this.professionals.push(newProfessional);
      return newProfessional;
    }
  
    updateProfessional(professionalId, updatedProfessionalData) {
      const professionalIndex = this.professionals.findIndex(
        professional => professional.id === professionalId
      );
      if (professionalIndex !== -1) {
        this.professionals[professionalIndex] = { id: professionalId, ...updatedProfessionalData };
        return this.professionals[professionalIndex];
      }
      return null;
    }
  
    deleteProfessional(professionalId) {
      const professionalIndex = this.professionals.findIndex(
        professional => professional.id === professionalId
      );
      if (professionalIndex !== -1) {
        this.professionals.splice(professionalIndex, 1);
      }
    }
  
    isExistingProfessional(professionalData) {
      return this.professionals.some(
        professional => professional.cpf === professionalData.cpf
      );
    }
  
    generateProfessionalId() {
      return Date.now().toString(36) + Math.random().toString(36).substring(2, 5);
    }
  }
  
  module.exports = ProfessionalModel;
  