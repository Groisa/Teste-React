import { useState } from 'react'
import { Card } from 'react-bootstrap'
import { propTypes } from 'react-bootstrap/esm/Image'
import styled from "styled-components"


const EscopoCSSBorder = {
    BordeTopLeft: '',
    BorderTopRigth: '',
    BorderButtonRigth: '',
    BorderButtonLeft: ''
}
function Border() {
 
    const [divColor, setDivcolor] = useState('')
    const [formDados, setFormDados] = useState(EscopoCSSBorder)
    const ValueHlander = (event) => {
        setFormDados({
            ...formDados,
            [event.target.name]: event.target.value
        })
    }
    console.log(formDados)
    return (
        <>
            <div className='d-flex justify-content-center'>
                <DivStyled>
                    <InputStyled
                        value={formDados.BordeTopLeft}
                        name="BordeTopLeft"
                        onChange={ValueHlander} />
                    <InputStyled
                        value={formDados.BorderTopRigth}
                        name="BorderTopRigth"
                        onChange={ValueHlander}
                    />
                </DivStyled>
            </div>
            <div className='text-center d-flex  justify-content-center'>
                <Card style={{ width: '19rem' }}>
                    <Card.Body>
                        <Card.Text>
                            <p>border-top-left-radius:<InoputStyle2 value={formDados.BordeTopLeft} />px;</p>
                            <p>border-top-right-radius:<InoputStyle2 value={formDados.BorderTopRigth} />px;</p>
                            <p>border-bottom-right-radius:<InoputStyle2 value={formDados.BorderButtonRigth} />px;</p>
                            <p>border-bottom-left-radius:<InoputStyle2 value={formDados.BorderButtonLeft} />px;</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className='d-flex justify-content-center'>
                <DivStyled>
                    <InputStyled
                        value={formDados.BorderButtonRigth}
                        name="BorderButtonRigth"
                        onChange={ValueHlander} />
                    <InputStyled
                        value={formDados.BorderButtonLeft}
                        name="BorderButtonLeft"
                        onChange={ValueHlander} />
                </DivStyled>
            </div>
            <div className=' d-flex justify-content-center'>
                <Cardbox 
                top={formDados.BordeTopLeft} 
                left={formDados.BorderButtonRigth} 
                bottom={formDados.BorderButtonLeft}
                right={formDados.BorderTopRigth}
                >
                    <span></span>
                </Cardbox>
            </div>
        </>
    )
}
const InoputStyle2 = styled.input`
    width: 30px;
    margin-left: 5px;
    border: none;
`
const InputStyled = styled.input`
    width: 35px;
    height: 35px;
`
const DivStyled = styled.div`
    display: flex;
    width: 350px;
    padding-top: 10px;
    padding-bottom: 10px;
    justify-content: space-between;
`
const Cardbox = styled.div`
background: red;
width: 280px;
height: 280px;
margin-bottom: 30px;
color: red;
border: solid 3px;
border-radius: ${props => `${props.top || 0}px ${props.right || 0}px ${props.bottom || 0}px ${props.left || 0}px`};

`
export default Border