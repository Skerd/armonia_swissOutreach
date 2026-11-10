import {isArrayOfObjectIdsZod} from "../../../../../core/helpers/zodBuilder";
import {withTableFormValidator} from "../../../../../core/utilities/zod/shared.validator";

/** The list form, plus `ids`: only these prospects (the approval queue loads the prospects of the emails it shows). */
export function prospectCompanyListFormSchema(languageCode: string, form: any = null) {
    return withTableFormValidator(languageCode, form, {
        ids: isArrayOfObjectIdsZod(form?.["idsLabel"] ?? "ids", languageCode, {max: 200}).optional(),
    });
}
