import {generatePhotos} from './data.js';
import {renderPhotos} from './preview.js';

const photos = generatePhotos();
renderPhotos(photos);
