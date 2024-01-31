import { createStore } from 'vuex'

import { bestsellers } from './bestsellers'
import { coffee } from './coffee'
import { goods } from './goods'
import { links } from './links'

export const store = createStore({

    modules: {
        bestsellers,
        coffee,
        goods,
        links
    }

    
})