import { Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
const Dashboard = () => {
  const { searchTerm } = useParams();
  return <Typography variant="h1">{`Buscar noticia de: ${searchTerm}`}</Typography>;
};

export default Dashboard;
