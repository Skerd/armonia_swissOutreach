import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {CampaignSchemaDef} from "./campaign.schema-def";

export function editCampaignFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(CampaignSchemaDef, languageCode, form, permissions, readPermissions);
}
