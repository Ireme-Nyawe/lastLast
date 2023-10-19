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
 *               CommentBody:
 *                 type: string
 *     responses:
 *       200:
 *         description: Good Job, Your Comment Sent SuccessFullyly.
 *       404:
 *         description: No Post Available!.
 *       500:
 *         description: Failed To Retrive A Given Post!
 * 
 */