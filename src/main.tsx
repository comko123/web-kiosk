import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Router'
import { QueryClient, QueryClientProvider } from "react-query"
import { RecoilRoot } from 'recoil'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const queryClient = new QueryClient()
root.render(
    <RecoilRoot>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={Router} />
        </QueryClientProvider>
    </RecoilRoot>)