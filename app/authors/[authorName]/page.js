import { getDocumentsByAuthor } from "../../utils//doc-utils";
import { getDocuments } from "../../lib/doc"
import ContentDisplay from "../../components/ContentDisplay";

export default function AuthorPage({ params: { authorName } }) {
    const docs = getDocuments();
    const matchedDocuments = getDocumentsByAuthor(docs, authorName);
    return (
        <ContentDisplay id={matchedDocuments[0].id} />
    )
}