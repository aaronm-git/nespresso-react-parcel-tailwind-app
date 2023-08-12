import { createContext } from 'react';
import allImages from '../utils/flattenImages';
const imagesContext = createContext(allImages);
export default imagesContext;
