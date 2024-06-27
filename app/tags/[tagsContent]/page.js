import ContentDisplay from "../../../components/ContentDisplay";
import { getDocuments } from "../../../lib/doc";
import { getDocumentsByTag } from "../../../utils/doc-utils";

export default function TagContent({ params: { tagsContent } }) {
  const docs = getDocuments();
  const matchedDocuments = getDocumentsByTag(docs, tagsContent);
  return <ContentDisplay id={matchedDocuments[0].id} />;
}
