import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {OutreachEmailSchemaDef} from "./outreachEmail.schema-def";

export function editOutreachEmailFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(OutreachEmailSchemaDef, languageCode, form, permissions, readPermissions);
}
