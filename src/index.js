import React from 'react'
import ReactDOM from 'react-dom'

import { Router } from './web/Router'

ReactDOM.hydrate(<Router />, document.querySelector('#root'))
