import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {CampaignSchemaDef} from "./campaign.schema-def";

export function createCampaignFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(CampaignSchemaDef, languageCode, form);
}
