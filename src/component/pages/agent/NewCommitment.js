import React, { useState } from 'react';
import styled from 'styled-components';
import CommitmentCard from '../../ui/CommitmentCard';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import axios from "axios";


const Wrapper = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;

const WrapperContainer = styled.div`
    display: flex;
    flex: 18em;
    height:100vh;
    flex-direction: column;
    justify-content:flex-start;
    align-items: center;
    padding: 1em;
`;

const Title = styled.h1`
    text-align: center;
`;

const Information = styled.p`
    margin:0 0 1rem 0;
    padding:0;
    text-align:justify;
`;

const Url = styled.a`
    text-decoration:none;
    color:${({ theme: { colors } }) => colors.primary};
    font-weight: 600;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const WrapperField = styled.div`
    width:100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
`;

const Field = styled.form`
    display:flex;
    flex-direction: column;
    justify-content:flex-start;
    align-content: space-between;
    margin-bottom:1rem;
`;

const Label = styled.label`
    font-weight: 600;
    align-self: flex-start;
    margin-bottom:.5rem;
    max-width:30em;
    color: ${({ theme: { colors } }) => colors.grey};
`;

const Input = styled.input`
    font-weight: 400;
    color: ${({ theme: { colors } }) => colors.black};
    padding: .5rem;
    width: 15em;
    background-color:transparent;
    border: .5px solid #707070;
    border-radius: 5px;
`;

const InputRadio = styled.input`
    align-self:flex-start;
    font-weight: 400;
    color: ${({ theme: { colors } }) => colors.black};
    display:block;
    margin-bottom: 1rem;
`;

const LabelFile = styled.label`
    text-decoration:none;
    cursor: default;
    background-color: ${({ theme: { colors } }) => colors.grey};
    color: ${({ theme: { colors } }) => colors.white};
    font-weight: 600;
    padding:.4em;
    transition: all 150ms ease-out;
    border: none;
    border-radius:2px;
    margin-bottom: 1rem;
    &:hover{
        cursor:pointer;
        transform: translateY(-0.125rem);
		box-shadow: 0 0.25rem 0.5rem 0.25rem rgba(0, 0, 0, 0.16);
	}
    &:active{
        transform: translateY(-0.-125rem);
		box-shadow: none;
    }
`;

const WrapperInputRadio = styled.div`
    display: flex;
    justify-content: flex-start;
`;

const Select = styled.select`
    font-weight: 400;
    color: ${({ theme: { colors } }) => colors.black};
    padding: .5rem;
    width: 16.5em;
    background-color:transparent;
    border: .5px solid #707070;
    border-radius: 5px;
    -webkit-appearance: none;
`;

const TextArea = styled.textarea`
    font-weight: 400;
    color: ${({ theme: { colors } }) => colors.black};
    padding: .5rem;
    width: 37em;
    height:8rem;
    background-color:transparent;
    border: .5px solid #707070;
    border-radius: 5px;
    resize: none;
`;

const Btn = styled.button`
    text-decoration:none;
    cursor: default;
    background-color: ${({ theme: { colors } }) => colors.primary};
    color: ${({ theme: { colors } }) => colors.white};
    font-weight: 600;
    padding:.8em;
    transition: all 150ms ease-out;
    border: none;
    margin-bottom: 1rem;
    &:hover{
        cursor:pointer;
        transform: translateY(-0.125rem);
		box-shadow: 0 0.25rem 0.5rem 0.25rem rgba(0, 0, 0, 0.16);
	}
    &:active{
        transform: translateY(-0.-125rem);
		box-shadow: none;
    }
`;
const TxtRequired = styled.span`
    color: red;
    font-weight: 400;
