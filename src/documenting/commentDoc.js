/**
 *  @swagger
 * /api/commenting/comment/{id}:
 *   post:
 *     summary: Leave A Comment To Post.
 *     tags: [Comment-Model]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Id Of Post To Comment On.
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               commentBody:
 *                 type: string
 *     responses:
 *       200:
 *         description: Good Job, Your Comment Sent SuccessFullyly.
 *       404:
 *         description: No Post Available!.
 *       500:
 *         description: Failed To Retrive A Given Post!
 * 
 * /api/commenting/comments/:
 *   get:
 *     summary: Viewing All comments in General.
 *     tags: [Comment-Model]
 *     responses:
 *       200:
 *         description: Available Coments Retrieved.
 *       500:
 *         description: Failed to retrieve Available comments.
 * 
 */