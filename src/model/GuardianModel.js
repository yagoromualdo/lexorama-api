class GuardianModel {
    constructor() {
      this.guardians = [];
    }
  
    getAllGuardians() {
      return this.guardians;
    }
  
    getGuardianById(guardianId) {
      return this.guardians.find(guardian => guardian.id === guardianId);
    }
  
    createGuardian(guardianData) {
      const newGuardian = { id: this.generateGuardianId(), ...guardianData };
      this.guardians.push(newGuardian);
      return newGuardian;
    }
  
    updateGuardian(guardianId, updatedGuardianData) {
      const guardianIndex = this.guardians.findIndex(guardian => guardian.id === guardianId);
      if (guardianIndex !== -1) {
        this.guardians[guardianIndex] = { id: guardianId, ...updatedGuardianData };
        return this.guardians[guardianIndex];
      }
      return null;
    }
  
    deleteGuardian(guardianId) {
      const guardianIndex = this.guardians.findIndex(guardian => guardian.id === guardianId);
      if (guardianIndex !== -1) {
        this.guardians.splice(guardianIndex, 1);
      }
    }
  
    isExistingGuardian(guardianData) {
      return this.guardians.some(guardian => guardian.cpf === guardianData.cpf);
    }
  
    generateGuardianId() {
      return Date.now().toString(36) + Math.random().toString(36).substring(2, 5);
    }
  }
  
  module.exports = GuardianModel;
  