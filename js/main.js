import {renderPhotos} from './preview.js';
import {initForm} from './user-form.js';
import {getData} from './api.js';
import {showAlert} from './util.js';

getData(renderPhotos, showAlert);
initForm();
