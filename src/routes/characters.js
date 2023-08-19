const express = require("express");
const router = express.Router();

const characterController = require("../controller/characterController");
const characterValidator = require("../validator/characterValidator");
const { uploadFile } = require("../controller/uploadControlller");

/**
 * @swagger
 * components:
 *  schemas:
 *      character:
 *          type: object
 *          properties:
 *              id: 
 *                  type: integer
 *                  descripton: character id
 *              name:
 *                  type: string
 *                  description: character name
 *              image:
 *                  type: string
 *                  description: character image
 *              age:
 *                  type: integer
 *                  description: character age
 *              weight:
 *                  type: decimal
 *                  description: character weight
 *              history:
 *                  type: string
 *                  description: character history
 *              user_id:
 *                  type: integer
 *                  description: id from the creator of this post
 *              createdAt:
 *                  type: date
 *                  description: date created
 *              updatedAt:
 *                  type: date
 *                  description: date updated
 *              deletedAt:
 *                  type: date
 *                  description: date of character delete because i use paranoid
 *          required:
 *              - name
 *              - image
 *              - age
 *              - weight
 *              - history
 *              - user_id
 */

router.post("/", uploadFile, characterController.postCharacter);
/**
 * @swagger
 * 
 * api/v1/characters:
 *   get:
 *     summary: Get all characters
 *     tags: [character]
 *     responses:
 *       '200':
 *         description: Successfully
 *         content:
 *           application/json:
 *             schema: 
 *                  type: array
 *                  items: 
 *                      $ref: '#/components/schemas/character'
 */
router.get("/", characterController.getAllCharacters);
router.get("/:id", characterController.getCharacter);

router.patch("/:id", characterController.updateCharacter);
router.delete("/:id", characterController.deleteCharacter);

module.exports = router;