

import { getDocumentsByCategory } from "../../utils/doc-utils";
import { getDocuments } from "../../lib/doc"
import ContentDisplay from "../../components/ContentDisplay";

export default function CategoryPage({ params: { name } }) {
    const docs = getDocuments();
    const matchedDocuments = getDocumentsByCategory(docs, name);
    return (<ContentDisplay id={matchedDocuments[0].id} />);
}