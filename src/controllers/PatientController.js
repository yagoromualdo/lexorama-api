class PatientController {
    constructor(PatientModel) {
      this.PatientModel = PatientModel;
    }
  
    getAllPatients(req, res) {
      const patients = this.PatientModel.getAllPatients();
      res.json(patients);
    }
  
    getPatientById(req, res) {
      const patientId = req.params.id;
      const patient = this.PatientModel.getPatientById(patientId);
      if (patient) {
        res.json(patient);
      } else {
        res.status(404).json({ error: 'Patient not found' });
      }
    }
  
    createPatient(req, res) {
      const newPatientData = req.body;
      const isExistingPatient = this.PatientModel.isExistingPatient(newPatientData);
      if (isExistingPatient) {
        res.status(400).json({ error: 'Patient already exists' });
      } else {
        const newPatient = this.PatientModel.createPatient(newPatientData);
        res.status(201).json(newPatient);
      }
    }
  
    updatePatient(req, res) {
      const patientId = req.params.id;
      const updatedPatientData = req.body;
      const patient = this.PatientModel.getPatientById(patientId);
      if (patient) {
        const updatedPatient = this.PatientModel.updatePatient(patientId, updatedPatientData);
        res.json(updatedPatient);
      } else {
        res.status(404).json({ error: 'Patient not found' });
      }
    }
  
    deletePatient(req, res) {
      const patientId = req.params.id;
      const patient = this.PatientModel.getPatientById(patientId);
      if (patient) {
        this.PatientModel.deletePatient(patientId);
        res.json({ message: 'Patient deleted' });
      } else {
        res.status(404).json({ error: 'Patient not found' });
      }
    }
  }
  
  module.exports = PatientController;
  