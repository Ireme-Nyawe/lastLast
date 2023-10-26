/**
 *  @swagger
 * /api/users/signUp/:
 *   post:
 *     summary: Account Creation For New User.
 *     tags: [User-Model]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *               lastname:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               profile:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Good job, Account Created Successfully.
 *       500:
 *         description: Account Creation Failed.
 * 
 * /api/users/signIn/:
 *   post:
 *     summary: User Login.
 *     tags: [User-Model]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 * 
 *     responses:
 *       200:
 *         description: Good job, User Loged In .
 *       500:
 *         description: Account Login Failed.
 * /api/users/getAllUsers/:
 *   get:
 *     summary: View All Available users.
 *     tags: [User-Model]
 *     responses:
 *       200:
 *         description: All Availale Users Retrieved.
 *       500:
 *         description: Failed to retrieve Available Users.
 * 
 * 
 * /api/users/update/{id}:
 *   put:
 *     summary: Update A Given User.
 *     tags: [User-Model]
 *     
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Id Of User To Update.
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                  type: string
 *               lastname:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               profile:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Well Done, Post Information Updated Successflly.
 *       404:
 *         description: Id Provided Do Not Correspond To Any Post!.
 *       500:
 *         description: Failed To Update Specified Post!
 * /api/users/delete/{id}:
 *   delete:
 *     summary: Delete User.
 *     tags: [User-Model]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID Of User To Delete.
 *     responses:
 *       200:
 *         description: A Given Uesr Deleted Successfully.
 *       404:
 *         description: ID Specified Do Not Correspond To Any User.
 *       500:
 *         description: Failed to Delete A User.
 */