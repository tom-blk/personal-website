import { query } from '@/app/db/db';
import { TechnologyCache } from '../cache/technology-cache';

export const getAllProjects = async () => {
    try{
        const data = await query('SELECT * FROM Projects');
        return data.rows;
    } catch(error){
        console.error("Error while fetching Data: ", error);
    }
} 

export const getAllPositions = async () => {
    try{
        const data = await query('SELECT * FROM Positions');
        return data.rows;
    } catch(error){
        console.error("Error while fetching Data: ", error);
    }
}

export const getAllTechnologies = async () => {
    try{
        const data = await query('SELECT * FROM Technologies');
        return data.rows;
    } catch(error){
        console.error("Error while fetching Data: ", error);
    }
}

export const getSingleTechnology = async (id: number) => {
    if(TechnologyCache.has(id)){
        return TechnologyCache.get(id);
    }

    try{
        const data = await query('SELECT * FROM Technologies WHERE id = $1', [id]);
        return data.rows[0];
    }catch(error){
        console.error("Error while fetching Data: ", error);
    }
}