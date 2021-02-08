import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Getters from '../../../src/components/Getters'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Getters.vue', () => {
  let getters
  let store

  beforeEach(() => {
    getters = {
      clicks: () => 2,
      inputValue: () => 'input'
    }

    store = new Vuex.Store({
      getters
    })
  })

  it('Renders "store.getters.inputValue" in first p tag', () => {
    // Se crea una envoltura que contiene el componente Vue montado y renderizado
    const wrapper = shallowMount(Getters, { store, localVue })
    // Se busca por el tipo de elmento, en este caso se busca un párrafo
    const p = wrapper.find('p')
    expect(p.text()).toBe(getters.inputValue())
  })

  it('Renders "store.getters.clicks" in second p tag', () => {
    // Se crea una envoltura que contiene el componente Vue montado y renderizado
    const wrapper = shallowMount(Getters, { store, localVue })
    // Se busca por el tipo de elmento, en este caso se busca un párrafo
    const p = wrapper.findAll('p').at(1)
    expect(p.text()).toBe(getters.clicks().toString())
  })
})