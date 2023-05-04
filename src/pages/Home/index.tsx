import elevatyLogo from '../../assets/elevatyLogo.png';
import { MagnifyingGlass } from 'phosphor-react';
import { HeaderContainer, ButtonStylesHeader, FormStyles } from './styles';

import { useClient } from '../../hooks/useClients';

import { Disclosure } from '@headlessui/react'
import { CaretDown, Trash } from 'phosphor-react';
import {  Table } from './styles';

export function Home() {
  const { clients } = useClient();

   return (    
    <div>  
      <HeaderContainer> 
      <img src = {elevatyLogo} alt="Logo Elevaty" />
      <FormStyles>
        <input type="date"/>
        <input type="date"/>
        <ButtonStylesHeader>
          <MagnifyingGlass size={23} color='#FFF' weight='bold' />
        </ButtonStylesHeader>
      </FormStyles>

    </HeaderContainer>     

      <Table>      
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Data de nascimento</th> 
            <th></th>
            <th></th>           
          </tr>
        </thead>       
       
        <tbody>
          {clients?.map((item) => (   
            <Disclosure>
              {({  }) => (
                <>
                  <Disclosure.Button >
                    <td key={item.id}>{item.firstname + ' ' + item.lastname}</td>                        
                    <td>{item.birthday}</td> 

                    <td>
                      <CaretDown size={23} weight="bold" color='#808080' />
                    </td>

                    <td>                                
                        <Trash size={23} weight="fill" color='#808080'/>
                    </td>   
                                   
                  </Disclosure.Button>
                  <Disclosure.Panel > 
                    <p><strong>Dados Pessoais:</strong></p>                   
                    <p> Nome Completo: {item.firstname + ' ' + item.lastname}</p>
                    <p> Email: {item.email}</p>
                    <p>Data de nascimento: {item.birthday}</p>
                    <p>Telefone: {item.phone}</p>
                    <br />

                    <p><strong>Endereço:</strong></p>
                    <p>Rua: {item.addresses.streetName}</p>
                    <p>Cidade: {item.addresses.city}</p>
                    <p>Código Postal: {item.addresses.zipcode}</p>
                    <br /> 
                    
                    <p><strong>Carão de Crédito</strong></p>                   
                    <p> Número do Cartão: {item.creditCard.number}</p>
                    <p> Data de expiração: {item.creditCard.expiration}</p>
                    <p>Bandeira: {item.creditCard.type}</p>

                  </Disclosure.Panel>
                </>
              )}
            </Disclosure> 
          ))}      
        </tbody>        
                
      </Table>   
    </div>    
  )
}
