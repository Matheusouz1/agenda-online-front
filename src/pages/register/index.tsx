import React from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';

import './style.css'

export interface RegisterProps {
    
}
 
export interface RegisterState {
    
}
 
class Register extends React.Component<RegisterProps, RegisterState> {
    state = {  }
    render() { 
        return (
          <>
          Criar conta
          <Form>
                    <div className="group-two">
                      <div className="group-two2">
                        <Form.Label>Nome da compania</Form.Label>
                        <InputGroup>
                          <FormControl
                            // onChange={this._addTitle.bind(this)}
                            type="text"
                            placeholder=""
                            // defaultValue={this.user.company_name}
                            // onChange={this.changeCompName.bind(this)}
                          />
                        </InputGroup>
                      </div>
                      <div className="group-two2">
                        <Form.Label>Username</Form.Label>
                        <InputGroup>
                          <FormControl
                            // onChange={this._addTitle.bind(this)}
                            type="text"
                            placeholder=""
                            // onChange={this.changeUserame.bind(this)}

                          />
                        </InputGroup>
                      </div>
                    </div>
                    <div className="group-two">
                      <div className="group-two2">
                        <Form.Label>E-mail</Form.Label>
                        <InputGroup>
                          <FormControl
                            // onChange={this._addTitle.bind(this)}
                            type="text"
                            placeholder=""
                            // onChange={this.changeEmail.bind(this)}

                          />
                        </InputGroup>
                      </div>
                      <div className="group-two2">
                        <Form.Label>WhatsApp</Form.Label>
                        <InputGroup>
                          <FormControl
                            // onChange={this._addTitle.bind(this)}
                            type="tel"
                            placeholder=""
                            // onChange={this.changeWhatsapp.bind(this)}
                          />
                        </InputGroup>
                      </div>
                    </div>
                    <div className="link-two">
                      <Form.Label>Link da sua página</Form.Label>
                      <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="basic-addon3">
                            https://agendaonline.com/
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          id="basic-url"
                          aria-describedby="basic-addon3"
                          // onChange={this.changeCompLink.bind(this)}
                        />
                      </InputGroup>
                    </div>
                    <div className="group-two">
                      <div className="group-two2">
                        <Form.Label>Endereço</Form.Label>
                        <InputGroup>
                          <FormControl
                            // onChange={this._addTitle.bind(this)}
                            type="text"
                            placeholder=""
                          />
                        </InputGroup>
                      </div>
                      <div className="group-two2">
                        <Form.Label>CEP</Form.Label>
                        <InputGroup>
                          <FormControl
                            // onChange={this._addTitle.bind(this)}
                            type="text"
                            placeholder=""
                          />
                        </InputGroup>
                      </div>
                    </div>
                    <div className="group-two">
                      <div className="group-two2">
                        <Form.Label>Horário de Abertura</Form.Label>
                        <InputGroup>
                          <FormControl
                            // onChange={this._addTitle.bind(this)}
                            type="time"
                            placeholder=""
                            // defaultValue={this.serviceModal.service.title}
                          />
                        </InputGroup>
                      </div>
                      <div className="group-two2">
                        <Form.Label>Horário de encerramento</Form.Label>
                        <InputGroup>
                          <FormControl
                            // onChange={this._addTitle.bind(this)}
                            type="time"
                            placeholder=""
                            // defaultValue={this.serviceModal.service.title}
                          />
                        </InputGroup>
                      </div>
                    </div>
                    <Form.Label>Biografia</Form.Label>
                    <InputGroup>
                      <FormControl
                        as="textarea"
                        aria-label="With textarea"
                        rows={7}
                        // defaultValue={this.user.bio}

                      />
                    </InputGroup>
                  </Form>
          
          </>
        );
    }
}
 
export default Register;