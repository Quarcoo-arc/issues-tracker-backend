const express = require("express");
const { issueService } = require("../services");

const router = express.Router();

router.post("/", issueService.createIssue);

router.get("/", issueService.getIssues);

router.put("/", issueService.updateIssue);

router.delete("/:id", issueService.deleteIssue);

module.exports = router;
