import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ProspectCompanySchemaDef} from "./prospectCompany.schema-def";

export function editProspectCompanyFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(ProspectCompanySchemaDef, languageCode, form, permissions, readPermissions);
}
