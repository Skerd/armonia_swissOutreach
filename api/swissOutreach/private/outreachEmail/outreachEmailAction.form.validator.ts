import {z} from "zod";
import {isEmailZod, isObjectIdZod, stringMinMaxLengthZod} from "../../../../../core/helpers/zodBuilder";

/** The email an approve/skip request acts on. */
export function outreachEmailIdFormSchema(languageCode: string, form: any = null) {
    return z.object({
        emailId: isObjectIdZod(form?.["emailIdLabel"] ?? "emailId", languageCode),
    });
}

/** A reviewer's edit of a drafted email: its recipient, subject or body; any part may be left as it is. */
export function editOutreachEmailDraftFormSchema(languageCode: string, form: any = null) {
    return z.object({
        emailId: isObjectIdZod(form?.["emailIdLabel"] ?? "emailId", languageCode),
        toEmail: isEmailZod(form?.["toEmailLabel"] ?? "toEmail", languageCode).optional(),
        subject: stringMinMaxLengthZod(form?.["subjectLabel"] ?? "subject", 1, 300, languageCode).optional(),
        body: stringMinMaxLengthZod(form?.["bodyLabel"] ?? "body", 1, 20000, languageCode).optional(),
    });
}
