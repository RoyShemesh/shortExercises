import express from "express";
import patientsService from "../services/patientsService";
import patientService from "../services/patientsService";
import { Entry, NewPaitentEntry, Patient } from "../types/patients";
const router = express.Router();

router.get("/", (_req, res) => {
  res.send(patientService.getAllPatientsWithNoSsn());
});
router.post("/", (req, res) => {
  try {
    const newPaitentEntry: NewPaitentEntry = patientService.toNewPaitentEntry(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      req.body
    );
    const addedPaitent: Patient = patientService.addPaitent(newPaitentEntry);
    res.send(addedPaitent);
  } catch (e) {
    res.status(400).send(e);
  }
});
router.get("/:id", (req, res) => {
  if (typeof req.params.id === "string") {
    const paitent: Patient | undefined = patientsService.findPatient(
      req.params.id
    );
    if (typeof paitent === "undefined") {
      res.status(404).send("Paitent not found");
    } else {
      res.send(paitent);
    }
  }
});

router.post("/:_id/entries", (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const entry: Entry = req.body;
  const { _id } = req.params;
  const { id, date, diagnosisCodes, specialist, description } = entry;
  switch (entry.type) {
    case "HealthCheck":
      patientService.addEntry(_id, {
        id,
        date,
        diagnosisCodes,
        specialist,
        description,
        healthCheckRating: entry.healthCheckRating,
        type: entry.type,
      });
      break;
    case "Hospital":
      patientService.addEntry(_id, {
        id,
        date,
        diagnosisCodes,
        specialist,
        description,
        discharge: entry.discharge,
        type: entry.type,
      });
      break;
    case "OccupationalHealthcare":
      patientService.addEntry(_id, {
        id,
        date,
        diagnosisCodes,
        specialist,
        description,
        sickLeave: entry.sickLeave,
        employerName: entry.employerName,
        type: entry.type,
      });
      break;
    default:
      break;
  }
  res.send(entry);
});

export default router;
