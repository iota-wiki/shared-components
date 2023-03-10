import * as React from 'react'
import {render} from '@testing-library/react'
import {CodeExampleToSnippet} from '../src'


describe('Common render', () => {
    it('renders without crashing', () => {
        render(<CodeExampleToSnippet language={'java'} code={'test code should stay trimmed'} startString={'code'} endString={'should stay'} />)
    })
})