`;

const NewCommitment = () => {

    const [previewCommitment, setPreviewCommitment] = useState({
        id:'1',
        logo:'',
        title:'', 
        organization:'', 
        brief:'', 
        location:'', 
        status:'validando'
    })

    const [commitment, setCommitment] = useState({
        first_name:'',
        last_name:'',
        organization:'',
        sector:'',
        city:'',
        state:'',
        position:'',
        email:'',
        phone:'',
        logo:'',
        img:'',
        title:'',
        question_1:'',
        question_2:'',
        question_3:'',
        question_4:'',
        question_5:'',
        question_6:'',
        question_7:'',
        question_8:'',
        question_9:'',
        question_10:'',
        question_11:'',
        question_12:'',
        send_emails:false,
        agree:false,
    })

    const [error, setError] = useState({
        status: false,
        message:'',
    })

      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setError({
            ...error,
            status: false,
        });
      };

    const handleOnChange = e =>{
        setCommitment({
            ...commitment,
            [e.target.name] : e.target.value
        })
        setPreviewCommitment({
            ...previewCommitment,
            title: commitment.title, 
            organization: commitment.organization, 
            brief:commitment.question_1, 
            location:commitment.city, 
        })
    }

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }

    const validateData = () =>{
        if(commitment.first_name==='' || commitment.last_name==='' || 
            commitment.organization==='' || commitment.sector==='' ||
            commitment.city==='' || commitment.state==='' ||
            commitment.position==='' || commitment.email==='' ||
            commitment.phone==='' || commitment.title==='' ||            
            commitment.logo==='' || commitment.img==='' ||
            commitment.question_1==='' || commitment.question_2==='' ||
            commitment.question_2==='' || commitment.question_3==='' ||
            commitment.question_4==='' || commitment.question_5==='' ||
            commitment.question_6==='' || commitment.question_7==='' ||
            commitment.question_8==='' || commitment.question_10==='' ||
            commitment.question_11==='' || commitment.question_12==='' ||
            commitment.agree=== false
        ){
            setError({
                status:true,
                message:'¡Ups!, parace que tienes campos sin rellenar.'
            })
        } else{
            setError({
                status:false,
                message:''
            })
            sendData();   
        }
    }

    const sendData = async() =>{
        try{
            //const response = await axios.post('http://localhost:5000/commitment',{commitment})
            const response = await axios.post(
                'http://localhost:5000/commitment',
                commitment
            )
            console.log('👉 Returned data:', response)
            setError({
                status:false,
                message:''
            })
        } catch (e) {
            setError({
                status:true,
                message:'Vaya, estamos teniendo problemas de conexión al enviar tus datos, intenta de nuevo'
            })
            console.log(`😱 Axios request failed: ${e}`)
        }
    }

    return (  
        <Wrapper>
            <WrapperContainer style={{width:'300px'}}>
                <Title>Vista previa</Title>
                <CommitmentCard data={previewCommitment} />
                <Information style={{padding:'.5em 1em'}}>
                ¿Tienes dudas? Para analizar a profundidad las actividades y recursos 
                involucrados en la construcción de tu compromiso, puedes hacer el ejercicios 
                de <Url href = 'http://millonesdeagentesdecambio.org/wp-content/uploads/2019/08/guiadecompromisos.pdf' target="_blank"> Canvas de Compromisos. </Url> 
                </Information>
            </WrapperContainer>
            <WrapperContainer>
                <Title>Estas a unos pasos de cambiar tu entorno</Title>
                <Information>
                ¡Estás un paso más cerca de contribuir a un México de #MillonesdeAgentesdeCambio! 
                Con tu impacto y proyecciones a futuro puedes impulsar a más personas a cambiar 
                su realidad.
                </Information>
                <Form>
                    <h3>Datos generales</h3>
                    <WrapperField>
                        <Field>
                            <Label>Nombre(s) <TxtRequired>*</TxtRequired></Label>
                            <Input type='text' name='first_name' value={commitment.first_name} onChange={handleOnChange}/>
                        </Field>
                        <Field>
                            <Label>Apellido(s) <TxtRequired>*</TxtRequired></Label>
                            <Input type='text' name='last_name' value={commitment.last_name} onChange={handleOnChange}/>
                        </Field>
                    </WrapperField>
                    <WrapperField>
                        <Field>
                            <Label>Organización <TxtRequired>*</TxtRequired></Label>
                            <Input type='text' name='organization' value={commitment.organization} onChange={handleOnChange}/>
                        </Field>
                        <Field>
                            <Label>Sector(s) <TxtRequired>*</TxtRequired></Label>
                            <Select name='sector' value={commitment.sector} onChange={handleOnChange}>
                                <option value="">-- Seleccione --</option>
                                <option value="academia">Academia</option>
                                <option value="sector_publico">Sector público</option>
                                <option value="sector_privado">Sector privado</option>
                                <option value="org_soc_civ">Organización de la sociedad civil</option>
                                <option value="ciudadania">Ciudadanía</option>
                            </Select>
                        </Field>
                    </WrapperField>
                    <WrapperField>
                        <Field>
                            <Label>Ciudad <TxtRequired>*</TxtRequired></Label>
                            <Input type='text' name='city' value={commitment.city} onChange={handleOnChange}/>
                        </Field>
                        <Field>
                            <Label>Estado <TxtRequired>*</TxtRequired></Label>
                            <Select name='state' value={commitment.state} onChange={handleOnChange}>
                                <option value="">-- Seleccione --</option>
                                <option value="aguascalientes">Aguascalientes</option>
                                <option value="baja_california">Baja California</option>
                                <option value="baja_california_cur">Baja California Sur</option>
                                <option value="campeche">Campeche</option>
                                <option value="chiapas">Chiapas</option>
                                <option value="chihuahua">Chihuahua</option>
                                <option value="cdmx">Ciudad de México</option>
                                <option value="coahuila">Coahuila</option>
                                <option value="colima">Colima</option>
                                <option value="durango">Durango</option>
                                <option value="estado_de_méxico">Estado de México</option>
                                <option value="guanajuato">Guanajuato</option>
                                <option value="guerrero">Guerrero</option>
                                <option value="hidalgo">Hidalgo</option>
                                <option value="jalisco">Jalisco</option>
                                <option value="michoacán">Michoacán</option>
                                <option value="morelos">Morelos</option>
                                <option value="nayarit">Nayarit</option>
                                <option value="nuevo León">Nuevo León</option>
                                <option value="oaxaca">Oaxaca</option>
                                <option value="puebla">Puebla</option>
                                <option value="querétaro">Querétaro</option>
                                <option value="quintana_roo">Quintana Roo</option>
                                <option value="san_luis_potosí">San Luis Potosí</option>
                                <option value="sinaloa">Sinaloa</option>
                                <option value="sonora">Sonora</option>
                                <option value="tabasco">Tabasco</option>
                                <option value="tamaulipas">Tamaulipas</option>
                                <option value="tlaxcala">Tlaxcala</option>
                                <option value="veracruz">Veracruz</option>
                                <option value="yucatán">Yucatán</option>
                                <option value="zacatecas">Zacatecas</option>
                            </Select>
                        </Field>
                    </WrapperField>
                    <WrapperField>
                        <Field>
                            <Label>Cargo <TxtRequired>*</TxtRequired></Label>
                            <Input type='text' name='position' value={commitment.position} onChange={handleOnChange}/>
                        </Field>
                        <Field>
                            <Label>Correo electronico <TxtRequired>*</TxtRequired></Label>
                            <Input type='email' name='email' value={commitment.email} onChange={handleOnChange}/>
                        </Field>
                    </WrapperField>
                    <Field>
                        <Label style={{width:'30em'}}>Telefono <TxtRequired>*</TxtRequired></Label>
                        <Input type='text' name='phone' value={commitment.phone} onChange={handleOnChange}/>
                    </Field>
                    <Field>
                        <Label>Ponle un titulo a tu compromiso <TxtRequired>*</TxtRequired></Label>
                        <Input name='title' value={commitment.title} onChange={handleOnChange} style={{width:'37em'}} />
                    </Field>
                    <Field>
                        <Label>Breve descripción de tu proyecto/iniciativa/emprendimiento <TxtRequired>*</TxtRequired></Label>
                        <TextArea name='question_1' value={commitment.question_1} onChange={handleOnChange} />
                    </Field>
                    <Field>
                        <Label>Redes sociales de tu proyecto/iniciativa/emprendimiento <TxtRequired>*</TxtRequired></Label>
                        <TextArea name='question_2' value={commitment.question_2} onChange={handleOnChange} />
                    </Field>
                    
                    <Field>
                        <Label style={{width:'30em'}}>Logo <TxtRequired>*</TxtRequired></Label>
                        <input
                            type='file'
                            name='logo'
                            accept="image/*"
                            id="imglogo"
                            onChange={handleOnChange}
                            style={{display:'none'}}
                        />
                        <LabelFile for="imglogo"> {commitment.logo? commitment.logo : 'Selecciona una imagen' } </LabelFile>
                    </Field>
                    <Field>
                        <Label style={{width:'30em'}}>Adjunte una fotografía que refle tu impacto <TxtRequired>*</TxtRequired></Label>
                        <input
                            type='file'
                            name='img'
                            accept="image/png, .jpeg, .jpg"
                            id="imgimpacto"
                            onChange={handleOnChange}
                            style={{display:'none'}}
                        />
                        <LabelFile for="imgimpacto"> {commitment.img? commitment.img : 'Selecciona una imagen' } </LabelFile>
                    </Field>

                    <h3>Construye tu compromiso</h3>
                    <Information>
                    A continuación, queremos saber más sobre tu compromiso con este movimiento. 
                    Tu compromiso debe hacer referencia a una acción nueva o expandida, medible 
                    y específica que tú, tu institución o socios, estén tomando para apoyar la 
                    activación o el equipamiento de más agentes de cambio.
                    </Information>

                    <Field>
                        <Label>¿Qué organizaciones o personas se comprometen? <TxtRequired>*</TxtRequired></Label>
                        <TextArea name='question_3' value={commitment.question_3} onChange={handleOnChange} />
                    </Field>
                    <Field>
                        <Label>¿Qué acción se va a implementar? <TxtRequired>*</TxtRequired></Label>
                        <TextArea name='question_4' value={commitment.question_4} onChange={handleOnChange} />
                    </Field>
                    <Field>
                        <Label>¿En qué periodo de tiempo se va a realizar el compromiso? <TxtRequired>*</TxtRequired></Label>
                        <TextArea name='question_5' value={commitment.question_5} onChange={handleOnChange} />
                    </Field>
                    <Field>
                        <Label>¿Tu compromiso cómo contribuye a generar más Agentes de Cambio? <TxtRequired>*</TxtRequired></Label>
                        <TextArea name='question_6' value={commitment.question_6} onChange={handleOnChange} />
                    </Field>
                    <Field>
                        <Label>¿Cuántos Agentes de Cambio impactarás con este compromiso? <TxtRequired>*</TxtRequired></Label>
                        <TextArea name='question_7' value={commitment.question_7} onChange={handleOnChange} />
                    </Field>
                    <Field >
                        <Label>¿De qué manera Ashoka y su red pueden ayudarte a escalar el impacto de tu
                        compromiso? <TxtRequired>*</TxtRequired></Label>
                            <WrapperInputRadio>
                                <InputRadio type='checkbox' name='question_8' value='1' checked={commitment.question_8==='1'} onChange={handleOnChange}/> Vinculación con actores clave 
                            </WrapperInputRadio>
                            <WrapperInputRadio>
                                <InputRadio type='checkbox' name='question_8' value='2' checked={commitment.question_8==='2'} onChange={handleOnChange}/> Herramientas y metodologías para impulsar la innovación social y la agencia de cambio
                            </WrapperInputRadio>
                            <WrapperInputRadio>
                                <InputRadio type='checkbox' name='question_8' value='3' checked={commitment.question_8==='3'} onChange={handleOnChange}/> Asesorías especializadas
                            </WrapperInputRadio>
                            <WrapperInputRadio>
                                <InputRadio type='checkbox' name='question_8' value='4' checked={commitment.question_8==='4'} onChange={handleOnChange}/> Fondos para escalar la iniciativa
                            </WrapperInputRadio>
                            <WrapperInputRadio>
                                <InputRadio type='checkbox' name='question_8' value='5' checked={commitment.question_8==='5'} onChange={handleOnChange}/> Difusión y comunicación
                            </WrapperInputRadio>
                            <WrapperInputRadio>
                                <InputRadio type='checkbox' name='question_8' value='6' checked={commitment.question_8==='6'} onChange={handleOnChange}/> Otro
                            </WrapperInputRadio>
                    </Field>
                    <Field>
                        <Label>En caso de tener una necesidad distinta a estos, favor de especificarlo a continuación:</Label>
                        <TextArea name='question_9' value={commitment.question_9} onChange={handleOnChange} />
                    </Field>
                    <Field>
                        <Label>¿Cómo te enteraste de #MillonesdeAgentesdeCambio? <TxtRequired>*</TxtRequired></Label>
                        <Select name='question_10' style={{width:'37em'}} value={commitment.question_10} onChange={handleOnChange}>
                                <option value="">-- Seleccione --</option>
                                <option value="ashoka_staff">Ashoka Staff</option>
                                <option value="aliados_de_difusion">Aliados de Difusión</option>
                                <option value="facebook">Facebook</option>
                                <option value="instagram">Instagram</option>
                                <option value="twitter">Twitter</option>
                                <option value="linkedin">LinkedIn</option>
                                <option value="Sesion_de_compromisos">Sesión de Compromisos</option>
                                <option value="conector_ashoka">Conector Ashoka</option>
                                <option value="embajador_ashoka">Embajador Ashoka</option>
                                <option value="sitio_web">Sitio Web Ashoka</option>
                                <option value="otro">otro</option>
                        </Select>
                    </Field>
                    <Field>
                        <Label>En caso de colocar otro o si quieres especificar, favor de especificarlo a continuación</Label>
                        <TextArea name='question_11' value={commitment.question_11} onChange={handleOnChange} />
                    </Field>
                    <Field>
                        <Label>Comentario o Duda Adicional</Label>
                        <TextArea name='question_12' value={commitment.question_12} onChange={handleOnChange} />
                    </Field>

                    <WrapperInputRadio>
                        <InputRadio type='checkbox' name='send_emails' checked={commitment.send_emails} onChange={()=>setCommitment({...commitment,send_emails:!commitment.send_emails})}/> Me gustaría recibir actualizaciones y noticias por correo electrónico sobre Ashoka. 
                    </WrapperInputRadio>
                    <WrapperInputRadio style={{marginBottom:'1rem'}}>
                        <InputRadio type='checkbox' name='agree' checked={commitment.agree} onChange={()=>setCommitment({...commitment,agree:!commitment.agree})}/> Acepto que mi compromiso sea compartido públicamente y que mi nombre y dirección de 
                        correo electrónico sean compartidos con otras personas que se comprometan. 
                    </WrapperInputRadio>

                    <Information>
                    Al enviar este formulario, usted reconoce que sus datos personales se procesarán 
                    fuera del EEE tal como descrito en la <Url href = 'https://www.ashoka.org/es/privacy-policy' target="_blank">Política de Privacidad</Url>.
                    </Information>

                    <Btn type='button' onClick={validateData}>Comprometerme</Btn>

                    <Information>
                    *Si tu compromiso es aprobado, la información que proporciones para los campos requeridos 
                    puede ser utilizada para compartir el compromiso públicamente. Por favor, no incluyas 
                    ninguna información privada o confidencial.   
                    </Information>
                    <Information>
                    Nota: Se pueden presentar múltiples compromisos por organización.  El Líder para cada compromiso 
                    debe ser la persona que completa este formulario.  El responsable del compromiso actuará como 
                    punto de contacto oficial de Ashoka en relación con este y deberá ser capaz de aprobar cualquier 
                    texto que se comparta públicamente sobre este compromiso.
                    </Information>

                </Form>
            </WrapperContainer>
            <Snackbar open={error.status} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    { error.message }
                </Alert>
            </Snackbar>
        </Wrapper>
    )
}
 
export default NewCommitment;