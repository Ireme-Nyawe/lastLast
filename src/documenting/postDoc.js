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
 * 
 * /api/post/update/{id}:
 *   put:
 *     summary: Update Blog Post With Provided Id.
 *     tags: [Post-Model]
 *     
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Id Of Post To Update.
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                  type: string
 *                  format: binary
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
 *         description: Well Done, Post Information Updated Successflly.
 *       404:
 *         description: Id Provided Do Not Correspond To Any Post!.
 *       500:
 *         description: Failed To Update Specified Post!
 * 
 * /api/post/delete/{id}:
 *   delete:
 *     summary: Delete A Post.
 *     tags: [Post-Model]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID Of Post To Delete.
 *     responses:
 *       200:
 *         description: A Given Post Deleted Successfully.
 *       404:
 *         description: ID Specified Do Not Correspond To Any Post.
 *       500:
 *         description: Failed to Delete A Post.
 */