import {configureStore} from '@reduxjs/toolkit'
import Headerslice from '../components/Header/Headerslice'
import Homeslice from '../features/main/Homeslice'
import Detailslice from '../pages/Details/Detailslice'
import Cartslice from '../features/cart/Cartslice'
import loginslice from '../pages/login/loginslice'
import categoriesslice from '../pages/categories/categoriesslice'
import livesearchslice from '../pages/livesearch/livesearchslice'






export default configureStore({
    reducer:{
       
        header:Headerslice,
        home:Homeslice,
        detail:Detailslice,
        cart:Cartslice,
        login:loginslice,
        categories:categoriesslice,
        livesearch:livesearchslice
       
       
    }
})