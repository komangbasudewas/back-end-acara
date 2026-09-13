import express from 'express';
import authController from '../controllers/auth.controller';
import authMiddleware from '../middlewares/auth.middleware';
import { renderMailHtml, sendMail } from '../utils/mail/mail';

const router = express.Router();

router.get("/test-email", async (req, res) => {
    try {
        const content = await renderMailHtml("test-email.ejs", {});
        await sendMail({
            html: content,
            from: "dsuputra5@gmail.com",
            to: "dsuputra5@gmail.com",
            subject: "test email",
        });
        res.status(200).json({
            message: 'Email sent succesfully'
        })
    } catch (error) {
        res.status(500).json({
            message: 'Failed to send email',
        })
    }
})

router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);
router.get('/auth/me', authMiddleware, authController.me);

export default router;
