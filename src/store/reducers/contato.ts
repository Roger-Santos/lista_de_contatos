import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Contatos'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nomeCompleto: 'Anne Hathaway',
      telefone: '+55 21 91234 5678',
      email: 'anne@gmail.com',
      status: enums.Status.NORMAL,
      imagem:
        'https://es.web.img2.acsta.net/pictures/19/10/16/01/22/0121805.jpg'
    },
    {
      id: 2,
      nomeCompleto: 'Bruno Mars',
      telefone: '+55 21 94321 5678',
      email: 'mars@gmail.com',
      status: enums.Status.NORMAL,
      imagem:
        'https://eldiariony.com/wp-content/uploads/sites/2/2017/01/bruno-mars-getty.jpg?w=2600'
    },
    {
      id: 3,
      nomeCompleto: 'Pedrinho',
      telefone: '+55 21 91234 8765',
      email: 'pedrinho@gmail.com',
      status: enums.Status.FAVORITO,
      imagem:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZs48QUix604ageqmCzmG2EnTRtTaaNiL75YHC36W2iw&s'
    },
    {
      id: 4,
      nomeCompleto: 'Angelina Jolie',
      telefone: '+55 21 91234 8765',
      email: 'jolie@gmail.com',
      status: enums.Status.NORMAL,
      imagem:
        'https://media.revistavanityfair.es/photos/661fc056fb9f99fe57dd3442/16:9/w_2560%2Cc_limit/2148400760'
    },
    {
      id: 5,
      nomeCompleto: 'Amanda',
      telefone: '+55 21 91234 8765',
      email: 'amanda@gmail.com',
      status: enums.Status.FAVORITO,
      imagem:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZs48QUix604ageqmCzmG2EnTRtTaaNiL75YHC36W2iw&s'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      const answer = window.confirm('Deseja deletar este contato?')
      if (answer) {
        state.itens = [
          ...state.itens.filter((contato) => contato.id !== action.payload)
        ]
      }
    },
    edit: (state, action: PayloadAction<Contato>) => {
      const contatoIndex = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (contatoIndex >= 0) {
        state.itens[contatoIndex] = action.payload
      }
    },
    createNew: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const onlyContato = state.itens.find(
        (contato) =>
          contato.nomeCompleto.toLowerCase() ===
          action.payload.nomeCompleto.toLowerCase()
      )

      if (onlyContato) {
        alert('Já existe um contatpo com este nome')
      } else {
        const lastContato = state.itens[state.itens.length - 1]
        const newContato = {
          ...action.payload,
          id: lastContato ? lastContato.id + 1 : 1
        }
        state.itens.push(newContato)
      }
    }
  }
})

export const { remove, edit, createNew } = contatosSlice.actions
export default contatosSlice.reducer
