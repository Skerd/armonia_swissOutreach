import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {CampaignSchemaDef} from "./campaign.schema-def";
import {refineCampaignCantons} from "./campaignCantons.refine";

export function editCampaignFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(CampaignSchemaDef, languageCode, form, permissions, readPermissions).superRefine(refineCampaignCantons(languageCode, form));
}
