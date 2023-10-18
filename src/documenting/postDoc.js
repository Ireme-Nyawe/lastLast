/**
 *  @swagger
 * /api/post/create:
 *   post:
 *     summary: New Blog Creation.
 *     tags: [Post-Model]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Good job, Blog Created Successfully.
 *       500:
 *         description: Blog Creation Failed.
 */