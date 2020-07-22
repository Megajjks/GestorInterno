import React from 'react';
import {
  Wrapper,
  WrapperOptionsTask
} from "./styled";
import ListTask from '../../../ui/ListTask'

const Management = () => {
    return ( 
            <Wrapper>
                <ListTask/>
                <WrapperOptionsTask>
                    <h1>Crear Tarea</h1>
                </WrapperOptionsTask>
            </Wrapper>
     );
}
 
export default Management;