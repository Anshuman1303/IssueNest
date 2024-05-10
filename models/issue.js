/* 
title
description
assigned by
created at
organisation linked to
assigned to?
repo
status
tags
number of comments
issue number
*/

import { Schema, model, models } from "mongoose";

const IssueSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  assigned_by: {
    type: String,
  },
  created_at: {
    type: Date,
  },
  organization_linked_to: {
    type: String,
    required: true,
  },
  assigned_to: {
    type: String,
  },
  repo: {
    type: String,
  },
  status: {
    type: String,
  },
  tags: {
    type: String,
  },
  num_comments: {
    type: Number,
  },
  issue_number: {
    type: Number,
  },
});

const Issue = models.Issue || model("Issue", IssueSchema);

export default Issue;
