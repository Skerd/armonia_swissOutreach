import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {CampaignSchemaDef} from "./campaign.schema-def";
import {refineCampaignCantons} from "./campaignCantons.refine";

export function createCampaignFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(CampaignSchemaDef, languageCode, form).superRefine(refineCampaignCantons(languageCode, form));
}
