import {generatePhotos} from './data.js';
import {renderPhotos} from './preview.js';
import {initForm} from './user-form.js';

const photos = generatePhotos();
renderPhotos(photos);
initForm();
