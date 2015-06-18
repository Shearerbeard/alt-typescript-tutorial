/**
 * Created by shearerbeard on 6/16/15.
 */

import Alt = require("alt");
import chromeDebug = require('alt/utils/chromeDebug');

let altInstance = new Alt();

chromeDebug(altInstance);

export const alt = altInstance;
