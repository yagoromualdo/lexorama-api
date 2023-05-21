class ProfessionalController {
    constructor(ProfessionalModel) {
      this.ProfessionalModel = ProfessionalModel;
    }
  
    getAllProfessionals(req, res) {
      const professionals = this.ProfessionalModel.getAllProfessionals();
      res.json(professionals);
    }
  
    getProfessionalById(req, res) {
      const professionalId = req.params.id;
      const professional = this.ProfessionalModel.getProfessionalById(professionalId);
      if (professional) {
        res.json(professional);
      } else {
        res.status(404).json({ error: 'Professional not found' });
      }
    }
  
    createProfessional(req, res) {
      const newProfessionalData = req.body;
      const isExistingProfessional = this.ProfessionalModel.isExistingProfessional(newProfessionalData);
      if (isExistingProfessional) {
        res.status(400).json({ error: 'Professional already exists' });
      } else {
        const newProfessional = this.ProfessionalModel.createProfessional(newProfessionalData);
        res.status(201).json(newProfessional);
      }
    }
  
    updateProfessional(req, res) {
      const professionalId = req.params.id;
      const updatedProfessionalData = req.body;
      const professional = this.ProfessionalModel.getProfessionalById(professionalId);
      if (professional) {
        const updatedProfessional = this.ProfessionalModel.updateProfessional(
          professionalId,
          updatedProfessionalData
        );
        res.json(updatedProfessional);
      } else {
        res.status(404).json({ error: 'Professional not found' });
      }
    }
  
    deleteProfessional(req, res) {
      const professionalId = req.params.id;
      const professional = this.ProfessionalModel.getProfessionalById(professionalId);
      if (professional) {
        this.ProfessionalModel.deleteProfessional(professionalId);
        res.json({ message: 'Professional deleted' });
      } else {
        res.status(404).json({ error: 'Professional not found' });
      }
    }
  }
  
  module.exports = ProfessionalController;
  