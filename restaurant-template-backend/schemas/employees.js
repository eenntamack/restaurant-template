import mongoose from 'mongoose';

// Sub-schema for report data
const reportData = new mongoose.Schema({
  report: { type: String, required: true }
});

// Main employee schema
export const employeeSchema = new mongoose.Schema({
  name: { type: String },
  position: { type: String, enum: ['admin', 'employee', 'superadmin'], default:'employee' },
  role: { type: String },
  reports: [reportData],
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  workdays: [{
    type: String,
    enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  }],
  worktime: {
    start: {type:String},
    end: {type:String}
  },
  team: {
    type: Number
  }
});

// Export model
// export default mongoose.model('Employee', employeeSchema);