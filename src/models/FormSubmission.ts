// src/models/FormSubmission.ts
import mongoose from 'mongoose';

const FormSchema = new mongoose.Schema({
  tableName: String,
  data: mongoose.Schema.Types.Mixed,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.FormSubmission || mongoose.model('FormSubmission', FormSchema);
