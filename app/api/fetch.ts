import { query } from '@/app/db/db';

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