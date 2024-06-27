import ContentDisplay from "../../../components/ContentDisplay";
import { getDocuments } from "../../../lib/doc";
import { getDocumentsByAuthor } from "../../../utils/doc-utils";

export default function AuthorPage({ params: { authorName } }) {
  const docs = getDocuments();
  const matchedDocuments = getDocumentsByAuthor(docs, authorName);
  return <ContentDisplay id={matchedDocuments[0].id} />;
}
