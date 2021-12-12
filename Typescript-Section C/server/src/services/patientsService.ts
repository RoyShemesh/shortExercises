import patientsList from "../data/patients";
import {
  Entry,
  Gender,
  NewPaitentEntry,
  PaitentNoSsn,
  Patient,
} from "../types/patients";
import { v1 as uuid } from "uuid";

const getAllPatients = (): Patient[] => {
  return patientsList;
};
const getAllPatientsWithNoSsn = (): PaitentNoSsn[] => {
  return patientsList.map(
    ({ id, name, dateOfBirth, gender, occupation, entries }) => {
      return { id, name, dateOfBirth, gender, occupation, entries };
    }
  );
};
const findPatient = (id: string): Patient | undefined => {
  return patientsList.find((patient) => patient.id === id);
};
const addPaitent = (paitent: NewPaitentEntry): Patient => {
  const newPaitent: Patient = {
    id: uuid(),
    ...paitent,
  };
  patientsList.push(newPaitent);
  return newPaitent;
};
type Fields = {
  name: unknown;
  dateOfBirth: unknown;
  ssn: unknown;
  gender: unknown;
  occupation: unknown;
};

const toNewPaitentEntry = ({
  name,
  dateOfBirth,
  ssn,
  gender,
  occupation,
}: Fields): NewPaitentEntry => {
  const newPaitent: NewPaitentEntry = {
    name: parseText(name),
    dateOfBirth: parseText(dateOfBirth),
    ssn: parseText(ssn),
    gender: parseGender(gender) as Gender,
    occupation: parseText(occupation),
    entries: [],
  };
  return newPaitent;
};

const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

const parseText = (text: unknown): string => {
  if (!text || !isString(text)) {
    throw new Error("Incorrect or missing data");
  }

  return text;
};

const isGender = (param: unknown): param is Gender => {
  return Object.values(Gender).includes(param as Gender);
};

const parseGender = (gender: unknown): Gender | unknown => {
  if (!gender || !isGender(gender)) {
    throw new Error("Incorrect or missing gender: " + gender);
  }
  return gender;
};
const addEntry = (patientID: string, entry: Entry): void => {
  patientsList.forEach((paitent) => {
    if (paitent.id === patientID) paitent.entries.push(entry);
  });
};
export default {
  getAllPatients,
  getAllPatientsWithNoSsn,
  addPaitent,
  toNewPaitentEntry,
  findPatient,
  addEntry,
};
