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
 *               fname:
 *                 type: string
 *               lname:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               profile:
 *                 type: string
 *                 format: string
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
 */