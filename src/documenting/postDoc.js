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
 * 
 * /api/post/posts:
 *   get:
 *     summary: View All Available posts.
 *     tags: [Post-Model]
 *     responses:
 *       200:
 *         description: Available Posts Retrieved.
 *       500:
 *         description: Failed to retrieve Available Posts.
 */