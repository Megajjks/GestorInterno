import {actions} from './actions';

export const reducer = (state, action) => {
    switch(action.type) {
        case actions.getDataForm:
            return {
                ...state,
                dataFormLoading: true,
                dataFormError: null
            };
        case actions.getDataFormSuccess:
            return {
                ...state,
                dataFormLoading: true,
                dataFormError: null,
                dataForm: action.payload
            };
        case actions.getDataFormError:
            return {
                ...state,
                dataFormLoading: false,
                dataFormError: action.payload,
                dataForm: {}
            };
        case actions.getQuestions:
            return {
                ...state,
                questionsLoading: true,
                questionsError: null
            };
        case actions.getQuestionsSuccess:
            return {
                ...state,
                questionsLoading: true,
                questionsError: null,
                questions: action.payload
            };
        case actions.getQuestionsError:
            return {
                ...state,
                questionsLoading: false,
                dataFormError: action.payload,
                questions: []
            };
        case actions.setOption:
            return {
                ...state,
                option: action.payload
            };
        case actions.setIdCommitment:
            return {
                ...state,
                idCommitment: action.payload
            };
        case actions.openModalFeedback:
            return {
                ...state,
                modalFeedback: action.payload
            };
        case actions.closeModalFeedback:
            return {
                ...state,
                modalFeedback: action.payload
            };
        case actions.openOptionAcceptFeedback:
            return {
                ...state,
                optionAcceptFeedback: action.payload
            };
        case actions.closeOptionAcceptFeedback:
            return {
                ...state,
                optionAcceptFeedback: action.payload
            };
        case actions.openEditCommitmentModal:
            return {
                ...state,
                showEditCommitmentModal: action.payload
            };
        case actions.closeEditCommitmentModal:
            return {
                ...state,
                showEditCommitmentModal: action.payload
            };
        default:
            return state;
    }
}