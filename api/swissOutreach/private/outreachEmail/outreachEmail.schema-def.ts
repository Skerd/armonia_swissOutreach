import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";
import {outreachLanguageValues} from "../../../../types/constants";

/**
 * What a reviewer may edit on a drafted email. Only the pipeline creates emails; their campaign, prospect and
 * `status` belong to it and to the review actions (approve, skip, editDraft, doNotContact).
 */
export const OutreachEmailSchemaDef = {
    toEmail: {type: "string", required: false, format: "email"},
    subject: {type: "string", required: true, min: 1, max: 300},
    body: {type: "string", required: true, min: 1, max: 20000},
    language: {type: "enum", required: true, options: outreachLanguageValues},
} as const;

export type CreateOutreachEmailFormType = InferCreateForm<typeof OutreachEmailSchemaDef>;
export type EditOutreachEmailFormType = InferEditForm<typeof OutreachEmailSchemaDef>;
