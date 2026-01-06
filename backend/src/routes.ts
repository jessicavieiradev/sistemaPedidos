import express from 'express';
import db from './config/db.js'
;
const router = express.Router();

router.get('/cardapio', (req, res) => {
    res.send('Cardapio endpoint');
});

router.get('/produtos', async (req, res) => { 
    try {
        const query = `
            SELECT p.*, c.nome AS categoria_nome
            FROM produtos p
            JOIN categorias c ON p.id_categoria = c.id
            WHERE p.ativo = 1;
        `;
        const [rows] = await db.execute(query);
        res.json(rows);
    } catch (error) {
        console.error('Erro na rota /produtos:', error);
        res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
})



export default router;