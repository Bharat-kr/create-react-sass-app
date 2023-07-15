import { ROLE_ROUTES } from './constants/index';
import { Route, Routes } from 'react-router-dom';

//styles
import styles from './RoleRoutes.module.scss';

const RoleRoutes = () => {
  return (
    <div className={styles.routePageContainer}>
      <Routes>
        {ROLE_ROUTES['admin'].map((route) => {
          return <Route key={route.name} path={route.link} exact element={route.component} />;
        })}
      </Routes>
    </div>
  );
};

export default RoleRoutes;
