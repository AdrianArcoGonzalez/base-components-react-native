import {useState} from 'react';

const useForm = <T extends Object>(initialState: T) => {
    const [state, setState] = useState({initialState});

    const onChange = <K extends Object>(value: K, field: string) => {
        setState({...state, [field]: value});
    };
    return {...state, form: state, onChange};
};

export default useForm;
