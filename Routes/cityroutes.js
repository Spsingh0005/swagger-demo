const express = require("express");
const router = express.Router();
const cityController = require("../controllers/cityController");

// City Apis Annotations

// City Schema
/**
 * @swagger
 * tags:
 *   name: City
 *   description: Flight management
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     City:
 *       type: object
 *       required:
 *         - cityId
 *         - name
 *         - country
 *         - description
 *         - popularAttractions
 *         - averageHotelPrice
 *         - averageFlightPrice
 *       properties:
 *         cityId:
 *           type: string
 *           description: City Id
 *         name:
 *           type: string
 *           description: City Name
 *         country:
 *           type: string
 *           description: Country Code
 *         description:
 *           type: string
 *           description: City description
 *         popularAttractions:
 *           type: array
 *           description: Population attraction
 *         averageHotelPrice:
 *           type: number
 *           description: Average hote price
 *         averageFlightPrice:
 *           type: number
 *           description: Average flight price
 *       example:
 *         cityId: CITY003
 *         name: Denver
 *         country: USA
 *         description: Denver, the capital of Colorado, is a vibrant city known for its outdoor activities, including hiking, skiing, and its proximity to the Rocky Mountains.
 *         popularAttractions: ["Denver Botanic Gardens", "Red Rocks Park and Amphitheatre", "Denver Museum of Nature and Science", "Union Station"]
 *         averageHotelPrice: 180
 *         averageFlightPrice: 220
 *
 */

exports.module = router;
