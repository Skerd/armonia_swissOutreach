import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";
import {outreachEmailStatusValues, outreachLanguageValues} from "../../../../types/constants";

export const OutreachEmailSchemaDef = {
    campaignId: {type: "objectId", required: true},
    prospectCompanyId: {type: "objectId", required: true},
    toEmail: {type: "string", required: false, format: "email"},
    subject: {type: "string", required: true, min: 1, max: 300},
    body: {type: "string", required: true, min: 1, max: 20000},
    language: {type: "enum", required: true, options: outreachLanguageValues},
    status: {type: "enum", required: false, options: outreachEmailStatusValues},
} as const;

export type CreateOutreachEmailFormType = InferCreateForm<typeof OutreachEmailSchemaDef>;
export type EditOutreachEmailFormType = InferEditForm<typeof OutreachEmailSchemaDef>;
