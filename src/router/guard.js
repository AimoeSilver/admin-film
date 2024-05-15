import router from './index'
import Cookies from 'js-cookie'
import { getToken , setToken} from '@/utils/cookies'

router.beforeEach((to, from,next) => {
    const token = getToken()
    // 判断 token 是否存在
    if (to.name != 'Login' && !token ) {
        
        next('/login')
        
    }else {
        // 可以进入 router
        next() 
    }
       
        
  })

