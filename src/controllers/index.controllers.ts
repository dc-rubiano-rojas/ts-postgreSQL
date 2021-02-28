import { Request, Response } from 'express';
import { QueryResult } from 'pg';
import { pool } from '../database';


export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    try{
        const response: QueryResult = await pool.query('SELECT * FROM users');
        return res.status(200).json(response.rows);
    }catch(e){
        console.log(e);
        return res.status(500).json('Internal Server Error');
    }
};


export const getUserById = async (req: Request, res: Response): Promise<Response> => {
    try{
        const id = req.params.id;
        const response: QueryResult = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        return res.status(200).json(response.rows);
    }catch(e){
        console.log(e);
        return res.status(500).json('Internal Server Error');
    }
}


export const createUser = async (req: Request, res: Response): Promise<Response> => {
    try{
        const {name, email} = req.body;
        const response: QueryResult = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
        return res.status(200).json({
            ok: true,
            msg: 'Usuario creado!',
            body: {
                user: {
                    name,
                    email
                }
            }
        });
    }catch(e){
        console.log(e);
        return res.status(500).json('Internal Server Error');
    }
}



export const updateUser = async (req: Request, res: Response): Promise<Response> => {
    try{
        const {name, email} = req.body;
        const id = parseInt(req.params.id);
        const response: QueryResult = await pool.query('UPDATE users SET name=$1, email=$2 WHERE id=$3', [name, email, id]);
        return res.status(200).json({
            ok: true,
            msg: 'Usuario Actualizado!',
            body: {
                user: {
                    name,
                    email
                }
            }
        });
    }catch(e){
        console.log(e);
        return res.status(500).json('Internal Server Error');
    }
}



export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    try{
        const id = parseInt(req.params.id);
        await pool.query('DELETE FROM users WHERE id=$1', [id]);
        return res.status(200).json({
            ok: true,
            msg: 'Usuario Eliminado!',
        });
    }catch(e){
        console.log(e);
        return res.status(500).json('Internal Server Error');
    }
}