/**
 *  @swagger
 * /api/post/create/:
 *   post:
 *     summary: Create New Blog  Post.
 *     tags: [Post-Model]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *               title:
 *                 type: string
 *               header:
 *                 type: string
 *               category:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Good job, Pos Created Successfully.
 *       500:
 *         description: Post Creation Failed.
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
 * 
 * /api/post/one/{id}:
 *   get:
 *     summary: View Specific Post.
 *     tags: [Post-Model]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID Of Post To View.
 *     responses:
 *       200:
 *         description: A Given Post Retrived Successfully.
 *       404:
 *         description: ID Specified Do Not Correspond To Any Post.
 *       500:
 *         description: Failed to retrieve A Post.
 */