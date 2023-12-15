import { ConfigProvider} from "antd"
import { ReactNode } from "react"

interface MyConfigProviderProps {
    children: ReactNode
}


export const MyConfigProvider:React.FC<MyConfigProviderProps> = ({children}) =>

<ConfigProvider theme={{
    components: {
        Steps: {
            colorPrimary: '#68B859',
            colorPrimaryBorder: '#68B859',
            navArrowColor: 'red',
            colorTextDescription: '#011602'
        }
    }
}}>
{children}  
</ConfigProvider>


//  const Theme: ThemeConfig = {
//     components: {
//       token: {
//         colorPrimary: '#68B859;'
//       },
//     },
//   }

//   export default Theme;