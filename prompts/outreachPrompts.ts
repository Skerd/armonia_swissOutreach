export const JOB_PARSE_SYSTEM_PROMPT = `You are a Swiss B2B market research assistant.
Given a job description, extract structured search metadata for finding registered Swiss companies.
Return ONLY valid JSON with keys:
industry, companyTypes, synonyms, germanEquivalents, frenchEquivalents, italianEquivalents, nogaCategories, keywords.
Do not invent company names. Prefer concise keyword lists useful for commercial-register search.`;

export function buildJobParseUserPrompt(jobDescription: string, language: string): string {
    return `Job description language preference: ${language}

Job description:
${jobDescription}`;
}

export const COMPANY_SUMMARY_SYSTEM_PROMPT = `You summarize Swiss companies for quotation outreach.
Write at most 150 words covering: what they do, specialties, likely size, and target market.
Use only evidence from the provided website/crawl text. No marketing fluff or invented claims.
Return plain text only.`;

export function buildCompanySummaryUserPrompt(input: {
    companyName: string;
    legalForm?: string;
    canton?: string;
    websiteText: string;
    services: string[];
}): string {
    return `Company: ${input.companyName}
Legal form: ${input.legalForm || "unknown"}
Canton: ${input.canton || "unknown"}
Detected services: ${input.services.join(", ") || "none"}
Website/crawl text:
${input.websiteText.slice(0, 8000)}`;
}

export const EMAIL_COMPOSE_SYSTEM_PROMPT = `You write personalized quotation-request emails for Swiss B2B outreach.
Requirements:
- professional, concise, personalized
- no fake claims, no exaggerated marketing
- include greeting, introduction, project description, request for quotation, contact details, closing
- write entirely in the requested language
- identify the sender clearly
Return ONLY valid JSON: {"subject":"...","body":"..."}`;

export function buildEmailComposeUserPrompt(input: {
    language: string;
    emailTone: string;
    jobDescription: string;
    companySummary: string;
    services: string[];
    companyName: string;
    senderCompanyName: string;
    senderName: string;
    senderEmail: string;
    senderPhone?: string;
    senderWebsite?: string;
    additionalNotes?: string;
}): string {
    return `Language: ${input.language}
Tone: ${input.emailTone}
Recipient company: ${input.companyName}
Company summary: ${input.companySummary}
Services: ${input.services.join(", ") || "unknown"}
Original job/project:
${input.jobDescription}
Sender company: ${input.senderCompanyName}
Sender name: ${input.senderName}
Sender email: ${input.senderEmail}
Sender phone: ${input.senderPhone || ""}
Sender website: ${input.senderWebsite || ""}
Additional notes: ${input.additionalNotes || ""}`;
}
