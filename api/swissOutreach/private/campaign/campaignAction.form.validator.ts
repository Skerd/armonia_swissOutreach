import {z} from "zod";
import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";

/** The campaign a start/cancel/approve/send request acts on. */
export function campaignIdFormSchema(languageCode: string, form: any = null) {
    return z.object({
        campaignId: isObjectIdZod(form?.["campaignIdLabel"] ?? "campaignId", languageCode),
    });
}
