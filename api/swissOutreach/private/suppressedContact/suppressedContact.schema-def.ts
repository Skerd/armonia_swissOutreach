import type {InferCreateForm} from "../../../../../core/helpers/schemaDefBuilder";

export const SUPPRESSED_CONTACT_DOMAIN_MAX = 253;
export const SUPPRESSED_CONTACT_REASON_MAX = 500;

/**
 * One entry of a company's do-not-contact list: an address, a whole domain, or both. No campaign drafts or sends to it.
 * An entry is not edited: it is removed and added again. `source` is set by the server.
 */
export const SuppressedContactSchemaDef = {
    email: {type: "string", required: false, format: "email"},
    domain: {type: "string", required: false, max: SUPPRESSED_CONTACT_DOMAIN_MAX},
    reason: {type: "string", required: false, max: SUPPRESSED_CONTACT_REASON_MAX},
} as const;

export type CreateSuppressedContactFormType = InferCreateForm<typeof SuppressedContactSchemaDef>;
