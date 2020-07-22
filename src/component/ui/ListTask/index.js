import React, { useState }  from 'react';
import {
    WrapperListTask,
    WrapperTask
  } from "./styled";
import Task from '../Task';

const ListTask = () => {
    const [tasks, setTasks] = useState([]);

    return ( 
        <WrapperListTask>
            <h1>La Universidad Anáhuac Querétaro</h1>
            <WrapperTask>
                <Task
                    title="Reunión Diaria"
                    description="Realización de reuniones con colegas para identificar soluciones específicas."
                    status="true"
                    priority="low"
                    date="30/06/2020"
                    collaborator="Aldo Salazar"
                ></Task>
                <Task
                    title="Reunión Diaria"
                    description="Realización de reuniones con colegas para identificar soluciones específicas."
                    status="true"
                    priority="low"
                    date="30/06/2020"
                    collaborator="Aldo Salazar"
                ></Task>
            </WrapperTask>
        </WrapperListTask>
     );
}
 
export default ListTask;