import { getDocumentsByTag } from "../../utils/doc-utils";
import { getDocuments } from "../../lib/doc"
import ContentDisplay from "../../components/ContentDisplay";

export default function TagContent({ params: { tagsContent } }) {
    const docs = getDocuments();
    const matchedDocuments = getDocumentsByTag(docs, tagsContent);
    return (
        <ContentDisplay id={matchedDocuments[0].id} />
    )
}