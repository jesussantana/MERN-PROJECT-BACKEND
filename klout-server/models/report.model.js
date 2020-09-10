const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema(
  {
    facebook: {
      follows: { type: Number },
      like: { type: Number },
      rate: { type: Number },
    },
    twitter: {
      follows: { type: Number },
      like: { type: Number },
      rate: { type: Number },
    },
    Instagram: {
      follows: { type: Number },
      like: { type: Number },
      rate: { type: Number },
    },

    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

const Report = mongoose.model("Report", ReportSchema);

module.exports = Report;
