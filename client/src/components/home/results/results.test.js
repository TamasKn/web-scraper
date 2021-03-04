import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'
import {act} from 'react-dom/test-utils'

import Results from './results'

let container = null
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div')
    document.body.appendChild(container)
})

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container)
    container.remove()
    container = null
})

it('Renders the result section with some data', () => {
    const data = [
        {
            key: 'someword',
            value: 39
        }
    ]
    act(() => {
        render(<Results data={data}/>, container)
    })
    expect(container.querySelector('section').textContent).toBe('someword : 39')

})
