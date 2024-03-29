import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ACTUALIZAR_TAREA, AGREGAR_TAREA, ELIMINAR_TAREA, ESTADO_TAREA, LIMPIAR_TAREA, TAREAS_PROYECTO, TAREA_ACTUAL, VALIDAR_TAREA } from '../../types';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

const TareaState = props => {
    const initialState = {
        tareas: [
            { id: 1, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
            { id: 2, nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
            { id: 3, nombre: 'Elegir Plataforma de pago', estado: true, proyectoId: 3 },
            { id: 4, nombre: 'Elegir Hosting', estado: true, proyectoId: 4 },
            { id: 5, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
            { id: 6, nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
            { id: 7, nombre: 'Elegir Plataforma de pago', estado: true, proyectoId: 3 },
            { id: 8, nombre: 'Elegir Plataforma', estado: true, proyectoId: 4 },
            { id: 9, nombre: 'Elegir Colores', estado: false, proyectoId: 1 },
            { id: 10, nombre: 'Elegir Plataforma de pago', estado: true, proyectoId: 2 },
            { id: 11, nombre: 'Elegir Plataforma', estado: true, proyectoId: 3 },
            { id: 12, nombre: 'Elegir Colores', estado: false, proyectoId: 4 },
            { id: 13, nombre: 'Elegir Plataforma de pago', estado: true, proyectoId: 3 },
        ],
        tareasproyecto: null,
        errortarea: false,
        tareaseleccionada: null
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    // Crear las funciones

    // Obtener las tareas de un proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        });
    }

    // Agregar una tarea al proyecto seleccionado
    const agregarTarea = tarea => {
        tarea.id = uuidv4();
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        });
    }

    // Valida y muestra un error en caso de que sea necesario
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        });
    }

    // Eliminar tarea por id
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        });
    }

    // Cambia el estado de cada tarea
    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        });
    }

    // Extrae una tarea para edición
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        });
    }

    // Edita o modifica una tarea
    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        });
    }

    // Elimina la tareaseleccionada
    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA
        });
    }

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            { props.children }
        </TareaContext.Provider>
    )
}

export default TareaState;