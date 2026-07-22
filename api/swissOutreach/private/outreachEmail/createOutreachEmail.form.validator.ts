import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {OutreachEmailSchemaDef} from "./outreachEmail.schema-def";

export function createOutreachEmailFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(OutreachEmailSchemaDef, languageCode, form);
}
