import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";
import {emailToneValues, outreachLanguageValues, swissCantonCodes, type SwissCantonCode} from "../../../../types/constants";

/** What a user may write. `status`, `stats`, `parsedJob` and `lastError` belong to the pipeline and the actions. */
export const CampaignSchemaDef = {
    jobDescription: {type: "string", required: true, min: 10, max: 8000},
    country: {type: "string", required: true, min: 2, max: 80},
    /** Canton codes (`swissCantonCodes`), checked by `refineCampaignCantons`; empty means the whole country. */
    cantons: {type: "stringArray", required: false, maxItems: swissCantonCodes.length},
    maxCompanies: {type: "number", required: true, min: 1, max: 500},
    language: {type: "enum", required: true, options: outreachLanguageValues},
    emailTone: {type: "enum", required: true, options: emailToneValues},
    sendAutomatically: {type: "boolean", required: false},
    senderCompanyName: {type: "string", required: true, min: 1, max: 200},
    senderName: {type: "string", required: true, min: 1, max: 200},
    senderEmail: {type: "string", required: true, format: "email"},
    senderPhone: {type: "string", required: false, max: 40},
    senderWebsite: {type: "string", required: false, format: "url"},
    additionalNotes: {type: "string", required: false, max: 4000},
} as const;

/** The SchemaDef has no enum array, so the canton codes are narrowed here. */
export type CreateCampaignFormType = Omit<InferCreateForm<typeof CampaignSchemaDef>, "cantons"> & {cantons?: SwissCantonCode[]};
export type EditCampaignFormType = Omit<InferEditForm<typeof CampaignSchemaDef>, "cantons"> & {cantons?: SwissCantonCode[]};
