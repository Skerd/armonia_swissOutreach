import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ProspectCompanySchemaDef} from "./prospectCompany.schema-def";

export function createProspectCompanyFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ProspectCompanySchemaDef, languageCode, form);
}
