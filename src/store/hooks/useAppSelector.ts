import { useSelector } from 'react-redux';

import { RootState } from '../store';

export const useAppSelector = useSelector.withTypes<RootState>();
