import { useNavigate } from 'react-router-dom';
import { FallbackAppError } from '../components/FallbackError';
import { LABEL_NOT_FOUND } from '../consts/labels';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <FallbackAppError
      error={{ message: LABEL_NOT_FOUND }}
      resetErrorBoundary={() => navigate(-1)}
    />
  );
};

export default NotFoundPage;
