const express = require("express");
const router = express.Router();
const activityController = require("../controllers/activitiesController");

// Define routes for activity-related operations
router.get("/", activityController.getAllActivities);
router.post("/", activityController.createActivity);
router.get("/:activityId", activityController.getActivityById);
router.put("/:activityId", activityController.updateActivity);
router.delete("/:activityId", activityController.deleteActivity);

module.exports = router;
