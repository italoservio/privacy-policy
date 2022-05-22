import {useNavigate} from 'react-router-dom';

export default function useCoordinator() {
  const navigate = useNavigate();

  function goToStart() {
    return navigate('/');
  }

  function goToDataCollect() {
    return navigate('/data-collect');
  }

  function goToDataProtection() {
    return navigate('/data-protection');
  }

  function goToRights() {
    return navigate('/rights');
  }

  function goToFinish() {
    return navigate('/finish');
  }

  return {
    goToStart,
    goToDataCollect,
    goToDataProtection,
    goToRights,
    goToFinish
  };
}
