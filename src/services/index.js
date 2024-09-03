const { Issue } = require("../models");

const issueService = {};

issueService.createIssue = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      res.status(400).json({ success: false, message: "Invalid request body" });
    }
    const issue = await Issue.create({
      title,
      description,
    });
    if (!issue) {
      return res
        .status(500)
        .json({ success: false, message: "Failed to create issue!" });
    }
    console.log(issue);
    return res
      .status(200)
      .json({ success: true, message: "Successfully created issue" });
  } catch (error) {
    return res
      .status(error.status || 500)
      .json({ success: false, error, message: "Failed to create issue!" });
  }
};

issueService.getIssues = async (req, res) => {
  try {
    const issues = await Issue.find({});
    return res.status(200).json({ success: true, data: issues });
  } catch (error) {
    return res
      .status(error.status || 500)
      .json({ success: false, error, message: "Failed to retrieve issues!" });
  }
};

issueService.updateIssue = async (req, res) => {
  try {
    const { id, title, description } = req.body;
    const issue = await Issue.findOne({ _id: id });
    if (!issue) {
      return res
        .status(404)
        .json({ success: false, message: "Issue not found!" });
    }
    issue.title = title;
    issue.description = description;

    const updatedIssue = await issue.save();
    console.log(updatedIssue);
    return res.status(200).json({ success: true, data: updatedIssue });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error, message: "Failed to update issue!" });
  }
};

issueService.deleteIssue = async (req, res) => {
  try {
    const { id } = req.params;
    const issue = await Issue.findOne({ _id: id });
    if (!issue) {
      return res
        .status(404)
        .json({ success: false, message: "Issue not found!" });
    }
    await issue.destroy();
    console.log(`Deleted issue id: ${id}`);
    return res
      .status(200)
      .json({ success: true, message: "Successfully deleted issue!" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error, message: "Failed to delete issue!" });
  }
};

module.exports = {
  issueService,
};
