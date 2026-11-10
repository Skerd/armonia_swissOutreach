import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {SuppressedContactSchemaDef} from "./suppressedContact.schema-def";

/** Entries have no writable field (they are removed and added again), so an edit is refused before it is read. */
export function editSuppressedContactFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(SuppressedContactSchemaDef, languageCode, form, permissions, readPermissions);
}
