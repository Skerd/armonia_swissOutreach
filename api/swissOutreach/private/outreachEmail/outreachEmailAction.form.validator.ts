import {z} from "zod";
import {isObjectIdZod, stringMinMaxLengthZod} from "../../../../../core/helpers/zodBuilder";

/** The email an approve/skip request acts on. */
export function outreachEmailIdFormSchema(languageCode: string, form: any = null) {
    return z.object({
        emailId: isObjectIdZod(form?.["emailIdLabel"] ?? "emailId", languageCode),
    });
}

/** A reviewer's edit of a drafted email; either part may be left as it is. */
export function editOutreachEmailDraftFormSchema(languageCode: string, form: any = null) {
    return z.object({
        emailId: isObjectIdZod(form?.["emailIdLabel"] ?? "emailId", languageCode),
        subject: stringMinMaxLengthZod(form?.["subjectLabel"] ?? "subject", 1, 300, languageCode).optional(),
        body: stringMinMaxLengthZod(form?.["bodyLabel"] ?? "body", 1, 20000, languageCode).optional(),
    });
}
