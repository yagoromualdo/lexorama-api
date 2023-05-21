const express = require('express');
const app = express();
const PatientController = require('./controllers/PatientController');
const PatientModel = require('./model/PatientModel');
const ProfessionalController = require('./controllers/ProfessionalController');
const ProfessionalModel = require('./model/ProfessionalModel');
const GuardianController = require('./controllers/GuardianController');
const GuardianModel = require('./model/GuardianModel');

app.use(express.json());

const patientController = new PatientController(new PatientModel());
const professionalController = new ProfessionalController(new ProfessionalModel());
const guardianController = new GuardianController(new GuardianModel());

app.get('/patients', patientController.getAllPatients.bind(patientController));
app.get('/patients/:id', patientController.getPatientById.bind(patientController));
app.post('/patients', patientController.createPatient.bind(patientController));
app.put('/patients/:id', patientController.updatePatient.bind(patientController));
app.delete('/patients/:id', patientController.deletePatient.bind(patientController));

app.get('/professionals', professionalController.getAllProfessionals.bind(professionalController));
app.get('/professionals/:id', professionalController.getProfessionalById.bind(professionalController));
app.post('/professionals', professionalController.createProfessional.bind(professionalController));
app.put('/professionals/:id', professionalController.updateProfessional.bind(professionalController));
app.delete('/professionals/:id', professionalController.deleteProfessional.bind(professionalController));

app.get('/guardians', guardianController.getAllGuardians.bind(guardianController));
app.get('/guardians/:id', guardianController.getGuardianById.bind(guardianController));
app.post('/guardians', guardianController.createGuardian.bind(guardianController));
app.put('/guardians/:id', guardianController.updateGuardian.bind(guardianController));
app.delete('/guardians/:id', guardianController.deleteGuardian.bind(guardianController));

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
