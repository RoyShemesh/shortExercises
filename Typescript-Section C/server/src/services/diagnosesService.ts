
import diagnosesList from "../data/diagnoses";
import { Diagnose } from "../types/diagnoses";

const getAllDiagnoses =():Diagnose[]=>{
    return diagnosesList;
};
export default{getAllDiagnoses};