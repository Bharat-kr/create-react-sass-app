import styles from './App.module.scss';
import RoleRoutes from './rbac/RoleRoutes';

function App() {
  return (
    <div className={styles.app}>
      <RoleRoutes />
    </div>
  );
}

export default App;
