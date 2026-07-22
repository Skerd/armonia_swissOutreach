import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";
import {
    campaignStatusValues,
    emailToneValues,
    outreachLanguageValues,
} from "../../../../types/constants";

export const CampaignSchemaDef = {
    jobDescription: {type: "string", required: true, min: 10, max: 8000},
    country: {type: "string", required: true, min: 2, max: 80},
    cantons: {type: "stringArray", required: false},
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
    status: {type: "enum", required: false, options: campaignStatusValues},
} as const;

export type CreateCampaignFormType = InferCreateForm<typeof CampaignSchemaDef>;
export type EditCampaignFormType = InferEditForm<typeof CampaignSchemaDef>;
