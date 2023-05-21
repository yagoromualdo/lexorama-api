class GuardianController {
    constructor(GuardianModel) {
      this.GuardianModel = GuardianModel;
    }
  
    getAllGuardians(req, res) {
      const guardians = this.GuardianModel.getAllGuardians();
      res.json(guardians);
    }
  
    getGuardianById(req, res) {
      const guardianId = req.params.id;
      const guardian = this.GuardianModel.getGuardianById(guardianId);
      if (guardian) {
        res.json(guardian);
      } else {
        res.status(404).json({ error: 'Guardian not found' });
      }
    }
  
    createGuardian(req, res) {
      const newGuardianData = req.body;
      const isExistingGuardian = this.GuardianModel.isExistingGuardian(newGuardianData);
      if (isExistingGuardian) {
        res.status(400).json({ error: 'Guardian already exists' });
      } else {
        const newGuardian = this.GuardianModel.createGuardian(newGuardianData);
        res.status(201).json(newGuardian);
      }
    }
  
    updateGuardian(req, res) {
      const guardianId = req.params.id;
      const updatedGuardianData = req.body;
      const guardian = this.GuardianModel.getGuardianById(guardianId);
      if (guardian) {
        const updatedGuardian = this.GuardianModel.updateGuardian(guardianId, updatedGuardianData);
        res.json(updatedGuardian);
      } else {
        res.status(404).json({ error: 'Guardian not found' });
      }
    }
  
    deleteGuardian(req, res) {
      const guardianId = req.params.id;
      const guardian = this.GuardianModel.getGuardianById(guardianId);
      if (guardian) {
        this.GuardianModel.deleteGuardian(guardianId);
        res.json({ message: 'Guardian deleted' });
      } else {
        res.status(404).json({ error: 'Guardian not found' });
      }
    }
  }
  
  module.exports = GuardianController;
  