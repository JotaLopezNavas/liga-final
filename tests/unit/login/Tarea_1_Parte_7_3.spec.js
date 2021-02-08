import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import MyComponent from '../../../src/components/MyComponent'
import MyModule from '../../../src/store/MyModule'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('MyComponent.vue', () => {
  let actions
  let state
  let store

  beforeEach(() => {
    state = {
      clicks: 2
    }

    actions = {
      moduleActionClick: jest.fn()
    }

    store = new Vuex.Store({
      modules: {
        myModule: {
          state,
          actions,
          getters: MyModule.getters
        }
      }
    })
  })

  it('calls store action "moduleActionClick" when button is clicked', () => {
    // Se crea una envoltura que contiene el componente Vue montado y renderizado
    const wrapper = shallowMount(MyComponent, { store, localVue })
    // Se busca por el tipo de elmento, en este caso se busca un botón
    const button = wrapper.find('button')
    button.trigger('click')
    expect(actions.moduleActionClick).toHaveBeenCalled()
  })

  it('renders "state.clicks" in first p tag', () => {
    // Se crea una envoltura que contiene el componente Vue montado y renderizado
    const wrapper = shallowMount(MyComponent, { store, localVue })
    // Se busca por el tipo de elmento, en este caso se busca un párrafo
    const p = wrapper.find('p')
    expect(p.text()).toBe(state.clicks.toString())
  })
})
