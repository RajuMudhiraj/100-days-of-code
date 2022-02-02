import Login from './Login';
import Layout from './Layout';
import Editor from './Editor';
import Missing from './Missing';
import RequireAuth from './RequireAuth';
import { Routes, Route } from 'react-router-dom';

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}

function AllRoutes() {

    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path="login" element={<Login />} />

          <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
            <Route path="editor" element={<Editor />} />
          </Route>
  
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    );
  }
  
  export default AllRoutes;