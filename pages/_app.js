import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-loading-skeleton/dist/skeleton.css";
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import store from "../src/redux/configure-store";
import Layout from "../src/layout";
import Footer from "../src/layout/footer";
import { Router, useRouter } from "next/router";
import { AuthLayout } from "../src/layout/AuthLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { SkeletonTheme } from "react-loading-skeleton";
import SidebarDashboard from "../src/container/dashboard/sidebarDashboard";
import { useState } from "react";
import { useMobile } from "../src/components/common/checkMobile/useMobile"; 
const MAX_RETRIES = 2;

const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         retry: MAX_RETRIES,
         refetchOnWindowFocus: false,
      },
   },
});

function MyApp({ Component, pageProps }) {
   const isMobile = useMobile();
   const router = useRouter();
   const [isShow, setIsShow] = useState(false)
   return (
      <SkeletonTheme baseColor="#D9D9D9" highlightColor="#ffffff70">
         <QueryClientProvider client={queryClient}>
            <Provider store={store}>
               <ToastContainer />
               <AuthLayout>
                  <Layout />
                  <section>
                     <div className='d-flex'>
                        {router.pathname !== "/" && <aside className="d-none d-md-block">
                           <SidebarDashboard setIsShow={setIsShow} isShow={isShow} />
                        </aside>}
                        <main
                           className={`${router.pathname !== "/" ? 'pt-4 w-100' : ''}`}
                           style={{ height: `calc(100vh - ${isMobile ? '40px' : '85px'})`, overflow: 'auto', width: `calc(100% - ${isShow == true ? '111px' : '63px'})` }}
                        >
                           <div>
                              <div
                                 style={{ minHeight: `calc(100vh - ${isMobile ? '120px' : router.pathname !== "/" ? '165px' : '165px'})` }}
                              // style={{ minHeight: `calc(100vh - ${router.pathname !== "/" ? '165px' : '165px'})` }}
                              >
                                 <Component {...pageProps} />
                              </div>
                              {router.pathname !== "/" && <Footer />}
                           </div>
                        </main>
                     </div>
                  </section>
               </AuthLayout>
            </Provider>
         </QueryClientProvider>
      </SkeletonTheme>
   );
}

export default MyApp;
