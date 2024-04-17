import { query } from '@/app/db/db';
import { TechnologyCache } from '../cache/technology-cache';

export const getAllProjects = async () => {
    try{
        const data = await query('SELECT * FROM Project');
        return data.rows;
    } catch(error){
        console.error("Error while fetching Data: ", error);
    }
} 

export const getAllPositions = async () => {
    try{
        const data = await query('SELECT * FROM Position');
        return data.rows;
    } catch(error){
        console.error("Error while fetching Data: ", error);
    }
}

export const getAllTechnologies = async () => {
    try{
        const data = await query('SELECT * FROM Technology');
        return data.rows;
    } catch(error){
        console.error("Error while fetching Data: ", error);
    }
}

export const getProjectTechnologies = async (projectId: number) => {
    return await getTechnologies('project', projectId)
}

export const getPositionTechnologies = async (positionId: number) => {
    return await getTechnologies('position', positionId)
}

export const getTechnologies = async (projectOrPosition: 'project' | 'position', id: number) => {
    const SQL = projectOrPosition === 'project' 
    ? 'SELECT * FROM (SELECT * FROM Technology AS t LEFT JOIN ProjectTechnologyRelation AS r ON t.id = r.technologyId) AS Combined WHERE projectId = $1'
    : 'SELECT * FROM (SELECT * FROM Technology AS t LEFT JOIN PositionTechnologyRelation AS r ON t.id = r.technologyId) AS Combined WHERE positionId = $1';

    try{
        const data = await query(SQL, [id]);
        return data.rows[0];
    }catch(error){
        console.error("Error while fetching Data: ", error);
    }
}