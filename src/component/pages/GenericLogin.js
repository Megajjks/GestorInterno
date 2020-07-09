import React, {useState} from 'react';
import { useHistory, Link } from 'react-router-dom';
import styled from "styled-components";
import GeneralButton from '../GeneralButton';
import TextField from '@material-ui/core/TextField';
import LoginImg from '../../assets/img/imageLogin.jpg';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Wrapper = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:100vh;
`;

const Img = styled.img`
    width:40%;
    height:100%;
`;

const WrapperForm = styled.div`
    width:60%;
    height:inherit;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-end;
`;

const Form = styled.form`
    align-self:center;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin:0 0 4em 0;
`;

const Title = styled.h1 `
    width:8em;
    color: ${(props) => props.theme.colors.greyTitle};
    text-align: center;
    font-weight:900;
    font-size:3em;
`;

const BtnExtra = styled(Link)`
    text-decoration:none;
    color:${(props) => props.theme.colors.primary};
    font-weight:400;
    padding:1em 2em;
    margin:0 0 5em 0;
`;

const SignIn = styled.p`
    align-self:center;
    margin:0;
    padding:0;
    font-weight:400;
    margin-top:-2em;
`;

const GenericLogin = () =>{
    const history = useHistory();
    const [email, updateEmail] = useState('')
    const [password, updatePassword] = useState('')
    const LOGIN_URL = 'http://localhost:5000/login'

    const submitData = async (e) => {
        e.preventDefault();
        try {
            if (email.trim() === '' || password === '') {
                handleClickOpen()
                return;
            }
            const response = await axios.post(LOGIN_URL, {
                email: email,
                password: password
            })
            if (response.data == "Email or password are incorrect") {
                handleClickOpen()
                return;
            }
            if (response.data.role === "admin") {
                history.push('/dasboard_admin')
            } else {
                history.push('/dasboard')
            }
            const loginData = {
                accessToken: response.data.accessToken,
                refreshToken: response.data.refreshToken,
                first_name: response.data.first_name,
                role: response.data.role
            }
            localStorage.setItem('login_data', JSON.stringify(loginData))
        } catch(error) {
            return console.log('Credentials are not valid')
        }
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <Wrapper>
            <Img src={LoginImg}/>
            <WrapperForm>
                <BtnExtra>Regresar</BtnExtra>
                <Form
                    onSubmit={submitData}
                >
                    <Title>BIENVENIDO DE NUEVO</Title>
                    <TextField 
                        type="email"
                        name="email"
                        label="EMAIL" 
                        color="secondary" 
                        fullWidth
                        onChange={e => updateEmail(e.target.value)}
                        value={email}
                        style={{marginTop:"10px"}}
                    />
                    <TextField 
                        type="password"
                        name="password"
                        label="CONTRASEÑA" 
                        fullWidth
                        color="secondary" 
                        onChange={e => updatePassword(e.target.value)}
                        value={password}
                        style={{marginTop:"10px", marginBottom:"20px"}}
                    />
                    <GeneralButton title='Login'/>
                </Form>
                <SignIn>
                    ¿Aun no tienes una cuenta?, <BtnExtra style={{padding:'0'}}>Registrate</BtnExtra>
                </SignIn>
            </WrapperForm>
            <>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{""}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Los campos que has ingresado no son correctos, por favor verificalos y 
                        vuelve a intentarlo.
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cerrar
                    </Button>
                    </DialogActions>
                </Dialog>
            </>
        </Wrapper>
    )
}

export default GenericLogin;