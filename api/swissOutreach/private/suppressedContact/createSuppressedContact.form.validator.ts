import {z} from "zod";
import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {getValidationMessage, isFormatZod} from "../../../../../core/helpers/zodBuilder";
import {SuppressedContactSchemaDef} from "./suppressedContact.schema-def";

/** A host name such as `example.ch` (labels of letters, digits and inner hyphens, a letter TLD). */
const DOMAIN_PATTERN = /^(?=.{1,253}$)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$/i;

/** An address, a domain, or both; at least one. */
export function createSuppressedContactFormSchema(languageCode: string, form: any = null) {
    const emailLabel = form?.["emailLabel"] ?? "email";
    const domainLabel = form?.["domainLabel"] ?? "domain";
    return buildCreateZodSchema(SuppressedContactSchemaDef, languageCode, form)
        .extend({
            domain: z.preprocess(
                (value) => (typeof value === "string" ? value.trim() || undefined : value),
                isFormatZod(domainLabel, DOMAIN_PATTERN, "example.ch", languageCode).optional(),
            ),
        })
        .refine((value) => Boolean(value.email || value.domain), {
            message: getValidationMessage("form", "oneOfRequired", [emailLabel, domainLabel], languageCode),
            path: ["email"],
        });
}
