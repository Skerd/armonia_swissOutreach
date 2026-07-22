import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";
import {prospectStatusValues} from "../../../../types/constants";

export const ProspectCompanySchemaDef = {
    campaignId: {type: "objectId", required: true},
    companyName: {type: "string", required: true, min: 1, max: 300},
    uid: {type: "string", required: false, max: 40},
    canton: {type: "string", required: false, max: 8},
    legalForm: {type: "string", required: false, max: 120},
    registerUrl: {type: "string", required: false, format: "url"},
    website: {type: "string", required: false, format: "url"},
    websiteConfidence: {type: "number", required: false, min: 0, max: 100},
    emails: {type: "stringArray", required: false},
    phones: {type: "stringArray", required: false},
    city: {type: "string", required: false, max: 120},
    postalCode: {type: "string", required: false, max: 20},
    languages: {type: "stringArray", required: false},
    summary: {type: "string", required: false, max: 1200},
    services: {type: "stringArray", required: false},
    score: {type: "number", required: false, min: 0, max: 100},
    scoreReason: {type: "string", required: false, max: 500},
    status: {type: "enum", required: false, options: prospectStatusValues},
    dedupeKey: {type: "string", required: false, max: 300},
} as const;

export type CreateProspectCompanyFormType = InferCreateForm<typeof ProspectCompanySchemaDef>;
export type EditProspectCompanyFormType = InferEditForm<typeof ProspectCompanySchemaDef>;
