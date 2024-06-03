const express = require("express");
const router = express.Router();
const hotelController = require("../controllers/hotelController");

// Swagger Annotation

// Defining Schema
/**
 * @swagger
 * components:
 *  schemas:
 *    Hotel:
 *        type: object
 *        required:
 *          - hotelId
 *          - name
 *          - location
 *          - address
 *          - rating
 *          - pricePerNight
 *          - amenties
 *          - roomsAvailable
 *        properties:
 *          hotelId:
 *             type: string,
 *             description: Hotel id,
 *          name:
 *             type: string,
 *             description: Name is required,
 *          location:
 *             type: string,
 *             description: Location of hotel,
 *          address:
 *             type: string,
 *             description: Address of hotel,
 *          pricePerNight:
 *             type: number,
 *             description: Ratings,
 *          rating:
 *             type: string,
 *             description: Ratings of hotel,
 *          amenities:
 *             type: string,
 *             description: amenities available,
 *          roomsAvailable:
 *             type: number,
 *             description: Number of rooms available,
 */

/**
 * @swagger
 * tags:
 *      name: Hotel
 *      description: Hotel entries management
 */

/**
 * @swagger
 * /hotels:
 *      get:
 *          summary: Get a list of hotels
 *          tags:
 *              - Hotel
 *          responses:
 *            '200' :
 *                description: A list of hotels
 *                content:
 *                  application/json:
 *                     schema:
 *                        $ref: '#/components/schemas/Hotel'
 *
 */

// Define routes for hotel-related operations
router.get("/", hotelController.getAllHotels);
router.post("/", hotelController.createHotel);
router.get("/:hotelId", hotelController.getHotelById);
router.put("/:hotelId", hotelController.updateHotel);
router.delete("/:hotelId", hotelController.deleteHotel);

module.exports = router;
