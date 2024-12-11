import { v4 as uuidv4 } from "uuid";
import { StableBTreeMap } from "azle";
import express from "express";
import { time } from "azle";

/**
 * docStorage - a key-value data structure used to store documents.
 * {@link StableBTreeMap} acts as a durable and upgrade-safe storage solution.
 *
 * - Key: documentId (string)
 * - Value: Document object
 *
 * Constructor values:
 * 1) 0 - memory id where to initialize the map.
 */
class Document {
  id: string;
  name: string;
  hash: string; // Represents document hash for verification
  owner: string;
  status: string; // e.g., "authenticated", "legalized"
  createdAt: Date;
  updatedAt: Date | null;
}

const docStorage = StableBTreeMap<string, Document>(0);

const app = express();
app.use(express.json());

/**
 * POST /documents
 * Add a new document to the blockchain storage with its hash and metadata.
 */
app.post("/documents", (req, res) => {
  const document: Document = {
    id: uuidv4(),
    createdAt: getCurrentDate(),
    updatedAt: null,
    status: "pending",
    ...req.body,
  };
  docStorage.insert(document.id, document);
  res.json(document);
});

/**
 * GET /documents
 * Retrieve all stored documents.
 */
app.get("/documents", (req, res) => {
  res.json(docStorage.values());
});

/**
 * GET /documents/:id
 * Fetch a specific document using its ID.
 */
app.get("/documents/:id", (req, res) => {
  const documentId = req.params.id;
  const documentOpt = docStorage.get(documentId);
  if (!documentOpt) {
    res.status(404).send(`Document with id=${documentId} not found.`);
  } else {
    res.json(documentOpt);
  }
});

/**
 * PUT /documents/:id
 * Update document status (e.g., "authenticated" or "legalized") or metadata.
 */
app.put("/documents/:id", (req, res) => {
  const documentId = req.params.id;
  const documentOpt = docStorage.get(documentId);
  if (!documentOpt) {
    res.status(400).send(`Couldn't update document with id=${documentId}. Not found.`);
  } else {
    const document = documentOpt;
    const updatedDocument = {
      ...document,
      ...req.body,
      updatedAt: getCurrentDate(),
    };
    docStorage.insert(document.id, updatedDocument);
    res.json(updatedDocument);
  }
});

/**
 * DELETE /documents/:id
 * Delete a document from storage.
 */
app.delete("/documents/:id", (req, res) => {
  const documentId = req.params.id;
  const deletedDocument = docStorage.remove(documentId);
  if (!deletedDocument) {
    res.status(400).send(`Couldn't delete document with id=${documentId}. Not found.`);
  } else {
    res.json(deletedDocument);
  }
});

app.listen();

function getCurrentDate() {
  const timestamp = new Number(time());
  return new Date(timestamp.valueOf() / 1000_000);
}
